module.exports = config => {

  // remove the 'index.html' ending of a url like '/about/index.html'
  config.addFilter("shorten", function(path) {
    return path.replace(/\/index.html$/,'');
  });

  // plumbing and configuration

  // Set images to pass through to the dist folder
  config.addPassthroughCopy("./src/_includes/images/");

  // set fonts to pass through to the dist folder
  config.addPassthroughCopy("./src/_includes/fonts/");

  // main site strucure
  return {
    // read html, markdown files as nunjucks templates
    markdownTemplateEngine: 'njk',
    dataTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',

    dir: {
      input: 'src',
      output: 'dist'
    }
  };
};