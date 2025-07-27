#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const readline = require('readline');

// Create readline interface for user input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Function to prompt user for input
function askQuestion(question) {
  return new Promise((resolve) => {
    rl.question(question, (answer) => {
      resolve(answer.trim());
    });
  });
}

// Function to create slug from title
function createSlug(title) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();
}

// Function to format date
function formatDate(dateString) {
  const date = new Date(dateString);
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return date.toLocaleDateString('en-US', options);
}

// Function to validate array input
function parseArrayInput(input) {
  if (!input.trim()) return [];
  return input.split(',').map(item => item.trim()).filter(item => item.length > 0);
}

// Main function to create new episode
async function createNewEpisode() {
  console.log('🎬 Horror Glass Podcast - New Episode Creator\n');
  console.log('This will help you create a new episode markdown file.\n');

  try {
    // Collect episode information
    const movieTitle = await askQuestion('Movie Title: ');
    const movieYear = await askQuestion('Movie Year: ');
    const director = await askQuestion('Director: ');
    
    // Generate slug
    const defaultSlug = createSlug(movieTitle);
    const slug = await askQuestion(`Slug (default: ${defaultSlug}): `) || defaultSlug;
    
    const publishDate = await askQuestion('Publish Date (YYYY-MM-DD): ');
    const publishDateFormatted = formatDate(publishDate);
    const duration = await askQuestion('Episode Duration (e.g., "45 minutes"): ');
    
    // Movie poster
    const defaultImage = `/${slug}.jpg`;
    const image = await askQuestion(`Image path (default: ${defaultImage}): `) || defaultImage;
    
    // Genres
    console.log('\nGenres (comma-separated):');
    console.log('Common options: Psychological, Supernatural, Classic, Body Horror, Sci-Fi, Slasher, Gothic, Thriller');
    const genresInput = await askQuestion('Genres: ');
    const genres = parseArrayInput(genresInput);
    
    // Scare level
    console.log('\nScare Level (1-5):');
    console.log('1: Mild/Atmospheric, 2: Some scary moments, 3: Moderately scary, 4: Very scary, 5: Extremely scary');
    const scareLevel = await askQuestion('Scare Level: ');
    
    // Trigger warnings
    console.log('\nTrigger Warnings (comma-separated):');
    console.log('Common options: Violence, Gore, Body Horror, Murder, Psychological Distress, Sexual Content, Religious Content, Possession, Disturbing Imagery, Paranoia, Stalking');
    const warningsInput = await askQuestion('Trigger Warnings: ');
    const triggerWarnings = parseArrayInput(warningsInput);
    
    // Guest commentary
    const guest = await askQuestion('Guest Commentary: ');
    
    // Movie summary
    console.log('\nMovie Summary (press Enter twice when done):');
    let summary = '';
    let line;
    while ((line = await askQuestion('')) !== '') {
      summary += line + '\n';
    }
    summary = summary.trim();
    
    // Additional notes (optional)
    console.log('\nAdditional Notes (optional, press Enter twice when done):');
    let additionalNotes = '';
    while ((line = await askQuestion('')) !== '') {
      additionalNotes += line + '\n';
    }
    additionalNotes = additionalNotes.trim();
    
    // Create markdown content
    const frontmatter = `---
# Episode Information
title: "${movieTitle}"
slug: "${slug}"
isPublished: false
publishDate: "${publishDate}"
publishDateFormatted: "${publishDateFormatted}"
duration: "${duration}"

# Movie Information
movieTitle: "${movieTitle}"
movieYear: "${movieYear}"
director: "${director}"
image: "${image}"
genres: ${JSON.stringify(genres)}
scareLevel: ${scareLevel}
triggerWarnings: ${JSON.stringify(triggerWarnings)}

# Podcast Content
guest: "${guest.replace(/"/g, '\\"')}"
spotifyEmbed: ""
---`;

    const content = `
# Movie Summary

${summary}

${additionalNotes ? `## Additional Notes\n\n${additionalNotes}` : '## Additional Notes\n\nAdd any additional notes, trivia, or discussion points here...'}
`;

    const markdownContent = frontmatter + content;
    
    // Create filename
    const filename = `${slug}.md`;
    const filePath = path.join(__dirname, '../episodes-markdown/upcoming', filename);
    
    // Write file
    fs.writeFileSync(filePath, markdownContent, 'utf8');
    
    console.log(`\n✅ Episode created successfully!`);
    console.log(`📁 File: episodes-markdown/upcoming/${filename}`);
    console.log(`\nNext steps:`);
    console.log(`1. Add the movie poster image to public/${path.basename(image)}`);
    console.log(`2. Review and edit the markdown file if needed`);
    console.log(`3. When ready to publish, move the file to episodes-markdown/published/ and set isPublished: true`);
    console.log(`4. Add the Spotify embed code when the episode is published`);
    
  } catch (error) {
    console.error('Error creating episode:', error.message);
  } finally {
    rl.close();
  }
}

// Run the script
if (require.main === module) {
  createNewEpisode();
}

module.exports = { createNewEpisode };
