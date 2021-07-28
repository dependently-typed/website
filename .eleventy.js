const pluginRss = require("@11ty/eleventy-plugin-rss");
const { DateTime } = require("luxon");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/styles");
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy("dist");

  eleventyConfig.addPlugin(pluginRss);

  eleventyConfig.addCollection("posts", function (collectionApi) {
    return collectionApi
      .getFilteredByGlob("src/blog/**/*.md")
      .filter(function (item) {
        // This is done to filter out the home page (src/blog/index.md) from
        // the collection
        return "title" in item.data;
      })
      .filter(function (item) {
        return !item.data.draft;
      });
  });

  eleventyConfig.addCollection("tagsList", function (collectionApi) {
    const tagSet = new Set();
    collectionApi
      .getAll()
      .map(function (item) {
        return item.data.tags || [];
      })
      .flat()
      .forEach(function (tag) {
        tagSet.add(tag);
      });
    return [...tagSet];
  });

  eleventyConfig.addFilter("toLocaleString", function (value) {
    return DateTime.fromJSDate(value, { zone: "UTC" }).toLocaleString();
  });

  return {
    dir: {
      input: "src",
      includes: "_includes",
    },
  };
};
