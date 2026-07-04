export default function (eleventyConfig) {
  // Static passthroughs. Fonts are copied out of node_modules so the deployed
  // site never references the packages directly.
  eleventyConfig.addPassthroughCopy({ "assets/img": "assets/img" });
  eleventyConfig.addPassthroughCopy({ "assets/brand": "assets/brand" });
  eleventyConfig.addPassthroughCopy({ "src/js": "assets/js" });
  eleventyConfig.addPassthroughCopy({
    "node_modules/@fontsource-variable/fraunces/files/fraunces-latin-wght-normal.woff2":
      "assets/fonts/fraunces-latin-wght-normal.woff2",
    "node_modules/@fontsource-variable/inter/files/inter-latin-wght-normal.woff2":
      "assets/fonts/inter-latin-wght-normal.woff2",
  });

  eleventyConfig.addWatchTarget("src/_includes/css/");

  return {
    dir: {
      input: "src",
      includes: "_includes",
      output: "_site",
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    // pathPrefix comes from the CLI (--pathPrefix), set by the deploy workflow
    // from actions/configure-pages. Never hardcode it here.
  };
}
