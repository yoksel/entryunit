'use strict';

module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        clean: {
            tests: ['tmp']
        },

        prototyper: {
            default_options: {
                options: {},
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
              css: {
                files: '**/*.scss',
                tasks: ['sass'],
                options: {
                  livereload: 1337,//true,
                },
              },
            }

    });

    // Actually load this plugin's task(s).
    // grunt.loadTasks('tasks');
    grunt.loadNpmTasks('grunt-prototyper');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['prototyper']); //,'watch'

};