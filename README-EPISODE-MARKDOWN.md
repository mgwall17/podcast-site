# Episode Markdown System

This system allows you to manage podcast episodes and movie data using easy-to-edit markdown files instead of complex JSON structures.

## Directory Structure

```
episodes-markdown/
├── published/          # Episodes that are live/published
├── upcoming/           # Episodes that are scheduled/unpublished
└── templates/          # Template files for creating new episodes
```

## How to Add a New Movie/Episode

### 1. Copy the Template
```bash
cp episodes-markdown/templates/episode-template.md episodes-markdown/upcoming/new-movie.md
```

### 2. Edit the Markdown File
Open the new file and fill in all the frontmatter fields:

```markdown
---
# Episode Information
title: "The Exorcist"
slug: "the-exorcist"
isPublished: false
publishDate: "2025-01-15"
publishDateFormatted: "January 15, 2025"
duration: "52 minutes"

# Movie Information
movieTitle: "The Exorcist"
movieYear: "1973"
director: "William Friedkin"
image: "/exorcist.jpg"
genres: ["Supernatural", "Classic", "Psychological"]
scareLevel: 5
triggerWarnings: ["Religious Content", "Possession", "Violence", "Disturbing Imagery"]

# Podcast Content
guest: "Maria discusses the groundbreaking special effects and the cultural impact of this horror masterpiece."
spotifyEmbed: ""
---

# Movie Summary

A young girl becomes possessed by a mysterious entity, and her mother seeks the help of two priests to save her daughter. This supernatural horror classic explores themes of faith, good vs evil, and the power of belief.

## Additional Notes

Add any additional insights, trivia, or discussion points here...
```

### 3. Add Movie Poster
Place the movie poster image in the `public/` directory and reference it in the `image` field.

### 4. When Ready to Publish
Move the file from `upcoming/` to `published/` and set `isPublished: true`.

## Field Reference

### Required Fields

- **title**: Episode title (usually the movie name)
- **slug**: URL-friendly version (lowercase, hyphens instead of spaces)
- **isPublished**: `true` for live episodes, `false` for upcoming
- **publishDate**: Date in YYYY-MM-DD format
- **publishDateFormatted**: Human-readable date
- **duration**: Episode length (e.g., "45 minutes")
- **movieYear**: Year the movie was released
- **director**: Movie director name
- **image**: Path to movie poster (e.g., "/movie-poster.jpg")
- **genres**: Array of genre tags (e.g., ["Horror", "Thriller"])
- **scareLevel**: Rating from 1-5 (how scary the movie is)
- **triggerWarnings**: Array of content warnings
- **guest**: Description of guest commentary

### Optional Fields

- **spotifyEmbed**: HTML embed code for Spotify player (leave empty for unpublished episodes)

## Genre Options

Common genres to use:
- "Psychological"
- "Supernatural" 
- "Classic"
- "Body Horror"
- "Sci-Fi"
- "Slasher"
- "Gothic"
- "Thriller"

## Scare Level Guide

- **1**: Mild/Atmospheric
- **2**: Some scary moments
- **3**: Moderately scary
- **4**: Very scary
- **5**: Extremely scary/disturbing

## Common Trigger Warnings

- "Violence"
- "Gore" 
- "Body Horror"
- "Murder"
- "Psychological Distress"
- "Sexual Content"
- "Religious Content"
- "Possession"
- "Disturbing Imagery"
- "Paranoia"
- "Stalking"

## File Naming Convention

Use the format: `{movie-slug}.md`

Examples:
- `psycho.md`
- `the-thing.md` 
- `hellraiser.md`

## Converting Back to JSON

The system automatically reads all markdown files and converts them to the JSON format your components expect. No manual conversion needed!

## Scripts

### Convert Existing JSON to Markdown
```bash
node scripts/convertJsonToMarkdown.js
```

This script reads your existing `episodeData.js` file and creates markdown files for all episodes.

## Tips

1. **Use consistent formatting** - Follow the template structure
2. **Validate your YAML** - Make sure the frontmatter is properly formatted
3. **Check your arrays** - Genres and trigger warnings should be in array format: `["Item1", "Item2"]`
4. **Use descriptive summaries** - Write engaging movie summaries that avoid major spoilers
5. **Keep slugs simple** - Use lowercase letters, numbers, and hyphens only

## Troubleshooting

### Common Issues

1. **YAML parsing errors**: Check that your frontmatter is properly formatted
2. **Missing fields**: Ensure all required fields are filled in
3. **Array format**: Make sure arrays use proper JSON syntax: `["item1", "item2"]`
4. **Date format**: Use YYYY-MM-DD format for publishDate

### Getting Help

If you encounter issues:
1. Check the template file for proper formatting
2. Validate your YAML frontmatter
3. Ensure all required fields are present
4. Check the console for error messages when the site builds
