
var gulp = require('gulp'),
 watch = require('gulp-watch');

gulp.task('default', function () {
    console.log("hurray ...we create a gulp task.");
});

gulp.task('html', function () {
    console.log("somethink good for us");
});

gulp.task('styles', function () {
    console.log("somethink about sass or postCss etc ");
});

gulp.task('watch',  function(){

watch('./app/index.html',  function(){
gulp.start('html');

});

watch('./app/assets/styles/**/*.css', function(){

gulp.start('styles');
});

});