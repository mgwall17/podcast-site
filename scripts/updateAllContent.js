#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { processMarkdownFiles: processBlogFiles } = require('./generateBlogFromMarkdown');
const { processEpisodeMarkdownFiles: processEpisodeFiles } = require('./generateEpisodesFromMarkdown');
const { processStaticContent } = require('./generateStaticFromMarkdown');

// Configuration
const BLOG_MARKDOWN_DIR = path.join(__dirname, '..', 'blog-markdown');
const EPISODES_MARKDOWN_DIR = path.join(__dirname, '..', 'episodes-markdown');
const CONTENT_MARKDOWN_DIR = path.join(__dirname, '..', 'content-markdown');
const SRC_PAGES_DIR = path.join(__dirname, '..', 'src', 'pages');
const BLOG_PAGES_DIR = path.join(SRC_PAGES_DIR, 'Blog');

// Function to clean up orphaned files
function cleanupOrphanedFiles() {
  console.log('🧹 Cleaning up orphaned files...');
  
  let cleanupCount = 0;

  // Clean up blog components that no longer have corresponding markdown files
  if (fs.existsSync(BLOG_PAGES_DIR) && fs.existsSync(BLOG_MARKDOWN_DIR)) {
    const blogMarkdownFiles = fs.readdirSync(BLOG_MARKDOWN_DIR)
      .filter(file => file.endsWith('.md'))
      .map(file => path.basename(file, '.md'));

    const blogComponents = fs.readdirSync(BLOG_PAGES_DIR)
      .filter(file => file.endsWith('.js'))
      .map(file => path.basename(file, '.js'));

    // Find components without corresponding markdown files
    const orphanedBlogComponents = blogComponents.filter(component => {
      // Convert component name back to potential markdown filename
      const potentialMarkdownName = component
        .replace(/([A-Z])/g, '-$1')
        .toLowerCase()
        .replace(/^-/, '');
      
      return !blogMarkdownFiles.some(mdFile => {
        const normalizedMdFile = mdFile.toLowerCase().replace(/[^a-z0-9]/g, '-');
        return normalizedMdFile === potentialMarkdownName || 
               mdFile === component.toLowerCase() ||
               mdFile.replace(/[^a-z0-9]/g, '-') === potentialMarkdownName;
      });
    });

    // Delete orphaned blog components
    orphanedBlogComponents.forEach(component => {
      const componentPath = path.join(BLOG_PAGES_DIR, `${component}.js`);
      if (fs.existsSync(componentPath)) {
        fs.unlinkSync(componentPath);
        console.log(`🗑️  Removed orphaned blog component: ${component}.js`);
        cleanupCount++;
      }
    });
  }

  // Clean up static page components that no longer have corresponding markdown files
  const staticPages = ['About', 'Contact', 'Application'];
  const contentPagesDir = path.join(CONTENT_MARKDOWN_DIR, 'pages');
  
  if (fs.existsSync(contentPagesDir)) {
    const contentMarkdownFiles = fs.readdirSync(contentPagesDir)
      .filter(file => file.endsWith('.md'))
      .map(file => path.basename(file, '.md').toLowerCase());

    staticPages.forEach(pageName => {
      const componentPath = path.join(SRC_PAGES_DIR, `${pageName}.js`);
      const markdownExists = contentMarkdownFiles.includes(pageName.toLowerCase());
      
      if (fs.existsSync(componentPath) && !markdownExists) {
        fs.unlinkSync(componentPath);
        console.log(`🗑️  Removed orphaned static page component: ${pageName}.js`);
        cleanupCount++;
      }
    });
  }

  if (cleanupCount > 0) {
    console.log(`✅ Cleaned up ${cleanupCount} orphaned files`);
  } else {
    console.log('✅ No orphaned files found');
  }
}

// Function to validate directory structure
function validateDirectoryStructure() {
  console.log('📁 Validating directory structure...');
  
  const requiredDirs = [
    BLOG_MARKDOWN_DIR,
    path.join(EPISODES_MARKDOWN_DIR, 'published'),
    path.join(EPISODES_MARKDOWN_DIR, 'upcoming'),
    path.join(CONTENT_MARKDOWN_DIR, 'pages'),
    path.join(CONTENT_MARKDOWN_DIR, 'sections'),
    path.join(CONTENT_MARKDOWN_DIR, 'templates'),
    BLOG_PAGES_DIR
  ];

  requiredDirs.forEach(dir => {
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
      console.log(`📁 Created missing directory: ${path.relative(process.cwd(), dir)}`);
    }
  });

  console.log('✅ Directory structure validated');
}

