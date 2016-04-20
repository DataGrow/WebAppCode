var gulp = require('gulp');
var concat = require('gulp-concat');
var annotate = require('gulp-ng-annotate');
var plumber = require('gulp-plumber');
var uglify = require('gulp-uglify');
var watch = require('gulp-watch');
var sass = require('gulp-sass');
var path = require('path');

var paths = {
  jsSource: ['./development/**/*.js', '!/public/bundle.js'],
  sassSource: ['./development/styles/**/*.sass']
};

gulp.task('js', function() {
  return gulp.src(paths.jsSource)
  .pipe(plumber())
  .pipe(concat('bundle.js'))
  .pipe(annotate())
  .pipe(gulp.dest('./public'));
});

gulp.task('sass', function () {
  return gulp.src(paths.sassSource)
    .pipe(sass({
      paths: [ path.join(__dirname, 'styles') ]
    }))
    .pipe(concat('style.css'))
    .pipe(gulp.dest('./public/styles'));
});

gulp.task('watch', function() {
  gulp.watch(paths.jsSource, ['js']);
  gulp.watch(paths.sassSource, ['sass']);

});

gulp.task('default', ['watch', 'js', 'sass']);

// var gulp = require('gulp');
// var connect = require('gulp-connect');
// var sass = require('gulp-sass');
// var browserSync = require('browser-sync').create();
// var useref = require('gulp-useref');
// var uglify = require('gulp-uglify');
// var gulpIf = require('gulp-if');
// var runSequence = require('run-sequence');
// var cssnano = require('gulp-cssnano');
// var imagemin = require('gulp-imagemin');
// var cache = require('gulp-cache');
// var del = require('del');

// gulp.task('browserSync', function() {
//   browserSync.init({
//     server: {
//       baseDir: 'development'
//     },
//   })
// });

// gulp.task('sass', function () {
//   return gulp.src('development/styles/**/*.scss')
//     .pipe(sass())
//     .pipe(gulp.dest('public/css'))
//     .pipe(browserSync.reload({
//       stream: true
//     }))
// });
 
// gulp.task('watch', ['browserSync', 'sass'], function () {
//   gulp.watch('development/styles/**/*.scss', ['sass']);
//   gulp.watch('development/*.html', browserSync.reload); 
//   gulp.watch('development/js/**/*.js', browserSync.reload); 
// });

// gulp.task('useref', function(){
//   return gulp.src('development/*.html')
//     .pipe(useref())
//     .pipe(gulpIf('*.js', uglify()))
//     .pipe(gulpIf('*.css', cssnano()))
//     .pipe(gulp.dest('public'))
// });

// gulp.task('images', function(){
//   return gulp.src('development/images/**/*.+(png|jpg|gif|svg)')
//   .pipe(cache(imagemin({
//       interlaced: true
//     })))
//   .pipe(gulp.dest('public/images'))
// });


// gulp.task('fonts', function() {
//   return gulp.src('development/fonts/**/*')
//   .pipe(gulp.dest('public/fonts'))
// });

// // gulp.task('clean:public', function() {
// //   return del.sync('public');
// // })

// gulp.task('build', function (callback) {
//   runSequence('clean:public', 
//     ['sass', 'useref', 'fonts'],
//     callback
//   )
// });

// gulp.task('default', function (callback) {
//   runSequence(['sass','browserSync', 'watch'],
//     callback
//   )
// });


