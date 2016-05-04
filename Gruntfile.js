module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jshint: {
      all: ['Gruntfile.js', 'src/js/*.js', 'src/views/js/*.js']
    },
    uglify: {
      build:
      {
        files:{
          'build/js/perfmatters.js': ['src/js/perfmatters.js'],
          'build/views/js/main.js': ['src/views/js/main.js']
        }
      }
    },
    cssmin: {
      target: {
        files: [{
          expand: true,
          cwd: 'src/css/',
          src: ['*.css'],
          dest: 'build/css/',
          //ext: '.min.css'
        },
        {
          expand: true,
          cwd: 'src/views/css/',
          src: ['*.css'],
          dest: 'build/views/css/',
          //ext: '.min.css'
        }]
      }
    },
    htmlmin: {                                     // Task
      dist: {                                      // Target
        options: {                                 // Target options
          removeComments: true,
          collapseWhitespace: true
        },
        files: {                                   // Dictionary of files
          'build/index.html': 'src/index.html',     // 'destination': 'source'
          'build/project-2048.html': 'src/project-2048.html',
          'build/project-mobile.html': 'src/project-mobile.html',
          'build/project-webperf.html': 'src/project-webperf.html',

          'build/views/pizza.html': 'src/views/pizza.html',

        }
      }
    }
  //   watch: {
  //     scripts: {
  //       files: ['**/*.js', ''],
  //       tasks: ['jshint'],
  //       options: {
  //         spawn: false,
  //       },
  //     },
  //   },
  });

  // Load the plugins
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  // grunt.loadNpmTasks('grunt-contrib-watch');
  // Default task(s).
  grunt.registerTask('default', ['jshint','uglify','cssmin']);

};
