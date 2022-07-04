const gulp = require('gulp')
const htmlmin = require('gulp-htmlmin')

gulp.task('copy', () => { 
  return gulp.src('src/**/*') .pipe(gulp.dest('dist'))
});

gulp.task('min-html', () => {
  return gulp.src('src/**/*.html')
  .pipe(htmlmin({ 
    collapseWhitespace: true,
    removeComments: true,
    minifyJS: true,
    minifyCSS: true
   }))
  .pipe(gulp.dest('dist'))
})

gulp.task('default', gulp.series('copy', 'min-html'))
