var gulp = require('gulp');
var connect = require('gulp-connect');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var useref = require('gulp-useref');
var uglify = require('gulp-uglify');
var gulpIf = require('gulp-if');
var runSequence = require('run-sequence');


gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: 'development'
    },
  })
});

gulp.task('sass', function () {
  return gulp.src('development/styles/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('public/css'))
    .pipe(browserSync.reload({
      stream: true
    }))
});
 
gulp.task('watch', ['browserSync', 'sass'], function () {
  gulp.watch('development/styles/**/*.scss', ['sass']);
  gulp.watch('development/*.html', browserSync.reload); 
  gulp.watch('development/js/**/*.js', browserSync.reload); 
});

gulp.task('useref', function(){
  return gulp.src('development/*.html')
    .pipe(useref())
    .pipe(gulpIf('*.js', uglify()))
    .pipe(gulp.dest('public'))
});

gulp.task('fonts', function() {
  return gulp.src('development/fonts/**/*')
  .pipe(gulp.dest('public/fonts'))
});

gulp.task('build', function (callback) {
  runSequence('clean:public', 
    ['sass', 'useref', 'fonts'],
    callback
  )
});


gulp.task('default', function (callback) {
  runSequence(['sass','browserSync', 'watch'],
    callback
  )
});


