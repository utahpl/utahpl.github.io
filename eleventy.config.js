const toml = require("toml");

module.exports = function (eleventyConfig) {
  eleventyConfig.addDataExtension("toml", contents => toml.parse(contents));
};
