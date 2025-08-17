# Comprehensive Markdown-Based Content Management System

This document explains the complete markdown-based content management system for the Horror Glass Podcast website, including static pages, episodes, and blog posts.

## Overview

The website now supports comprehensive markdown-based content management for:
- **Static Pages** (`content-markdown/pages/` directory) - About, Contact, Application pages
- **Home Page Sections** (`content-markdown/sections/` directory) - Hero, Features, Subscribe sections
- **Blog Posts** (`blog-markdown/` directory) - All blog content
- **Episodes** (`episodes-markdown/` directory) - Published and upcoming episodes

## Quick Start - Single Command

### Update Everything at Once
```bash
npm run update-content
```
**This is the main command you'll use!** It handles:
- ✅ Static page generation from markdown
- ✅ Home page sections from markdown
- ✅ Blog post generation from markdown
- ✅ Episode generation from markdown
- ✅ Automatic cleanup of deleted content
- ✅ File validation and error handling
- ✅ Backup creation before changes

## Directory Structure

```
content-markdown/
├── pages/                    # Static pages (About, Contact, etc.)
│   ├── about.md
│   ├── contact.md
│   └── application.md
├── sections/                 # Home page sections
│   ├── hero.md
│   ├── introduction.md
│   ├── features.md
│   └── subscribe.md
└── templates/                # Templates for new content
    └── page-template.md

blog-markdown/                # Blog posts
├── psycho-the-ultimate-classic.md
├── the-thing-that-haunts-my-dreams.md
└── hellraiser-hook-line-and-shiver.md

episodes-markdown/            # Episode content
├── published/                # Published episodes
│   ├── psycho.md
│   └── the-thing.md
└── upcoming/                 # Upcoming episodes
    ├── 28-days-later.md
    ├── halloween.md
    └── hellraiser.md
```

## Static Pages Management

### Editing Existing Static Pages

1. **Edit the markdown file:**
   - `content-markdown/pages/about.md` - About page
   - `content-markdown/pages/contact.md` - Contact page
   - `content-markdown/pages/application.md` - Application page

2. **Run the update command:**
   ```bash
   npm run update-content
   ```

### Example: Updating Contact Information

Edit `content-markdown/pages/contact.md`:
```markdown
---
title: "Contact Jose Zaragoza - Horror Glass Podcast"
# ... other frontmatter
contactLinks:
  spotify:
    url: "https://your-new-spotify-url"
    label: "Spotify"
    colorScheme: "green"
  # ... other links
---

# How to Contact Me

Your updated contact content here...
```

### Creating New Static Pages

1. Create a new `.md` file in `content-markdown/pages/`
2. Use the template from `content-markdown/templates/page-template.md`
3. Run `npm run update-content`

## Home Page Sections Management

### Editing Home Page Content

The home page is built from sections in `content-markdown/sections/`:

- **Hero Section** (`hero.md`) - Main banner, logo, call-to-action buttons
- **Introduction** (`introduction.md`) - Welcome message and description
- **Features** (`features.md`) - What makes the podcast special
- **Subscribe** (`subscribe.md`) - Call-to-action for listeners

### Example: Updating Hero Section

Edit `content-markdown/sections/hero.md`:
```markdown
---
title: "Welcome to the Horror Glass Podcast"
logo:
  src: "/HPG_Logo_Purple.png"
  width: "200px"
  height: "200px"
  alt: "Horror Glass Podcast Logo"
callToAction:
  primary:
    text: "Listen to Episodes"
    href: "/Episodes"
    colorScheme: "purple"
  secondary:
    text: "View Blog"
    href: "/Blog"
    colorScheme: "purple"
    variant: "outline"
---

# Welcome to the Horror Glass Podcast

Your gateway to exploring the psychological depths of horror cinema
```

## Blog Management

### Creating a New Blog Post

1. Create a new `.md` file in `blog-markdown/`
2. Use this template:

```markdown
---
title: "Your Blog Post Title"
excerpt: "A brief description of your post"
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

Your blog post content goes here...
```

3. Run `npm run update-content`

### Editing/Deleting Blog Posts

- **Edit:** Modify the `.md` file and run `npm run update-content`
- **Delete:** Remove the `.md` file and run `npm run update-content`

## Episode Management

### Updating Episodes (like changing Spotify links)

1. **Edit the markdown file:**
   - Published episodes: `episodes-markdown/published/episode-name.md`
   - Upcoming episodes: `episodes-markdown/upcoming/episode-name.md`

2. **Update the content:**
   ```markdown
   ---
   spotifyEmbed: 'https://open.spotify.com/embed/episode/NEW_EPISODE_ID'
   # ... other frontmatter
   ---
   ```

3. **Run the update command:**
   ```bash
   npm run update-content
   ```

### Creating New Episodes

1. Create a new `.md` file in the appropriate directory
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

Write your movie summary here...
```

3. Run `npm run update-content`

## Advanced Usage

### Individual Component Updates

If you only want to update specific content types:

```bash
# Update only static pages and home sections
npm run generate-static

# Update only blog posts
npm run generate-blog

# Update only episodes
npm run generate-episodes
```

### Content Validation

The system automatically:
- ✅ Validates markdown syntax
- ✅ Checks required frontmatter fields
- ✅ Creates backups before changes
- ✅ Cleans up deleted content
- ✅ Provides detailed error messages

### Backup System

Before each update, the system creates backups in `.backups/` directory:
- `timestamp-blogData.js`
- `timestamp-episodeData.js`
- `timestamp-homeData.js`

## File Generation Process

When you run `npm run update-content`, the system:

1. **Validates** directory structure
2. **Creates backups** of existing data files
3. **Cleans up** orphaned files from deletions
4. **Processes static content** (pages and home sections)
5. **Processes blog content** from markdown
6. **Processes episode content** from markdown
7. **Displays summary** of all content

## Troubleshooting

### Common Issues

**Content not updating:**
- Check markdown file syntax
- Ensure required frontmatter fields are present
- Run `npm run update-content` again

**Script fails:**
- Check console output for specific error messages
- Verify all markdown files have proper frontmatter
- Ensure you're in the project root directory

**Deleted content still appears:**
- Run `npm run update-content` to clean up orphaned files
- Clear browser cache
- Restart development server

### Getting Help

1. Check console output for detailed error messages
2. Verify markdown syntax using a markdown validator
3. Ensure all required frontmatter fields are present
4. Check that file paths and names are correct

## Best Practices

### Content Organization
- Use descriptive filenames with hyphens: `the-exorcist-review.md`
- Keep related images in the `public/` directory
- Maintain consistent frontmatter structure

### Workflow
1. **Edit** markdown files for your content
2. **Test** by running `npm run update-content`
3. **Verify** content appears correctly on the website
4. **Commit** changes to version control

### Performance
- The system processes all content types in parallel
- Backups are created automatically
- Only changed content is regenerated

## Summary

This comprehensive content management system gives you:

- **Single Command Updates:** `npm run update-content` handles everything
- **Markdown-Based Editing:** Easy-to-edit content files
- **Automatic Cleanup:** Handles deletions and orphaned files
- **Backup Protection:** Automatic backups before changes
- **Error Handling:** Detailed error messages and validation
- **Flexible Structure:** Support for static pages, blog posts, and episodes

The client only needs to remember one command: `npm run update-content` - it handles all content updates, additions, and deletions automatically!
