module.exports = {
  setupFiles: ['./test/setup.js'],
  moduleNameMapper: {
    // Mock markdown file imports (otherwise resolved with Webpack's raw-loader)
    '.*\\.md': '<rootDir>/test/fixtures/markdown.js',
    // Mock source file imports
    '!raw-loader!.*': '<rootDir>/test/fixtures/source.js',
  },
  verbose: true,
};
