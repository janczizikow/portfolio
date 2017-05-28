var gulp        = require('gulp');
var browserSync = require('browser-sync');
var sass        = require('gulp-sass');
var prefix      = require('gulp-autoprefixer');
var sourcemaps  = require('gulp-sourcemaps');
var uglify      = require('gulp-uglify');
var cp          = require('child_process');
var deploy      = require('gulp-gh-pages');

var jekyll   = process.platform === 'win32' ? 'jekyll.bat' : 'jekyll';
var messages = {
    jekyllBuild: '<span style="color: grey">Running:</span> $ jekyll build'
};

var dist = {
    js: "_site/assets/js",
    css: "_site/assets/css",
    img: "_site/assets/img"
};

/**
 * Build the Jekyll Site
 */
gulp.task('jekyll-build', function (done) {
    browserSync.notify(messages.jekyllBuild);
    return cp.spawn( jekyll , ['build'], {stdio: 'inherit'})
        .on('close', done);
});

gulp.task('deploy', ['jekyll-build'], function () {
    return gulp.src('./_site/**/*')
        .pipe(deploy());
});

/**
 * Rebuild Jekyll & do page reload
 */
gulp.task('rebuild', ['jekyll-build'], function () {
    browserSync.reload();
});

/**
 * Wait for jekyll-build, then launch the Server
 */
gulp.task('browser-sync', ['sass', 'jekyll-build'], function() {
    browserSync({
        server: {
            baseDir: '_site'
        }
    });
});

/**
 * Compile SASS to CSS & prefix CSS
 */
gulp.task('sass', function () {
    return gulp.src('_scss/main.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({
            outputStyle: 'compressed',
            includePaths: ['scss'],
            onError: browserSync.notify
        }))
        .pipe(prefix(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))
        .pipe(sourcemaps.write('./maps'))
        .pipe(gulp.dest(dist.css))
        .pipe(browserSync.reload({stream:true}))
        .pipe(gulp.dest('assets/css'));
});
/**
  * Uglify JS
  */
gulp.task('uglify', function() {
  return gulp.src('assets/js/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('./_site/assets/js'))
    .on('error', function(err){
      console.error('Error in uglify taks', err.toString());
    });
});

/**
 * Watch scss files for changes & recompile
 * Watch html/md files, run jekyll & reload BrowserSync
 * Watch js files
 */
gulp.task('watch', function () {
    gulp.watch('_scss/**/*.scss', ['sass']);
    gulp.watch(['*.html', '_layouts/*.html', '_includes/*.html', '_posts/*',  'pages_/*', '_include/*html'], ['rebuild']);
    gulp.watch('assets/js/*.js', ['rebuild']);
});

/**
 * Default task, running just `gulp` will compile the sass,
 * compile the jekyll site, launch BrowserSync & watch files.
 */
gulp.task('default', ['browser-sync', 'watch']);
