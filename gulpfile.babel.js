import gulp from 'gulp';
import sass from 'gulp-sass';
import autoprefixer from 'gulp-autoprefixer';
import sourcemaps from 'gulp-sourcemaps';
import runSequence from 'run-sequence';
import concat from 'gulp-concat';
import gulpCopy from 'gulp-copy';


const dirs = {
  src: 'src',
  dest: 'build'
};

const sassPaths = {
  src: `${dirs.src}/scss/**/*.scss`,
  dest: `${dirs.dest}/css/`
};

const jsPaths = {
  src: `${dirs.src}/js/lib/*.js`,
  dest: `${dirs.dest}/js/`
};


gulp.task('js', function () {
    return gulp.src(['./src/js/lib/jquery.js',
                    './src/js/lib/axios.js',
                     './src/js/eventpage.js'])
            .pipe(sourcemaps.init())
            .pipe(concat('eventpage.js'))
            .pipe(sourcemaps.write('.'))
            .pipe(gulp.dest(jsPaths.dest));
});

gulp.task('sass', () => {
  return gulp.src(['./src/scss/global.scss'])
    .pipe(sourcemaps.init())
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(concat('styles.css'))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(sassPaths.dest));
});

gulp.task('copy-assets', function () {
    gulp.src('./src/assets/*')
        .pipe(gulp.dest('./build/assets'));
});

gulp.task('copy-files', function () {
    gulp.src(['./src/popup.html', './src/manifest.json', './src/chrome-extension.iml'])
        .pipe(gulp.dest('./build'));
});

gulp.task('watch:css', function () {
    gulp.watch('./src/scss/**/*.scss', ['sass']);
});

gulp.task('watch:js', function () {
    gulp.watch('./src/js/**/*.js', ['js']);
});

gulp.task('watch', function(){
    runSequence(
      'watch:css', 'watch:js'
    );
});

gulp.task('default', function(){
    runSequence(
      'js', 'sass', 'copy-assets', 'copy-files'
    );
});
