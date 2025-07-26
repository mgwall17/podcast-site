# Blog System - Markdown to Blog Post Generator

This system allows you to create blog posts by writing markdown files and automatically converting them into fully formatted blog posts with the same styling as the existing blog.

## How It Works

1. **Write Markdown**: Create `.md` files in the `blog-markdown/` directory
2. **Run Generator**: Execute `npm run generate-blog` to convert markdown to blog posts
3. **Automatic Processing**: The system creates React components and updates the blog data

## Getting Started

### 1. Create a Markdown File

Create a new `.md` file in the `blog-markdown/` directory with the following frontmatter structure:

```markdown
---
title: "Your Blog Post Title"
slug: "your-blog-post-slug"
excerpt: "A brief description of your blog post that appears in the blog listing."
author: "Jose Zaragoza"
publishDate: "2024-01-15"
image: "/your-image.jpg"
tags: ["Tag1", "Tag2", "Tag3"]
categories: ["Category1", "Category2"]
featured: true
relatedMovie:
  title: "Movie Title"
  director: "Director Name"
  year: "1973"
  genre: "Horror Genre"
---

# Your Content Here

Write your blog post content using standard markdown syntax.

## Subheadings Work

You can use **bold text**, *italic text*, and [links](https://example.com).

Regular paragraphs will be automatically formatted with proper spacing.
```

### 2. Frontmatter Fields

- **title**: The blog post title (required)
- **slug**: URL-friendly version of the title (auto-generated if not provided)
- **excerpt**: Brief description for blog listing (auto-generated from content if not provided)
- **author**: Post author (defaults to "Jose Zaragoza")
- **publishDate**: Publication date in YYYY-MM-DD format (defaults to current date)
- **image**: Featured image path (defaults to "/default-blog-image.jpg")
- **tags**: Array of tags for the post
- **categories**: Array of categories for the post
- **featured**: Boolean to mark as featured post (defaults to false)
- **relatedMovie**: Object with movie information (optional)

### 3. Generate Blog Posts

Run the generation script:

```bash
npm run generate-blog
```

This will:
- Parse all `.md` files in `blog-markdown/`
- Generate React components in `src/pages/Blog/`
- Update `src/utils/blogData.js` with new post data
- Calculate read time automatically
- Format dates properly

### 4. Supported Markdown Features

- **Headers**: `#`, `##`, `###` (converted to Chakra UI Heading components)
- **Paragraphs**: Regular text (converted to Chakra UI Text components)
- **Bold**: `**bold text**` (converted to `<strong>`)
- **Italic**: `*italic text*` (converted to `<em>`)
- **Links**: `[text](url)` (converted to Chakra UI Link components)

## File Structure

```
blog-markdown/                 # Your markdown files go here
├── example-blog-post.md      # Example markdown file (The Exorcist)
├── psycho-the-ultimate-classic.md    # Converted existing post
├── the-thing-that-haunts-my-dreams.md # Converted existing post
├── hellraiser-hook-line-and-shiver.md # Converted existing post
└── your-new-post.md          # Your new posts

src/pages/Blog/               # Generated React components
├── existing-post.js          # Existing blog posts
└── your-new-post.js          # Auto-generated from markdown

src/utils/
├── blogData.js              # Updated automatically with new posts
└── markdownProcessor.js     # Markdown processing utilities

scripts/
└── generateBlogFromMarkdown.js  # Generation script
```

## Features

- **Grid Layout**: New posts automatically use the same grid layout as episodes
- **SEO Optimized**: Automatic meta tags and structured data
- **Responsive Design**: Works on all device sizes
- **Related Posts**: Automatically suggests related posts based on tags/categories
- **Movie Information**: Optional movie details box for film-related posts
- **Read Time**: Automatically calculated based on word count
- **Duplicate Prevention**: Won't create duplicate posts with same slug

## Example Workflow

1. Create `blog-markdown/my-new-post.md`
2. Write your content with proper frontmatter
3. Run `npm run generate-blog`
4. Your post is now live on the blog page!

## Tips

- Use descriptive slugs for better SEO
- Add relevant tags and categories for better organization
- Include a compelling excerpt to attract readers
- Use the `featured` flag sparingly for your best content
- Add movie information for film-related posts

## Troubleshooting

- **Script fails**: Check that your frontmatter is properly formatted with `---` delimiters
- **Post not appearing**: Ensure the slug is unique and doesn't conflict with existing posts
- **Formatting issues**: Verify your markdown syntax is correct
- **Missing images**: Make sure image paths start with `/` and the images exist in the `public/` directory
