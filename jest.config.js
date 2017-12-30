module.exports = {
  setupFiles: ['./test/setup.js'],
  moduleNameMapper: {
    // Mock markdown file imports (otherwise resolved with Webpack's raw-loader)
    '.*\\.md': '<rootDir>/test/fixtures/markdown.js',
  },
  verbose: true,
};
