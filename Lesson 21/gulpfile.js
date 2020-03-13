const gulp = require('gulp')

function copyFiles() {
    console.log('copyFiles')
}

function buildCSS() {
    console.log('buildCSS')
}

function injectCSS() {
    console.log('injectCSS')
}



module.exports = {
    build: gulp.series(copyFiles, buildCSS, injectCSS)
}