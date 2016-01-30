module.exports = function (grunt) {

    grunt.initConfig({
        jshint: {
            files: ['Gruntfile.js', 'src/**/*.js', 'test/**/*.js'],
            options: {
                globals: {
                    requirejs: true
                }
            }
        },
        watch: {
            files: ['<%= jshint.files %>'],
            tasks: ['jshint']
        },
        karma: {
            unit: {
                configFile: 'karma.conf.js',
                singleRun: true
            }
        },
        requirejs: {
            compile: {
                options: {
                    mainConfigFile: 'main.js',
                    paths: {
                        'underscore': 'bower_components/underscore/underscore',
                        'q': 'bower_components/q/q',
                        es6: 'bower_components/requirejs-babel/es6',
                        babel: 'bower_components/requirejs-babel/babel-5.8.22.min'
                    },
                    optimize: 'none',
                    include: ['src/project'],
                    baseUrl: '.',
                    out: 'dist/project.js',
                    fileExclusionRegExp: /(idea|bower_components|node_modules|build|spec|docs)/,
                    done: function (done, output) {
                        grunt.log.subhead('project.js: built');
                        grunt.log.warn(output);
                        done();
                    }
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-requirejs');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-karma');

    grunt.registerTask('default', ['requirejs']);

};
