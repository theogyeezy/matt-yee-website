import React from 'react';
import { Helmet } from 'react-helmet';

const SEO = ({ 
  title = "Matt Yee - AI/ML Director, Entrepreneur, Inventor", 
  description = "Matt Yee: Engineer, Entrepreneur, Inventor, and Philanthropist. Director of AI/ML pushing the limits of applied research in agentic AI from Austin, Texas.",
  keywords = "Matt Yee, AI ML director, artificial intelligence, machine learning, startup entrepreneur, inventor, Austin Texas, think tank, agentic AI, innovation leadership",
  url = "https://themattyee.com",
  image = "https://themattyee.com/og-image.jpg",
  type = "website",
  author = "Matt Yee"
}) => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Matt Yee",
    "jobTitle": "Director of AI/ML", 
    "description": "Engineer, Entrepreneur, Inventor, and Philanthropist. Director of AI/ML pushing the limits of applied research in agentic AI.",
    "url": url,
    "sameAs": [
      url,
      "https://linkedin.com/in/mattyee", // Add your actual LinkedIn
      "https://twitter.com/mattyee" // Add your actual Twitter
    ],
    "knowsAbout": [
      "Artificial Intelligence",
      "Machine Learning", 
      "Startup Strategy",
      "Innovation Leadership",
      "Think Tank Operations",
      "Agentic AI",
      "Technology Innovation",
      "Executive Advisory",
      "Engineering Leadership"
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