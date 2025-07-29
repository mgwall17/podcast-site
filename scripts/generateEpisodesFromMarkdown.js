#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { loadEpisodesFromMarkdown } = require('../src/utils/episodeMarkdownProcessor');

// Configuration
const EPISODES_DATA_FILE = path.join(__dirname, '..', 'src', 'utils', 'episodeData.js');

// Function to read existing episode data
function readExistingEpisodeData() {
  try {
    const episodeDataContent = fs.readFileSync(EPISODES_DATA_FILE, 'utf8');
    // Extract the episodesData array from the file
    const match = episodeDataContent.match(/export const episodesData = (\[[\s\S]*?\]);/);
    if (match) {
      // Use eval to parse the array (not ideal but works for this use case)
      return eval(match[1]);
    }
    return [];
  } catch (error) {
    console.log('No existing episode data found, starting fresh');
    return [];
  }
}

// Function to update episode data file
function updateEpisodeDataFile(episodes) {
  const episodeDataTemplate = `export const episodesData = ${JSON.stringify(episodes, null, 2)};

export const getEpisodeStructuredData = (episode) => {
  return {
    "@context": "https://schema.org",
    "@type": "PodcastEpisode",
    "name": episode.title,
    "description": episode.summary,
    "url": \`https://horrorglassPodcast.com/episodes/\${episode.slug}\`,
    "image": \`https://horrorglassPodcast.com\${episode.image}\`,
    "datePublished": episode.publishDate,
    "duration": episode.duration,
    "partOfSeries": {
      "@type": "PodcastSeries",
      "name": "Horror Glass Podcast",
      "url": "https://horrorglassPodcast.com"
    },
    "author": {
      "@type": "Person",
      "name": "Jose Zaragoza"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Horror Glass Podcast"
    },
    "genre": episode.genres,
    "keywords": episode.genres.join(", ") + ", horror podcast, " + episode.director
  };
};

export const sortEpisodes = (episodes, sortBy = 'date', order = 'desc') => {
  return [...episodes].sort((a, b) => {
    let comparison = 0;
    
    switch (sortBy) {
      case 'date':
        comparison = new Date(a.publishDate) - new Date(b.publishDate);
        break;
      case 'title':
        comparison = a.title.localeCompare(b.title);
        break;
      case 'scare':
        comparison = a.scareLevel - b.scareLevel;
        break;
      default:
        comparison = new Date(a.publishDate) - new Date(b.publishDate);
    }
    
    return order === 'desc' ? -comparison : comparison;
  });
};

export const filterEpisodes = (episodes, filters) => {
  return episodes.filter(episode => {
    if (filters.status && filters.status !== 'all') {
      if (filters.status === 'published' && !episode.isPublished) return false;
      if (filters.status === 'upcoming' && episode.isPublished) return false;
    }
    
    if (filters.genre && filters.genre !== 'all') {
      if (!episode.genres.some(genre => genre.toLowerCase().includes(filters.genre.toLowerCase()))) {
        return false;
      }
    }
    
    if (filters.search) {
      const searchTerm = filters.search.toLowerCase();
      return (
        episode.title.toLowerCase().includes(searchTerm) ||
        episode.summary.toLowerCase().includes(searchTerm) ||
        episode.guest.toLowerCase().includes(searchTerm) ||
        episode.director.toLowerCase().includes(searchTerm) ||
        episode.genres.some(genre => genre.toLowerCase().includes(searchTerm))
      );
    }
    
    return true;
  });
};

export const getAllGenres = (episodes) => {
  const allGenres = episodes.flatMap(episode => episode.genres);
  return [...new Set(allGenres)].sort();
};

export const getPublishedEpisodes = (episodes) => {
  return episodes.filter(episode => episode.isPublished);
};

export const getUpcomingEpisodes = (episodes) => {
  return episodes.filter(episode => !episode.isPublished);
};`;

  fs.writeFileSync(EPISODES_DATA_FILE, episodeDataTemplate);
}

// Main function to process markdown files
function processEpisodeMarkdownFiles() {
  console.log('🚀 Starting episode generation from markdown files...');
  
  // Read existing episode data
  const existingEpisodes = readExistingEpisodeData();
  console.log(`📚 Found ${existingEpisodes.length} existing episodes`);
  
  // Load episodes from markdown files
  const markdownEpisodes = loadEpisodesFromMarkdown();
  console.log(`📝 Found ${markdownEpisodes.length} episodes in markdown files`);
  
  // Get current slugs from markdown files
  const currentSlugs = markdownEpisodes.map(episode => episode.slug);
  
  // Find episodes that were deleted (exist in data but not in markdown)
  const deletedEpisodes = existingEpisodes.filter(episode => !currentSlugs.includes(episode.slug));
  
  if (deletedEpisodes.length > 0) {
    console.log(`\n🗑️  Found ${deletedEpisodes.length} deleted episodes:`);
    deletedEpisodes.forEach(episode => console.log(`   - ${episode.title} (${episode.slug})`));
  }
  
  // Reassign IDs to maintain consistency
  const finalEpisodes = markdownEpisodes.map((episode, index) => ({
    ...episode,
    id: index + 1
  }));
  
  // Update episode data file
  if (finalEpisodes.length > 0 || deletedEpisodes.length > 0) {
    updateEpisodeDataFile(finalEpisodes);
    console.log(`\n✅ Updated episode data with ${finalEpisodes.length} episodes`);
    console.log(`📊 Published episodes: ${finalEpisodes.filter(e => e.isPublished).length}`);
    console.log(`📊 Upcoming episodes: ${finalEpisodes.filter(e => !e.isPublished).length}`);
    
    if (deletedEpisodes.length > 0) {
      console.log(`🗑️  Removed ${deletedEpisodes.length} deleted episodes from data`);
    }
  } else {
    console.log('\n📝 No episodes to process');
  }
  
  console.log('\n🎉 Episode generation complete!');
}

// Run the script
if (require.main === module) {
  processEpisodeMarkdownFiles();
}

module.exports = { processEpisodeMarkdownFiles };
