const fs = require('fs');
const path = require('path');

// Read and parse the episodeData.js file manually since it uses ES6 modules
function loadEpisodesData() {
  const filePath = path.join(__dirname, '../src/utils/episodeData.js');
  const fileContent = fs.readFileSync(filePath, 'utf8');
  
  // Extract the episodesData array using regex
  const match = fileContent.match(/export const episodesData = (\[[\s\S]*?\]);/);
  if (!match) {
    throw new Error('Could not find episodesData in the file');
  }
  
  // Use eval to parse the array (safe in this context since we control the source)
  const episodesData = eval(match[1]);
  return episodesData;
}

const episodesData = loadEpisodesData();

// Function to convert episode data to markdown format
function convertEpisodeToMarkdown(episode) {
  // Create frontmatter
  const frontmatter = `---
# Episode Information
title: "${episode.title}"
slug: "${episode.slug}"
isPublished: ${episode.isPublished}
publishDate: "${episode.publishDate}"
publishDateFormatted: "${episode.publishDateFormatted}"
duration: "${episode.duration}"

# Movie Information
movieTitle: "${episode.title}"
movieYear: "${episode.movieYear}"
director: "${episode.director}"
image: "${episode.image}"
genres: ${JSON.stringify(episode.genres)}
scareLevel: ${episode.scareLevel}
triggerWarnings: ${JSON.stringify(episode.triggerWarnings)}

# Podcast Content
guest: "${episode.guest.replace(/"/g, '\\"')}"
spotifyEmbed: '${episode.spotifyEmbed || ''}'
---`;

  // Create content section
  const content = `
# Movie Summary

${episode.summary}

## Additional Notes

This episode features insights about ${episode.title} (${episode.movieYear}) directed by ${episode.director}. 

### Episode Details
- **Scare Level**: ${episode.scareLevel}/5
- **Genres**: ${episode.genres.join(', ')}
- **Duration**: ${episode.duration}
${episode.triggerWarnings.length > 0 ? `- **Content Warnings**: ${episode.triggerWarnings.join(', ')}` : ''}

### Guest Commentary
${episode.guest}
`;

  return frontmatter + content;
}

// Function to create filename from episode data
function createFilename(episode) {
  const slug = episode.slug || episode.title.toLowerCase().replace(/[^a-z0-9]/g, '-').replace(/-+/g, '-');
  return `${slug}.md`;
}

// Main conversion function
function convertAllEpisodes() {
  console.log('Starting conversion of episodes to markdown...');
  
  // Ensure directories exist
  const publishedDir = path.join(__dirname, '../episodes-markdown/published');
  const upcomingDir = path.join(__dirname, '../episodes-markdown/upcoming');
  
  if (!fs.existsSync(publishedDir)) {
    fs.mkdirSync(publishedDir, { recursive: true });
  }
  if (!fs.existsSync(upcomingDir)) {
    fs.mkdirSync(upcomingDir, { recursive: true });
  }

  let publishedCount = 0;
  let upcomingCount = 0;

  episodesData.forEach((episode, index) => {
    try {
      const markdown = convertEpisodeToMarkdown(episode);
      const filename = createFilename(episode);
      
      // Determine which directory to use
      const targetDir = episode.isPublished ? publishedDir : upcomingDir;
      const filePath = path.join(targetDir, filename);
      
      // Write the markdown file
      fs.writeFileSync(filePath, markdown, 'utf8');
      
      if (episode.isPublished) {
        publishedCount++;
        console.log(`✓ Created published episode: ${filename}`);
      } else {
        upcomingCount++;
        console.log(`✓ Created upcoming episode: ${filename}`);
      }
    } catch (error) {
      console.error(`✗ Error converting episode ${episode.title}:`, error.message);
    }
  });

  console.log('\n=== Conversion Complete ===');
  console.log(`Published episodes: ${publishedCount}`);
  console.log(`Upcoming episodes: ${upcomingCount}`);
  console.log(`Total episodes converted: ${publishedCount + upcomingCount}`);
  console.log('\nMarkdown files have been created in:');
  console.log('- episodes-markdown/published/');
  console.log('- episodes-markdown/upcoming/');
}

// Run the conversion if this script is executed directly
if (require.main === module) {
  convertAllEpisodes();
}

module.exports = {
  convertEpisodeToMarkdown,
  convertAllEpisodes,
  createFilename
};
