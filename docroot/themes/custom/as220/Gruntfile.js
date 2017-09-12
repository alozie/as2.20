module.exports = function (grunt) {
  "use strict";
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        sass: {
            prod: {
                options: {
                    outputStyle: 'compressed'
                },
                files: {
                    'css/as220.css': 'sass/as220.scss',
                }
            }
        }
    });

    // Load tasks...
    grunt.loadNpmTasks('grunt-sass');

    // Default task.
    grunt.registerTask('default', ['sass:prod']);
};
