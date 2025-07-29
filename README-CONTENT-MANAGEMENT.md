# Content Management System

This document explains how to manage content for the Horror Glass Podcast website using the markdown-based content management system.

## Overview

The website now supports markdown-based content management for:
- **Blog Posts** (`blog-markdown/` directory)
- **Episodes** (`episodes-markdown/` directory)
- **Static Pages** (`content-markdown/` directory) - *Coming Soon*

## Quick Start

### Update All Content
```bash
npm run update-content
```
This command will:
1. Generate blog posts from markdown files
2. Generate episodes from markdown files
3. Remove any deleted content from the website

### Individual Updates
```bash
# Update only blog posts
npm run generate-blog

# Update only episodes
npm run generate-episodes
```

## Blog Management

### Directory Structure
```
blog-markdown/
├── psycho-the-ultimate-classic.md
├── the-thing-that-haunts-my-dreams.md
└── hellraiser-hook-line-and-shiver.md
```

### Creating a New Blog Post

1. Create a new `.md` file in the `blog-markdown/` directory
2. Use this template:

```markdown
---
title: "Your Blog Post Title"
excerpt: "A brief description of your post for previews and SEO"
author: "Jose Zaragoza"
publishDate: "2024-01-15"
publishDateFormatted: "January 15th, 2024"
image: "/your-image.jpg"
tags: ["Horror", "Film Analysis", "Movie Title"]
categories: ["Movie Reviews", "Horror Analysis"]
featured: true
relatedMovie:
  title: "Movie Title"
  director: "Director Name"
  year: "2024"
  genre: "Horror Genre"
---

# Your Main Heading

Your blog post content goes here. You can use all standard markdown formatting:

- **Bold text**
- *Italic text*
- [Links](https://example.com)
- Lists
- Code blocks
- Images

## Subheadings

More content here...
```

3. Run `npm run generate-blog` to update the website

### Editing Existing Blog Posts

1. Edit the `.md` file in the `blog-markdown/` directory
2. Run `npm run generate-blog` to update the website

### Deleting Blog Posts

1. Delete the `.md` file from the `blog-markdown/` directory
2. Run `npm run generate-blog` to remove it from the website

**Important**: The script will automatically:
- Remove the blog post from the data file
- Delete the corresponding React component
- Update all related content

## Episode Management

### Directory Structure
```
episodes-markdown/
├── published/
│   ├── psycho.md
│   └── the-thing.md
└── upcoming/
    ├── 28-days-later.md
    ├── halloween.md
    └── hellraiser.md
```

### Creating a New Episode

1. Create a new `.md` file in either:
   - `episodes-markdown/published/` (for published episodes)
   - `episodes-markdown/upcoming/` (for upcoming episodes)

2. Use this template:

```markdown
---
# Episode Information
title: "Movie Title"
slug: "movie-title-slug"
isPublished: true
publishDate: "2024-01-15"
publishDateFormatted: "January 15th, 2024"
duration: "45 min"

# Movie Information
movieTitle: "Movie Title"
movieYear: "2024"
director: "Director Name"
image: "/movie-image.jpg"
genres: ["Horror", "Thriller"]
scareLevel: 4
triggerWarnings: ["Violence", "Gore"]

# Podcast Content
guest: "Guest Name and description"
spotifyEmbed: 'https://open.spotify.com/embed/episode/...'
---

# Movie Summary

Write your movie summary here. This will be displayed on the episode page.

## Additional Notes

Any additional notes about the episode, movie, or discussion points.
```

3. Run `npm run generate-episodes` to update the website

### Moving Episodes Between Published/Upcoming

1. Move the `.md` file between directories
2. Update the `isPublished` field in the frontmatter:
   - `isPublished: true` for published episodes
   - `isPublished: false` for upcoming episodes
3. Run `npm run generate-episodes`

### Deleting Episodes

1. Delete the `.md` file from the appropriate directory
2. Run `npm run generate-episodes` to remove it from the website

## Content Deletion Handling

The updated scripts now properly handle content deletion:

### What Happens When You Delete Content

**Blog Posts:**
- Removes the post from `src/utils/blogData.js`
- Deletes the React component from `src/pages/Blog/`
- Updates all related data and indexes

**Episodes:**
- Removes the episode from `src/utils/episodeData.js`
- Updates all episode listings and data
- Reassigns IDs to maintain consistency

### Verification

After running the update scripts, you can verify deletions by:
1. Checking that the content no longer appears on the website
2. Confirming the data files have been updated
3. Ensuring no broken links remain

## Best Practices

### File Naming
- Use lowercase letters and hyphens for filenames
- Make filenames descriptive: `the-exorcist-masterpiece.md`
- Avoid spaces and special characters

### Content Organization
- Keep related images in the `public/` directory
- Use consistent naming conventions
- Maintain proper frontmatter formatting

### Workflow
1. **Create/Edit** content in markdown files
2. **Test locally** by running the update scripts
3. **Verify** content appears correctly on the website
4. **Commit** changes to version control

## Troubleshooting

### Common Issues

**Script fails to run:**
- Ensure you're in the project root directory
- Check that all dependencies are installed: `npm install`

**Content not updating:**
- Verify the markdown file has correct frontmatter
- Check for syntax errors in the markdown
- Ensure the file is in the correct directory

**Deleted content still appears:**
- Run the appropriate generation script again
- Clear your browser cache
- Restart the development server

### Getting Help

If you encounter issues:
1. Check the console output for error messages
2. Verify your markdown syntax
3. Ensure all required frontmatter fields are present
4. Try running `npm run update-content` to refresh everything

## Advanced Usage

### Batch Operations
```bash
# Update everything at once
npm run update-content

# Convert existing JSON data to markdown (one-time operation)
npm run convert-episodes
```

### Development Workflow
```bash
# Start development server
npm run dev

# In another terminal, update content as needed
npm run generate-blog
npm run generate-episodes
```

The development server will automatically reload when content changes are detected.
