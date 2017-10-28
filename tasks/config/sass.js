module.exports = function(grunt) {
  grunt.config.set('sass', {
    // Compile `hydexo.scss` file into `hydexo.css`
    dev: {
      options: {
        sourceMap: false
      },
      files: {
        'source/assets/css/hydexo.css': 'source/_css/hydexo.scss'
      }
    }
  });

  grunt.loadNpmTasks('grunt-sass');
};
