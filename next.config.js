// next.config.js

const withMarkdoc = require('@markdoc/next.js');

module.exports = withMarkdoc({
  mode: "static"
})({
  pageExtensions: ['js', 'md'],
  output: 'export',
  images: {
    unoptimized: true
  }
});
