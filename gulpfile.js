// Gulp and node
var gulp = require('gulp');
var cp = require('child_process');

// Basic workflow plugins
var browserSync = require('browser-sync');
var sass        = require('gulp-sass');
var deploy      = require('gulp-gh-pages');
var jekyll   = process.platform === 'win32' ? 'jekyll.bat' : 'jekyll';
var messages = {
    jekyllBuild: '<span style="color: grey">Running:</span> $ jekyll build'
};

// Performance workflow plugins
var prefix      = require('gulp-autoprefixer');
var sourcemaps  = require('gulp-sourcemaps');
var concat      = require('gulp-concat');
var uglify      = require('gulp-uglify');
var webp        = require('gulp-webp');
var critical    = require('critical');

var dist = {
    js: "_site/assets/js",
    css: "_site/assets/css",
    img: "_site/assets/img"
};

/* ----- inline-image(pathToFile) ----- */

function sassFunctions(options) {
  options = options || {};
  options.base = options.base || process.cwd();

  var fs        = require('fs');
  var path      = require('path');
  var types     = require('node-sass').types;

  var funcs = {};

  funcs['inline-image($file)'] = function(file, done) {
    var file = path.resolve(options.base, file.getValue());
    var ext  = file.split('.').pop();
    fs.readFile(file, function(err, data) {
      if (err) return done(err);
      data = new Buffer(data);
      data = data.toString('base64');
      data = 'url(data:image/' + ext + ';base64,' + data +')';
      data = types.String(data);
      done(data);
    });
  };

  return funcs;
}

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
gulp.task('browser-sync', ['sass', 'js', 'jekyll-build'], function() {
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
            functions: sassFunctions(),
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
gulp.task('js', function() {
  return gulp.src('_js/**/*.js')
    .pipe(concat('bundle.js'))
    .pipe(uglify())
    .pipe(gulp.dest('assets/js'))
    .pipe(browserSync.reload({stream: true}))
    .on('error', function(err){
      console.error('Error in uglify taks', err.toString());
    });
});

// -----------------------------------------------------------------------------
// Generate critical-path CSS
//
// This task generates a small, minimal amount of your CSS based on which rules
// are visible (aka "above the fold") during a page load. We will use a Jekyll
// template command to inline the CSS when the site is generated.
//
// All styles should be directly applying to an element visible when your
// website renders. If the user has to scroll even a small amount, it's not
// critical CSS.
// -----------------------------------------------------------------------------
gulp.task('critical', function (cb) {
  critical.generate({
    base: '_site/',
    src: 'index.html',
    css: ['assets/css/main.css'],
    dimensions: [{
      width: 320,
      height: 480
    },{
      width: 768,
      height: 1024
    },{
      width: 1280,
      height: 960
    }],
    dest: '../_includes/critical.css',
    minify: true,
    extract: false,
    ignore: ['@font-face']
  });
});

gulp.task('webp',function(){
  gulp.src('assets/img/*.jpg')
    .pipe(webp())
    .pipe(gulp.dest('assets/img'))

  //Projects
  gulp.src('assets/img/projects/minimal-portfolio/*.jpg')
    .pipe(webp())
    .pipe(gulp.dest('assets/img/projects/minimal-portfolio'))
  // The clinic
  gulp.src('assets/img/projects/the-clinic/*.jpg')
    .pipe(webp())
    .pipe(gulp.dest('assets/img/projects/the-clinic'))
  // Blanccstate
  gulp.src('assets/img/projects/blanccstate/*.jpg')
    .pipe(webp())
    .pipe(gulp.dest('assets/img/projects/blanccstate'))
  // Jekyll-sleek
  gulp.src('assets/img/projects/jekyll-sleek/*.jpg')
    .pipe(webp())
    .pipe(gulp.dest('assets/img/projects/jekyll-sleek'))
});

/**
 * Watch scss files for changes & recompile
 * Watch html/md files, run jekyll & reload BrowserSync
 * Watch js files
 */
gulp.task('watch', function () {
    gulp.watch('_scss/**/*.scss', ['sass']);
    gulp.watch(['*.html', '_layouts/*.html', '_includes/*.html', '_posts/*',  'pages_/*', '_include/*html'], ['rebuild']);
    gulp.watch('_js/**/*.js', ['js']);
});

/**
 * Default task, running just `gulp` will compile the sass,
 * compile the jekyll site, launch BrowserSync & watch files.
 */
gulp.task('default', ['browser-sync', 'watch', 'webp']);
