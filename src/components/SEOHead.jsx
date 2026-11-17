import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function SEOHead({
  title,
  description,
  keywords = [],
  image = "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80",
  type = "article",
  structuredData = null,
}) {
  const location = useLocation();
  const canonicalUrl = `https://portfoliobyvishal.netlify.app${location.pathname}`;
  const fullTitle = title 
    ? `${title} | Vishal Singh` 
    : "Vishal Singh | Senior Full Stack Developer (MERN • Next.js • TypeScript)";

  useEffect(() => {
    // 1. Update Document Title
    document.title = fullTitle;

    // Helper to set or create meta tag
    const setMetaTag = (attribute, attrValue, content) => {
      let meta = document.querySelector(`meta[${attribute}="${attrValue}"]`);
      if (!meta) {
        meta = document.createElement("meta");
        meta.setAttribute(attribute, attrValue);
        document.head.appendChild(meta);
      }
      meta.setAttribute("content", content || "");
    };

    // Helper to set canonical tag
    const setCanonicalLink = (url) => {
      let link = document.querySelector('link[rel="canonical"]');
      if (!link) {
        link = document.createElement("link");
        link.setAttribute("rel", "canonical");
        document.head.appendChild(link);
      }
      link.setAttribute("href", url);
    };

    // 2. Standard Meta Tags
    setMetaTag("name", "description", description || "Vishal Singh - Senior Full Stack Developer & Founder Portfolio");
    if (keywords.length > 0) {
      setMetaTag("name", "keywords", keywords.join(", "));
    }
    setCanonicalLink(canonicalUrl);

    // 3. Open Graph Tags
    setMetaTag("property", "og:title", fullTitle);
    setMetaTag("property", "og:description", description || "5+ YOE Senior Full Stack Developer & Founder");
    setMetaTag("property", "og:url", canonicalUrl);
    setMetaTag("property", "og:type", type);
    setMetaTag("property", "og:image", image);

    // 4. Twitter Tags
    setMetaTag("name", "twitter:title", fullTitle);
    setMetaTag("name", "twitter:description", description || "5+ YOE Senior Full Stack Developer & Founder");
    setMetaTag("name", "twitter:image", image);

    // 5. Injected JSON-LD Structured Data
    const scriptId = "dynamic-route-schema";
    let scriptTag = document.getElementById(scriptId);
    if (!scriptTag) {
      scriptTag = document.createElement("script");
      scriptTag.id = scriptId;
      scriptTag.type = "application/ld+json";
      document.head.appendChild(scriptTag);
    }

    const defaultSchema = {
      "@context": "https://schema.org",
      "@type": "TechArticle",
      "headline": title || "Engineering Architecture",
      "description": description || "Technical blueprint and architecture case study by Vishal Singh",
      "author": {
        "@type": "Person",
        "name": "Vishal Singh",
        "url": "https://portfoliobyvishal.netlify.app/"
      },
      "publisher": {
        "@type": "Person",
        "name": "Vishal Singh"
      },
      "url": canonicalUrl
    };

    scriptTag.textContent = JSON.stringify(structuredData || defaultSchema);

    // Cleanup on unmount or route change
    return () => {
      // keep basic title or let next component take over
    };
  }, [fullTitle, description, canonicalUrl, keywords, image, type, structuredData]);

  return null;
}