// Function to backup existing data files
function backupDataFiles() {
  console.log('💾 Creating backup of existing data files...');
  
  const dataFiles = [
    path.join(__dirname, '..', 'src', 'utils', 'blogData.js'),
    path.join(__dirname, '..', 'src', 'utils', 'episodeData.js'),
    path.join(__dirname, '..', 'src', 'utils', 'homeData.js')
  ];

  const backupDir = path.join(__dirname, '..', '.backups');
  if (!fs.existsSync(backupDir)) {
    fs.mkdirSync(backupDir, { recursive: true });
  }

  const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
  
  dataFiles.forEach(filePath => {
    if (fs.existsSync(filePath)) {
      const fileName = path.basename(filePath);
      const backupPath = path.join(backupDir, `${timestamp}-${fileName}`);
      fs.copyFileSync(filePath, backupPath);
      console.log(`💾 Backed up: ${fileName}`);
    }
  });

  console.log('✅ Backup complete');
}

// Function to display summary statistics
function displaySummary() {
  console.log('\n📊 Content Summary:');
  
  // Count markdown files
  const blogCount = fs.existsSync(BLOG_MARKDOWN_DIR) 
    ? fs.readdirSync(BLOG_MARKDOWN_DIR).filter(f => f.endsWith('.md')).length 
    : 0;
  
  const publishedEpisodesCount = fs.existsSync(path.join(EPISODES_MARKDOWN_DIR, 'published'))
    ? fs.readdirSync(path.join(EPISODES_MARKDOWN_DIR, 'published')).filter(f => f.endsWith('.md')).length
    : 0;
  
  const upcomingEpisodesCount = fs.existsSync(path.join(EPISODES_MARKDOWN_DIR, 'upcoming'))
    ? fs.readdirSync(path.join(EPISODES_MARKDOWN_DIR, 'upcoming')).filter(f => f.endsWith('.md')).length
    : 0;
  
  const staticPagesCount = fs.existsSync(path.join(CONTENT_MARKDOWN_DIR, 'pages'))
    ? fs.readdirSync(path.join(CONTENT_MARKDOWN_DIR, 'pages')).filter(f => f.endsWith('.md')).length
    : 0;
  
  const sectionsCount = fs.existsSync(path.join(CONTENT_MARKDOWN_DIR, 'sections'))
    ? fs.readdirSync(path.join(CONTENT_MARKDOWN_DIR, 'sections')).filter(f => f.endsWith('.md')).length
    : 0;

  console.log(`   📝 Blog Posts: ${blogCount}`);
  console.log(`   🎙️  Published Episodes: ${publishedEpisodesCount}`);
  console.log(`   ⏳ Upcoming Episodes: ${upcomingEpisodesCount}`);
  console.log(`   📄 Static Pages: ${staticPagesCount}`);
  console.log(`   🏠 Home Sections: ${sectionsCount}`);
  console.log(`   📊 Total Content Files: ${blogCount + publishedEpisodesCount + upcomingEpisodesCount + staticPagesCount + sectionsCount}`);
}

// Main function to update all content
async function updateAllContent() {
  console.log('🚀 Starting comprehensive content update...');
  console.log('=' .repeat(60));
  
  const startTime = Date.now();
  
  try {
    // Step 1: Validate directory structure
    validateDirectoryStructure();
    
    // Step 2: Create backups
    backupDataFiles();
    
    // Step 3: Clean up orphaned files first
    cleanupOrphanedFiles();
    
    console.log('\n' + '=' .repeat(60));
    
    // Step 4: Process static content (pages and home sections)
    console.log('📄 PROCESSING STATIC CONTENT');
    console.log('=' .repeat(60));
    await processStaticContent();
    
    console.log('\n' + '=' .repeat(60));
    
    // Step 5: Process blog content
    console.log('📝 PROCESSING BLOG CONTENT');
    console.log('=' .repeat(60));
    await processBlogFiles();
    
    console.log('\n' + '=' .repeat(60));
    
    // Step 6: Process episode content
    console.log('🎙️  PROCESSING EPISODE CONTENT');
    console.log('=' .repeat(60));
    await processEpisodeFiles();
    
    console.log('\n' + '=' .repeat(60));
    
    // Step 7: Display summary
    displaySummary();
    
    const endTime = Date.now();
    const duration = ((endTime - startTime) / 1000).toFixed(2);
    
    console.log('\n' + '=' .repeat(60));
    console.log('🎉 CONTENT UPDATE COMPLETE!');
    console.log('=' .repeat(60));
    console.log(`⏱️  Total time: ${duration} seconds`);
    console.log('✅ All content has been successfully updated from markdown files');
    console.log('🔄 Your website is now ready with the latest content changes');
    
  } catch (error) {
    console.error('\n❌ Error during content update:', error);
    console.error('💡 Check the error message above and ensure all markdown files are properly formatted');
    process.exit(1);
  }
}

// Run the script
if (require.main === module) {
  updateAllContent();
}

module.exports = { updateAllContent };
