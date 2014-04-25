var gulp = require('gulp'),
    concatCss = require('gulp-concat-css'),
    minifyCSS = require('gulp-minify-css'),
    livereload = require('gulp-livereload');

gulp.task('styles', function() {
  gulp.src('public/stylesheets/*.css')
    .pipe(concatCss("build.css"))
    .pipe(minifyCSS(opts))
    .pipe(livereload())
    .pipe(gulp.dest("public/build/css/"));
});

gulp.task('watch', function(){
   gulp.watch('css/*.css', ['styles']); 
});

gulp.task('default', ['styles', 'watch']);