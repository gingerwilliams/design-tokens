// gulpfile.js 
const gulp = require('gulp')
const theo = require('gulp-theo')

// Transform aliases.json to dist/props.scss: 
gulp.task('tokens:less', () =>
    gulp.src('aliases.json')
        .pipe(theo.plugin({
            transform: { type: 'web' },
            format: { type: 'less' }
        }))
        .pipe(gulp.dest('dist'))
)

gulp.task('build', ['tokens:less']);