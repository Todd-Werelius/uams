var gulp       = require('gulp');
var svgIconSet = require('gulp-svg-ngmaterial');
var svgMin     = require('gulp-svgmin');
var gzip       = require('gulp-gzip');
var watch      = require('gulp-watch');
var batch      = require('gulp-batch');
var gls        = require('gulp-live-server');
var cheerio    = require('gulp-cheerio');

gulp.task('live-server', function() {
  //3. serve multi folders
  var server = gls.static(['app'],8081);
  server.start();

  //use gulp.watch to trigger server actions(notify, start or stop)
  gulp.watch(['app/**'], function (file) {
    server.notify.apply(server, [file]);
  });
});

gulp.task("watch-iconset", function() {
  watch('assets/svg/**/*.svg',batch(function(events,done) {
    gulp.start("build-iconset", done);
  }));
});

gulp.task('build-iconset', function () {
 //noinspection JSUnusedGlobalSymbols
  return gulp
    .src('assets/svg/**/*.svg')
    .pipe(svgMin())
    .pipe(cheerio({
      run: function ($) {
        $('[fill]').removeAttr('fill');
      },
      parserOptions: { xmlMode: true }
    }))
    .pipe(svgIconSet({ filename : "icons.svg"}))
    .pipe(gulp.dest('app/assets/svg'))
    .pipe(gzip({append: true,gzipOptions: { level: 9 }}))
    .pipe(gulp.dest('app/assets/svg'));
});