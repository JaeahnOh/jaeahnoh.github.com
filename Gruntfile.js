'use strict';
module.exports = function(grunt) {

  grunt.initConfig({
    jshint: {
      options: {
        jshintrc: '.jshintrc'
      },
      all: [
        'jaeahnoh.github.io/Gruntfile.js',
        'jaeahnoh.github.io/assets/js/*.js',
        'jaeahnoh.github.io/assets/js/plugins/*.js',
        '!jaeahnoh.github.io/assets/js/scripts.min.js'
      ]
    },
    uglify: {
      dist: {
        files: {
          'jaeahnoh.github.io/assets/js/scripts.min.js': [
            'jaeahnoh.github.io/assets/js/plugins/*.js',
            'jaeahnoh.github.io/assets/js/_*.js'
          ]
        }
      }
    },
    imagemin: {
      dist: {
        options: {
          optimizationLevel: 7,
          progressive: true
        },
        files: [{
          expand: true,
          cwd: 'jaeahnoh.github.io/images/',
          src: '{,*/}*.{png,jpg,jpeg}',
          dest: 'jaeahnoh.github.io/images/'
        }]
      }
    },
    svgmin: {
      dist: {
        files: [{
          expand: true,
          cwd: 'jaeahnoh.github.io/images/',
          src: '{,*/}*.svg',
          dest: 'jaeahnoh.github.io/images/'
        }]
      }
    },
    watch: {
      js: {
        files: [
          '<%= jshint.all %>'
        ],
        tasks: ['uglify']
      }
    },
    clean: {
      dist: [
        'jaeahnoh.github.io/assets/js/scripts.min.js'
      ]
    }
  });

  // Load tasks
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-svgmin');

  // Register tasks
  grunt.registerTask('default', [
    'clean',
    'uglify',
    'imagemin',
    'svgmin'
  ]);
  grunt.registerTask('dev', [
    'watch'
  ]);

};
