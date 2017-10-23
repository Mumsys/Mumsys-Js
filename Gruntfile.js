///*global module:false*/
//module.exports = function(grunt) {
//
//    // Project configuration.
//    grunt.initConfig({
//        qunit: {
//            'mumsys-js': [
//                'tests/run-tests-development.html', 
//                'tests/run-tests-standalone-version.html', 
//                'tests/run-tests-minified-version.html'
//            ]
//        },
//        jshint: {
//            'mumsys-js': ['src/**/*.js', 'Grunfile.js', 'tests/testfiles/**/*.js'],
//            options: {
//                jquery: true,
//                curly: true,
//                eqeqeq: true,
//                immed: true,
//                latedef: true,
//                newcap: true,
//                noarg: true,
//                sub: true,
//                undef: true,
//                unused: false,
//                onevar: true,
//                boss: true,
//                eqnull: true,
//                browser: true,
//                devel: true,
//                trailing: true,
//                white:  false,
//                maxcomplexity: 4,
//                globals: {
//                    Kort: false,
//                    Ext: true,
//                    L: true,
//                    UrlLib: true,
//                    urlLib: true,
//                    asyncTest: true,
//                    api_test: true,
//                    deepEqual: true,
//                    equal: true,
//                    expect: true,
//                    module: true,
//                    notDeepEqual: true,
//                    notEqual: true,
//                    notStrictEqual: true,
//                    ok: true,
//                    QUnit: true,
//                    raises: true,
//                    start: true,
//                    stop: true,
//                    strictEqual: true,
//                    test: true,
//                    testSkip: true
//                }
//            }
//        }
//    });
//
//    // Load plugins
//    grunt.loadNpmTasks('grunt-contrib-jshint');
//    grunt.loadNpmTasks('grunt-contrib-qunit');
//
//    // Default task.
//    // grunt.registerTask('default', 'jshint:mumsys-js');
//
//    // Linting task.
//    // grunt.registerTask('lint', 'jshint:mumsys-js');
//
//    // Travis CI task.
//    //grunt.registerTask('travis', 'jshint:mumsys-js qunit:mumsys-js');
//    grunt.registerTask('travis', 'qunit:mumsys-js');
//};