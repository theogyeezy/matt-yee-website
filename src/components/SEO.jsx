import React from 'react';
import { Helmet } from 'react-helmet';

const SEO = ({ 
  title = "Matt Yee - Engineer, Entrepreneur, Baseball Player, AI/ML Director", 
  description = "Matt Yee: Director of AI/ML Innovation Solutions, former New York Mets bullpen catcher, professional baseball player with Cosmic Baseball Organization, startup entrepreneur from Austin, Texas.",
  keywords = "Matt Yee, AI ML director, artificial intelligence consultant, New York Mets, bullpen catcher, Cosmic Baseball Organization, startup entrepreneur, Austin Texas, innovation solutions, professional baseball player",
  url = "https://themattyee.com",
  image = "https://themattyee.com/og-image.jpg",
  type = "website",
  author = "Matt Yee"
}) => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Matt Yee",
    "jobTitle": "Director of AI/ML - Innovation Solutions", 
    "description": "AI/ML Director, former professional baseball player (New York Mets bullpen catcher, Cosmic Baseball Organization), startup entrepreneur",
    "url": url,
    "sameAs": [
      url,
      "https://linkedin.com/in/mattyee", // Add your actual LinkedIn
      "https://twitter.com/mattyee" // Add your actual Twitter
    ],
    "alumniOf": [
      {
        "@type": "Organization",
        "name": "New York Mets",
        "description": "Major League Baseball Organization - Bullpen Catcher"
      },
      {
        "@type": "Organization", 
        "name": "Cosmic Baseball Organization",
        "description": "Professional Independent Baseball League - Inaugural Tour Participant"
      }
    ],
    "knowsAbout": [
      "Artificial Intelligence",
      "Machine Learning", 
      "Startup Strategy",
      "Innovation Leadership",
      "Professional Baseball",
      "Think Tank Operations"
    ],
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Austin",
      "addressRegion": "Texas",
      "addressCountry": "US"
    }
  };

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="Matt Yee" />
      
      {/* Twitter Cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      
      {/* Additional SEO */}
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow" />
      <link rel="canonical" href={url} />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(schemaData)}
      </script>
    </Helmet>
  );
};

export default SEO;