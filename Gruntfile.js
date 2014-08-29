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
                files: ['components/**/*.html'],
                tasks: ['prototyper'],
                options: {
                  livereload: 1337,//true,
                },
              },
              css: {
                files: ['**/*.scss'],
                tasks: ['sass'],
                options: {
                  livereload: 1337,//true,
                },
              },
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
          }

    });

    grunt.registerTask('default', [
        'connect:server:open',
        'watch'
    ]);

};