const { src, dest, watch, series } = require('gulp')
const sass = require('gulp-sass')(require('sass'));
const purgecss = require('gulp-purgecss')

function buildStyles() {
  return src('./Fernosa/fernosa.scss')
    .pipe(sass())
    .pipe(purgecss({content: ['*.html']}))
    .pipe(dest('FernosaCSS'))
}

function watchTask() {
  watch(['./Fernosa/fernosa.scss', '*.html'], buildStyles)
}

exports.default = series(buildStyles, watchTask)