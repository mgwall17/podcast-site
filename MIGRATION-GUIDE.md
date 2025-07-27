# Migration Guide: JSON to Markdown Episodes

This guide explains how to migrate from the old JSON-based episode system to the new markdown-based system.

## What Changed

### Before (JSON)
- Episodes were stored in `src/utils/episodeData.js` as a JavaScript array
- Adding new episodes required editing complex JSON structures
- Difficult for non-technical users to add content
- All data mixed together in one large file

### After (Markdown)
- Episodes are stored as individual markdown files in `episodes-markdown/`
- Easy-to-edit format with clear structure
- Separate files for published and upcoming episodes
- User-friendly templates and scripts

## Migration Steps

### 1. Your Data Has Been Converted ✅

Your existing episodes have already been converted to markdown files:

```
episodes-markdown/
├── published/
│   ├── psycho.md
│   ├── the-thing.md
│   └── the-thing.md
├── upcoming/
│   ├── hellraiser.md
│   ├── halloween.md
│   ├── autopsy-jane-doe.md
│   ├── 28-years-later.md
│   ├── 28-days-later.md
│   └── sinners.md
└── templates/
    └── episode-template.md
```

### 2. Update Your Components (Optional)

If you want to use the markdown system going forward, you can update your imports:

**Current (JSON-based):**
```javascript
import { episodesData } from '../utils/episodeData.js';
```

**New (Markdown-based):**
```javascript
import { episodesData } from '../utils/episodeMarkdownProcessor.js';
```

The data structure remains exactly the same, so your components won't need any other changes.

### 3. Choose Your Workflow

You now have two options:

#### Option A: Keep Using JSON (No Changes Required)
- Continue editing `src/utils/episodeData.js` as before
- Your existing workflow remains unchanged
- The markdown files are just a backup/alternative

#### Option B: Switch to Markdown (Recommended)
- Use the markdown files for all future episodes
- Update your imports to use `episodeMarkdownProcessor.js`
- Enjoy the easier editing experience

## Adding New Episodes

### Using Markdown (Recommended)

#### Method 1: Interactive Script
```bash
npm run add-episode
```
This will guide you through creating a new episode step-by-step.

#### Method 2: Copy Template
```bash
cp episodes-markdown/templates/episode-template.md episodes-markdown/upcoming/new-movie.md
```
Then edit the file manually.

### Using JSON (Old Method)
Continue editing `src/utils/episodeData.js` as before.

## Available Scripts

```bash
# Convert JSON to markdown (already done)
npm run convert-episodes

# Add new episode interactively
npm run add-episode

# Generate blog posts (existing)
npm run generate-blog
```

## File Structure Comparison

### JSON Structure (Old)
```javascript
{
  id: 1,
  title: "Psycho",
  slug: "psycho",
  image: "/psycho.jpg",
  movieYear: "1960",
  director: "Alfred Hitchcock",
  summary: "A secretary embezzles money...",
  isPublished: true,
  // ... more fields
}
```

### Markdown Structure (New)
```markdown
---
# Episode Information
title: "Psycho"
slug: "psycho"
isPublished: true
# ... more frontmatter fields
---

# Movie Summary

A secretary embezzles money and checks into a secluded motel...

## Additional Notes

Add any additional insights here...
```

## Benefits of Markdown System

1. **User-Friendly**: Easy to edit in any text editor
2. **Version Control**: Each episode is a separate file
3. **Organized**: Clear separation between published/upcoming
4. **Extensible**: Easy to add new fields or content
5. **Collaborative**: Non-technical users can contribute
6. **Backup**: Markdown files serve as readable backups

## Troubleshooting

### If you encounter issues:

1. **Markdown parsing errors**: Check YAML frontmatter syntax
2. **Missing episodes**: Ensure files are in correct directories
3. **Import errors**: Verify you're importing from the right file
4. **Build failures**: Check console for specific error messages

### Getting Help

- Read `README-EPISODE-MARKDOWN.md` for detailed instructions
- Check the template file for proper formatting
- Use the interactive script (`npm run add-episode`) for guidance

## Rollback Plan

If you need to go back to the JSON system:
1. Simply continue using `src/utils/episodeData.js`
2. Your existing imports will continue to work
3. The markdown files won't interfere with your site

## Next Steps

1. **Try the new system**: Create a test episode using `npm run add-episode`
2. **Update imports**: Switch to `episodeMarkdownProcessor.js` when ready
3. **Train your team**: Share the documentation with content creators
4. **Enjoy easier editing**: Add new movies with simple markdown files!

The markdown system is designed to make your life easier while maintaining full compatibility with your existing setup.
