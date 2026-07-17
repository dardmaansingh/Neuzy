export default function prepareHomepageData(data = []) {
  return {
    heroArticle: data[0] || null,

    featuredArticle: data[1] || null,

    latestArticles: data.slice(2),

    sidebarArticles: data.slice(2, 6),
  };
}