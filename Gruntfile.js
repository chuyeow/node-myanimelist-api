module.exports = function(grunt) {

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-mocha-test');

  grunt.initConfig({

    mochaTest: {
      test: {
        options: {
          reporter: 'spec'
        },
        src: ['test/**/*.test.js']
      }
    },

    watch: {
      files: ['<%= mochaTest.test.src %>', '*.js', 'lib/**/*.js'],
      tasks: ['mochaTest']
    }

  });

  grunt.registerTask('test', ['mochaTest']);
  grunt.registerTask('default', ['test']);

};
