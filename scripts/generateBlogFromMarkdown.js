#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { parseMarkdownFile, generateBlogPostData, generateBlogComponent } = require('../src/utils/markdownProcessor');

// Configuration
const MARKDOWN_DIR = path.join(__dirname, '..', 'blog-markdown');
const BLOG_PAGES_DIR = path.join(__dirname, '..', 'src', 'pages', 'Blog');
const BLOG_DATA_FILE = path.join(__dirname, '..', 'src', 'utils', 'blogData.js');

// Ensure directories exist
if (!fs.existsSync(MARKDOWN_DIR)) {
  fs.mkdirSync(MARKDOWN_DIR, { recursive: true });
  console.log(`Created markdown directory: ${MARKDOWN_DIR}`);
}

if (!fs.existsSync(BLOG_PAGES_DIR)) {
  fs.mkdirSync(BLOG_PAGES_DIR, { recursive: true });
  console.log(`Created blog pages directory: ${BLOG_PAGES_DIR}`);
}

// Function to get next available ID
function getNextId(existingPosts) {
  if (existingPosts.length === 0) return 1;
  return Math.max(...existingPosts.map(post => post.id)) + 1;
}

// Function to read existing blog data
function readExistingBlogData() {
  try {
    const blogDataContent = fs.readFileSync(BLOG_DATA_FILE, 'utf8');
    // Extract the blogPostsData array from the file
    const match = blogDataContent.match(/export const blogPostsData = (\[[\s\S]*?\]);/);
    if (match) {
      // Use eval to parse the array (not ideal but works for this use case)
      // In production, you might want to use a more robust parser
      return eval(match[1]);
    }
    return [];
  } catch (error) {
    console.log('No existing blog data found, starting fresh');
    return [];
  }
}

// Function to update blog data file
function updateBlogDataFile(blogPosts) {
  const blogDataTemplate = `export const blogPostsData = ${JSON.stringify(blogPosts, null, 2)};

export const getBlogPostStructuredData = (post) => {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.excerpt,
    "image": \`https://horrorglassPodcast.com\${post.image}\`,
    "author": {
      "@type": "Person",
      "name": post.author
    },
    "publisher": {
      "@type": "Organization",
      "name": "Horror Glass Podcast",
      "logo": {
        "@type": "ImageObject",
        "url": "https://horrorglassPodcast.com/HPG_Logo_Purple.png"
      }
    },
    "datePublished": post.publishDate,
    "dateModified": post.modifiedDate,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": \`https://horrorglassPodcast.com/Blog/\${post.slug}\`
    },
    "articleSection": post.categories,
    "keywords": post.tags.join(", "),
    "genre": "Horror",
    "about": post.relatedMovie ? {
      "@type": "Movie",
      "name": post.relatedMovie.title,
      "dateCreated": post.relatedMovie.year,
      "director": {
        "@type": "Person",
        "name": post.relatedMovie.director
      }
    } : undefined
  };
};

export const sortBlogPosts = (posts, sortBy = 'date', order = 'desc') => {
  return [...posts].sort((a, b) => {
    let comparison = 0;
    
    switch (sortBy) {
      case 'date':
        comparison = new Date(a.publishDate) - new Date(b.publishDate);
        break;
      case 'title':
        comparison = a.title.localeCompare(b.title);
        break;
      case 'author':
        comparison = a.author.localeCompare(b.author);
        break;
      case 'readTime':
        const aTime = parseInt(a.readTime.match(/\\d+/)[0]);
        const bTime = parseInt(b.readTime.match(/\\d+/)[0]);
        comparison = aTime - bTime;
        break;
      default:
        comparison = new Date(a.publishDate) - new Date(b.publishDate);
    }
    
    return order === 'desc' ? -comparison : comparison;
  });
};

export const filterBlogPosts = (posts, filters) => {
  return posts.filter(post => {
    if (filters.category && filters.category !== 'all') {
      if (!post.categories.some(cat => cat.toLowerCase().includes(filters.category.toLowerCase()))) {
        return false;
      }
    }
    
    if (filters.tag && filters.tag !== 'all') {
      if (!post.tags.some(tag => tag.toLowerCase().includes(filters.tag.toLowerCase()))) {
        return false;
      }
    }
    
    if (filters.featured !== undefined) {
      if (post.featured !== filters.featured) return false;
    }
    
    if (filters.search) {
      const searchTerm = filters.search.toLowerCase();
      return (
        post.title.toLowerCase().includes(searchTerm) ||
        post.excerpt.toLowerCase().includes(searchTerm) ||
        post.author.toLowerCase().includes(searchTerm) ||
        post.tags.some(tag => tag.toLowerCase().includes(searchTerm)) ||
        post.categories.some(cat => cat.toLowerCase().includes(searchTerm)) ||
        (post.relatedMovie && (
          post.relatedMovie.title.toLowerCase().includes(searchTerm) ||
          post.relatedMovie.director.toLowerCase().includes(searchTerm)
        ))
      );
    }
    
    return true;
  });
};

export const getAllCategories = () => {
  const allCategories = blogPostsData.flatMap(post => post.categories);
  return [...new Set(allCategories)].sort();
};

export const getAllTags = () => {
  const allTags = blogPostsData.flatMap(post => post.tags);
  return [...new Set(allTags)].sort();
};

export const getFeaturedPosts = () => {
  return blogPostsData.filter(post => post.featured);
};

export const getRelatedPosts = (currentPost, limit = 3) => {
  return blogPostsData
    .filter(post => post.id !== currentPost.id)
    .filter(post => 
      post.tags.some(tag => currentPost.tags.includes(tag)) ||
      post.categories.some(cat => currentPost.categories.includes(cat))
    )
    .slice(0, limit);
};`;

  fs.writeFileSync(BLOG_DATA_FILE, blogDataTemplate);
}

