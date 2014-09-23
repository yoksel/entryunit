'use strict';

module.exports = function(grunt) {

    require('load-grunt-tasks')(grunt);

    // Project configuration.
    grunt.initConfig({
        clean: {
            tests: ['tmp']
        },

        prototyper: {
            default_options: {
                options: {
                    openResult: false
                },
                cwd: "",
                componentsFolder: "components/",
                templatesFolder: "templates/",
                includesFolder: "includes/",
                config: "config.json"
            }
        },

        sass: {
            dist: {
                options: {
                    // sourcemap: 'none',
                    style: 'expanded'
                },
                files: {
                    'assets/css/styles.css': '_src/css/styles.scss'
                }
            }
        },

        watch: {
            html: {
                files: ['components/**/*',
                    'includes/**/*',
                    'config.json'
                ],
                tasks: ['prototyper'],
                options: {
                    livereload: 1337, //true,
                },
            },
            css: {
                files: ['**/*.scss'],
                tasks: ['sass'],
                options: {
                    livereload: 1337, //true,
                },
            },
        },

        uncss: {
          dist: {
            files: {
              'dist/css/tidy.css': ['index.html']
            }
          }
        },

        connect: {
            server: {
                options: {
                    // base: './',
                    port: 9002,
                    open: {
                        target: 'http://localhost:9002'
                    }
                }
            }
        },

        copy: {
          main: {
            files: [
              // includes files within path
              // {expand: true, src: ['path/*'], dest: 'dest/', filter: 'isFile'},

              // includes files within path and its sub-directories
              {expand: true,
                src: ['index.html', 'assets/**'],
                dest: 'build/'},

              // makes all src relative to cwd
              // {expand: true, cwd: 'path/', src: ['**'], dest: 'dest/'},

              // flattens results to a single level
              // {expand: true, flatten: true, src: ['path/**'], dest: 'dest/', filter: 'isFile'}
            ]
          }
        }

    });

    grunt.registerTask('default', [
        'connect:server:open',
        'watch'
    ]);

    grunt.registerTask('build', [
        'copy'
    ]);

};