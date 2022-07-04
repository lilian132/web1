const gulp = require('gulp')
const htmlmin = require('gulp-htmlmin')

gulp.task('min-html', (cb) => {
  gulp.src('src/*.html')
  .pipe(htmlmin({ 
    collapseWhitespace: true,
    removeComments: true,
    minifyJS: true,
    minifyCSS: true
   }))
  .pipe(gulp.dest('dist'))
  cb()
})