// Main function to process markdown files
function processMarkdownFiles() {
  console.log('🚀 Starting blog generation from markdown files...');
  
  // Read existing blog data
  const existingPosts = readExistingBlogData();
  console.log(`📚 Found ${existingPosts.length} existing blog posts`);
  
  // Get all markdown files
  const markdownFiles = fs.readdirSync(MARKDOWN_DIR)
    .filter(file => file.endsWith('.md'))
    .map(file => path.join(MARKDOWN_DIR, file));
  
  console.log(`📝 Found ${markdownFiles.length} markdown files to process`);
  
  if (markdownFiles.length === 0) {
    console.log('ℹ️  No markdown files found. Create .md files in the blog-markdown directory.');
    return;
  }
  
  const newPosts = [];
  let nextId = getNextId(existingPosts);
  
  // Process each markdown file
  for (const filePath of markdownFiles) {
    console.log(`\n📄 Processing: ${path.basename(filePath)}`);
    
    const markdownData = parseMarkdownFile(filePath);
    if (!markdownData) {
      console.log(`❌ Failed to parse ${filePath}`);
      continue;
    }
    
    // Generate blog post data
    const blogPostData = generateBlogPostData(markdownData, nextId++);
    
    // Check if post already exists (force regeneration for styling updates)
    const existingPost = existingPosts.find(post => post.slug === blogPostData.slug);
    if (existingPost) {
      console.log(`🔄 Post with slug "${blogPostData.slug}" already exists, regenerating with new styling...`);
      // Use existing ID to maintain consistency
      blogPostData.id = existingPost.id;
      nextId--; // Don't increment since we're reusing an ID
    }
    newPosts.push(blogPostData);
    
    // Generate React component
    const componentCode = generateBlogComponent(markdownData);
    const componentPath = path.join(BLOG_PAGES_DIR, `${blogPostData.slug}.js`);
    
    fs.writeFileSync(componentPath, componentCode);
    console.log(`✅ Generated component: ${componentPath}`);
  }
  
  if (newPosts.length > 0) {
    // Merge existing posts with new/updated posts
    const allPosts = [...existingPosts];
    
    // Replace existing posts or add new ones
    newPosts.forEach(newPost => {
      const existingIndex = allPosts.findIndex(post => post.slug === newPost.slug);
      if (existingIndex !== -1) {
        allPosts[existingIndex] = newPost; // Replace existing
      } else {
        allPosts.push(newPost); // Add new
      }
    });
    
    updateBlogDataFile(allPosts);
    console.log(`\n✅ Updated blog data with ${newPosts.length} posts (regenerated)`);
    console.log(`📊 Total posts: ${allPosts.length}`);
  } else {
    console.log('\n📝 No posts to process');
  }
  
  console.log('\n🎉 Blog generation complete!');
}

// Run the script
if (require.main === module) {
  processMarkdownFiles();
}

module.exports = { processMarkdownFiles };
