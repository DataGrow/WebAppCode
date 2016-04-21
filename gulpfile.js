var gulp = require('gulp');
var concat = require('gulp-concat');
var annotate = require('gulp-ng-annotate');
var plumber = require('gulp-plumber');
var uglify = require('gulp-uglify');
var watch = require('gulp-watch');
var sass = require('gulp-sass');
var scss = require('gulp-scss');
var path = require('path');
var sourcemaps = require('gulp-sourcemaps');

var paths = {
  jsSource: ['./development/js/app.js', './development/js/lib/bootstrap-checkbox-radio-switch.js', './development/js/lib/chartist.min.js',  './development/js/lib/light-bootstrap-dashboard.js', './development/js/controllers/*.js', './development/js/services/*.js', './development/**/*.js', '!/public/bundle.js'],
  sassSource: ['./development/styles/**/*.scss']
};

gulp.task('js', function() {
  return gulp.src(paths.jsSource)
  .pipe(plumber())
  .pipe(concat('bundle.js'))
  .pipe(sourcemaps.write())
  .pipe(annotate())
  .pipe(gulp.dest('./public'));
});

gulp.task('sass', function () {
  return gulp.src(paths.sassSource)
    .pipe(sass({
      paths: [ path.join(__dirname, 'styles') ]
    }))
    .pipe(concat('style.css'))
    .pipe(gulp.dest('./public'));
});

gulp.task('watch', function() {
  gulp.watch(paths.jsSource, ['js']);
  gulp.watch(paths.sassSource, ['sass']);

});

gulp.task('default', ['watch', 'js', 'sass']);

