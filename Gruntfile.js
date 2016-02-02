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
          'js/libs/jquery.mousewheel-3.0.6.min.js',
          'js/libs/jquery.backgroundpos.min.js',
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

    concat_css: {
      all: {
        src: [
          "css/bootstrap.min.css",
          "css/font-awesome.min.css",
          "css/jquery.mCustomScrollbar.min.css",
          "css/general.css",
          "css/template/*.css"
        ],
        dest: "css/global.css"
      },
    },

    cssmin: {
      options: {
        shorthandCompacting: false,
        roundingPrecision: -1
      },
      target: {
        files: {
          'css/global.min.css': ['css/global.css']
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
        files: [
          'css/template/*.css',
          'css/general.css'
        ],
        tasks: ['concat_css', 'cssmin'],
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
  grunt.loadNpmTasks('grunt-concat-css');
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  // 4. Where we tell Grunt what to do when we type "grunt" into the terminal.
  // grunt.registerTask('default', ['concat', 'uglify', 'imagemin', 'sass', 'watch']);
  grunt.registerTask('default', ['imagemin', 'concat', 'uglify', 'concat_css', 'cssmin', 'watch']);

};
