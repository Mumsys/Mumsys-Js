/* eslint-env node */

var reportDir = "build/report";

module.exports = function( grunt ) {
	var livereloadPort = grunt.option( "livereload-port" ) || 35729;

	// Load grunt tasks from NPM packages
	require( "load-grunt-tasks" )( grunt );

	function preprocess( code ) {
		return code

		// Embed version
			.replace( /@VERSION/g, grunt.config( "pkg" ).version )

		// Embed date (yyyy-mm-ddThh:mmZ)
			.replace( /@DATE/g, ( new Date() ).toISOString().replace( /:\d+\.\d+Z$/, "Z" ) );
	}

	grunt.initConfig( {
		pkg: grunt.file.readJSON( "package.json" ),
		connect: {
			server: {
				options: {
					port: 8000,
					base: ".",
					livereload: livereloadPort
				}
			}
		},
		qunit: {
			options: {
				timeout: 30000,
				"--web-security": "no",
				inject: [
					require.resolve( "grunt-contrib-qunit/phantomjs/bridge" )
				],
				urls: [
					"http://localhost:8000/tests/run-tests-development.html"
				]
			},
            
			qunit: [
                'tests/run-tests-development.html', 
                'tests/run-tests-standalone-version.html', 
                'tests/run-tests-minified-version.html'
			]
		},
        
		livereload: {
			options: {
				port: livereloadPort
			}
        },
        
		makeReport: {
			src: reportDir + "/**/*.json",
			options: {
				type: [ "lcov" ],
				dir: reportDir,
				print: "detail"
			}
		}
	} );


	grunt.registerTask( "test", [ "connect", "qunit" ] );

	// Start the web server in a watch pre-task
	// https://github.com/gruntjs/grunt-contrib-watch/issues/50
	grunt.renameTask( "watch", "watch-repeatable" );

	grunt.registerTask( "default", [ "build", "test" ] );

};
//
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