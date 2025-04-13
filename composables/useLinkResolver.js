export function useLinkResolver() {
  const linkResolver = (doc) => {
    if (!doc || !doc.type) return "/";

    switch (doc.type) {
      case "page_news":
        return "/news";
      case "article_news":
        return doc.uid ? `/news/${doc.uid}` : "/news";
      case "page_default":
        return doc.uid ? `/${doc.uid}` : "/";
      default:
        return "/";
    }
  };

  return { linkResolver };
}
