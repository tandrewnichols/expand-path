module.exports = {
  browser: {
    src: [
      'test/helpers/bind-polyfill.js',
      'node_modules/should/should.js',
      'dist/expand-path.js',
      'node_modules/mocha-given/browser/mocha-given.js',
      'test/helpers/setup.js',
      'test/*.coffee'
    ],
    options: {
      framework: 'mocha',
      parallel: 2,
      launch_in_ci: ['PhantomJS'],
      launch_in_dev: ['PhantomJS', 'Chrome', 'Firefox', 'Safari'],
      reporter: 'dot'
    }
  }
};
