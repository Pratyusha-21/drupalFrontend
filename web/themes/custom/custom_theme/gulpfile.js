let gulp = require('gulp'),
sass = require('gulp-dart-sass'),
cleanCSS = require('gulp-clean-css');

var paths = {
  styles: {
    src: './scss/**/*.scss',
    dest: './dist/css/'
  }
};

function styles() {
  return gulp.src(paths.styles.src)
    .on('error', console.error.bind(console))
    .pipe(sass())
    .pipe(cleanCSS())
    .pipe(gulp.dest(paths.styles.dest));
}

function watch() {
    gulp.watch(paths.styles.src, styles);
  }
  
  var build = gulp.series(gulp.parallel(styles));
  exports.styles = styles;
  exports.watch = watch;
  exports.build = build;
  
  /*
   * Define default task that can be called by just running `gulp` from cli
   */
  exports.default = build;