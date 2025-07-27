const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

// Function to read all markdown files from a directory
function readMarkdownFiles(directory) {
  const files = [];
  
  if (!fs.existsSync(directory)) {
    return files;
  }
  
  const filenames = fs.readdirSync(directory);
  
  filenames.forEach(filename => {
    if (filename.endsWith('.md')) {
      const filePath = path.join(directory, filename);
      const fileContent = fs.readFileSync(filePath, 'utf8');
      const { data: frontmatter, content } = matter(fileContent);
      
      files.push({
        filename,
        frontmatter,
        content,
        filePath
      });
    }
  });
  
  return files;
}

// Function to convert markdown data back to episode format
function convertMarkdownToEpisode(markdownData, id) {
  const { frontmatter, content } = markdownData;
  
  // Extract summary from content (first section after "# Movie Summary")
  const summaryMatch = content.match(/# Movie Summary\s*\n\n(.*?)(?=\n## |$)/s);
  const summary = summaryMatch ? summaryMatch[1].trim() : frontmatter.summary || '';
  
  return {
    id: id,
    title: frontmatter.title,
    slug: frontmatter.slug,
    image: frontmatter.image,
    movieYear: frontmatter.movieYear,
    director: frontmatter.director,
    summary: summary,
    isPublished: frontmatter.isPublished,
    publishDate: frontmatter.publishDate,
    publishDateFormatted: frontmatter.publishDateFormatted,
    guest: frontmatter.guest,
    spotifyEmbed: frontmatter.spotifyEmbed || '',
    genres: frontmatter.genres || [],
    scareLevel: frontmatter.scareLevel,
    triggerWarnings: frontmatter.triggerWarnings || [],
    duration: frontmatter.duration
  };
}

// Function to load all episodes from markdown files
function loadEpisodesFromMarkdown() {
  const publishedDir = path.join(__dirname, '../../episodes-markdown/published');
  const upcomingDir = path.join(__dirname, '../../episodes-markdown/upcoming');
  
  const publishedFiles = readMarkdownFiles(publishedDir);
  const upcomingFiles = readMarkdownFiles(upcomingDir);
  
  const allFiles = [...publishedFiles, ...upcomingFiles];
  const episodes = [];
  
  allFiles.forEach((file, index) => {
    try {
      const episode = convertMarkdownToEpisode(file, index + 1);
      episodes.push(episode);
    } catch (error) {
      console.error(`Error processing ${file.filename}:`, error.message);
    }
  });
  
  // Sort episodes by publish date
  episodes.sort((a, b) => {
    return new Date(a.publishDate) - new Date(b.publishDate);
  });
  
  return episodes;
}

// Function to get episode structured data (same as original)
function getEpisodeStructuredData(episode) {
  return {
    "@context": "https://schema.org",
    "@type": "PodcastEpisode",
    "name": episode.title,
    "description": episode.summary,
    "url": `https://horrorglassPodcast.com/episodes/${episode.slug}`,
    "image": `https://horrorglassPodcast.com${episode.image}`,
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
}

// Function to sort episodes (same as original)
function sortEpisodes(episodes, sortBy = 'date', order = 'desc') {
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
}

// Function to filter episodes (same as original)
function filterEpisodes(episodes, filters) {
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
}

// Function to get all genres (same as original)
function getAllGenres(episodes) {
  const allGenres = episodes.flatMap(episode => episode.genres);
  return [...new Set(allGenres)].sort();
}

// Load episodes data from markdown files
const episodesData = loadEpisodesFromMarkdown();

module.exports = {
  episodesData,
  loadEpisodesFromMarkdown,
  getEpisodeStructuredData,
  sortEpisodes,
  filterEpisodes,
  getAllGenres,
  readMarkdownFiles,
  convertMarkdownToEpisode
};
