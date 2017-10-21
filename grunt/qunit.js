// https://www.npmjs.org/package/grunt-contrib-qunit
module.exports = {
    all: {
        options: {
            urls: [
                'http://127.0.0.1:8080/tests/run-tests-development.html',
                'http://127.0.0.1:8080/tests/run-tests-standalone-version.html',
                'http://127.0.0.1:8080/tests/run-tests-minified-version.html'
            ],
            timeout: 10000,
            screenshot: false
        }
    }
};

