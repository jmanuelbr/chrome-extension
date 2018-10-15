import gulp from 'gulp';
import sass from 'gulp-sass';
import autoprefixer from 'gulp-autoprefixer';
import sourcemaps from 'gulp-sourcemaps';
import runSequence from 'run-sequence';
import concat from 'gulp-concat';

const dirs = {
  src: 'src',
  dest: 'build'
};

const sassPaths = {
  src: `${dirs.src}/scss/**/*.scss`,
  dest: `${dirs.dest}/styles/`
};

const jsPaths = {
  src: `${dirs.src}/js/lib/*.js`,
  dest: `${dirs.dest}/js/`
};


gulp.task('build-js', function () {
    return gulp.src(['./src/js/lib/jquery.js',
                    './src/js/lib/axios.js',
                     './src/js/eventpage.js'])
            .pipe(sourcemaps.init())
            .pipe(concat('bundle.js'))
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



gulp.task('default', function(){
    runSequence(
      'build-js','sass'
    );
});
