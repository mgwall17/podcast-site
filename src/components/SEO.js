import Head from 'next/head';

const SEO = ({
  title = "Horror Glass Podcast",
  description = "Horror Glass Podcast is all about unmasking the fears that resonate on a personal level. Join Jose Zaragoza as he explores the psychological impact of horror films with diverse guests.",
  url = "https://horrorglassPodcast.com",
  image = "/HPG_Logo_Purple.png",
  type = "website",
  publishedTime,
  modifiedTime,
  author = "Jose Zaragoza",
  keywords = "horror podcast, horror movies, film analysis, psychological horror, horror reviews",
  structuredData,
  canonical
}) => {
  const fullTitle = title === "Horror Glass Podcast" ? title : `${title} | Horror Glass Podcast`;
  const fullUrl = canonical || url;
  const fullImage = image.startsWith('http') ? image : `${url}${image}`;

  const defaultStructuredData = {
    "@context": "https://schema.org",
    "@type": "PodcastSeries",
    "name": "Horror Glass Podcast",
    "description": description,
    "url": url,
    "image": fullImage,
    "author": {
      "@type": "Person",
      "name": "Jose Zaragoza"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Horror Glass Podcast",
      "logo": {
        "@type": "ImageObject",
        "url": fullImage
      }
    },
    "genre": ["Horror", "Film Analysis", "Entertainment"],
    "inLanguage": "en-US"
  };

  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={fullUrl} />

      {/* Open Graph Tags */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:image" content={fullImage} />
      <meta property="og:image:alt" content={title} />
      <meta property="og:site_name" content="Horror Glass Podcast" />
      <meta property="og:locale" content="en_US" />
      
      {publishedTime && <meta property="article:published_time" content={publishedTime} />}
      {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
      {author && <meta property="article:author" content={author} />}

      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImage} />
      <meta name="twitter:image:alt" content={title} />

      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" href="/HPG_Logo_Purple.png" />

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData || defaultStructuredData)
        }}
      />
    </Head>
  );
};

export default SEO;
