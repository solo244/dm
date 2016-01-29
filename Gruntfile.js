module.exports = function(grunt) {

  // 1. All configuration goes here
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    concat: {
      dist: {
        src: [
          'js/libs/jquery-2.1.4.min.js',
          'js/libs/jquery-ui-1.10.4.min.js',
          'js/libs/bootstrap.min.js',
          'js/libs/jquery.mCustomScrollbar.concat.min.js',
          'js/template/*.js'
        ],
        dest: 'js/build/production.js',
      }
    },

    uglify: {
      build: {
        src: 'js/build/production.js',
        dest: 'js/build/production.min.js'
      }
    },

    imagemin: {
      dynamic: {
        files: [{
            expand: true,
            cwd: 'images/source',
            src: ['**/*.{png,jpg,gif}'],
            dest: 'images/'
        }]
      }
    },

    sass: {
      dist: {
        options: {
            style: 'compressed'
        },
        files: {
            'css/global.css': 'css/style.css'
        }
      }
    },

    watch: {
      scripts: {
        files: ['js/template/*.js'],
        tasks: ['concat', 'uglify'],
        options: {
            spawn: false,
        },
      },
      css: {
        files: ['css/*.css'],
        tasks: ['sass'],
        options: {
            spawn: false,
        }
      }
    }
  });

  // 3. Where we tell Grunt we plan to use this plug-in.
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');

  // 4. Where we tell Grunt what to do when we type "grunt" into the terminal.
  // grunt.registerTask('default', ['concat', 'uglify', 'imagemin', 'sass', 'watch']);
  grunt.registerTask('default', ['concat', 'uglify', 'sass', 'watch']);

};