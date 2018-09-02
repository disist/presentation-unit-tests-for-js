process.env.CHROME_BIN = require('puppeteer').executablePath();

module.exports = function (config) {
    config.set({
        basePath: '',

        browsers: ['ChromeHeadless'],

        frameworks: ['jasmine'],

        files: [
            'example.js',
            'example.test.js'
        ],

        reporters: ['progress']
    });
}