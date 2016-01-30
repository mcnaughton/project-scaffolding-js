module.exports = function (config) {
    config.set({
        basePath: '',
        frameworks: ['jasmine', 'requirejs'],
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: true,
        browsers: ['PhantomJS'],
        singleRun: false,
        files: [
            { pattern: 'test-main.js', included: true },
            { pattern: 'src/*.js', included: false },
            { pattern: 'src/**/*.js', included: false },
            { pattern: 'spec/*.js', included: false },
            { pattern: 'spec/**/*.js', included: false }
        ],
        exclude: ['test-main'],
        plugins: [
            'karma-coverage', 'karma-jasmine', 'karma-requirejs', 'karma-phantomjs-launcher', 'karma-coveralls'
        ],
        reporters: ['progress', 'coverage', 'coveralls'],
        preprocessors: {
          'src/**': ['coverage']
        },
        coverageReporter: {
            type: 'lcov',
            dir: 'coverage/'
        }
    });
};
