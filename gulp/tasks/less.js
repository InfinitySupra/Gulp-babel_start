import gulp from 'gulp';
import less from 'gulp-less';
import concat from 'gulp-concat';
import browserSync from 'browser-sync';
import autoprefixer from 'gulp-autoprefixer';


const lessStyle = () => {
   return gulp.src('app/less/style.less')
      .pipe(less({ outputStyle: 'compressed' }))
      .pipe(concat('style.min.css'))
      .pipe(autoprefixer({
         overrideBrowserslist: ['last 10 version'],
         grid: true
      }))
      .pipe(gulp.dest('app/css'))
      .pipe(browserSync.stream())
};

export default lessStyle;

