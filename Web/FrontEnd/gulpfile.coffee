# Generics
_          = require 'lodash'
fs         = require 'fs'
path       = require 'path'
gulp       = require 'gulp'
streamify  = require 'gulp-streamify'
gutil      = require 'gulp-util'
tap        = require 'gulp-tap'
livereload = require 'gulp-livereload'

# Scripts
source     = require 'vinyl-source-stream'
browserify = require 'browserify'
watchify   = require 'watchify'
uglify     = require 'gulp-uglify'

# Styles
stylus     = require 'gulp-stylus'
prefixer   = require 'gulp-autoprefixer'
csso       = require 'gulp-csso'

info = (file) -> gutil.log "Processed #{path.basename file.path}"

styles = (options) ->
  process = ->
    st = gulp.src 'Styles/*.styl'
      .pipe stylus errors: yes, 'include css': yes, paths: ['./node_modules']
      .pipe prefixer()
    st.pipe csso() if options.compress
    st.pipe gulp.dest '../Content'
      .pipe tap info
  gulp.watch 'Styles/**/*', process if options.live
  process()

scripts = (options) ->
  scripts = fs.readdirSync './Scripts'
    .filter (item) -> path.extname(item) is '.coffee'
    .map    (item) -> path.basename item, '.coffee'
  for script in scripts
    do (script) ->
      bundler = browserify
        entries:      "./Scripts/#{script}.coffee"
        debug:        not options.compress
        cache:        {}
        packageCache: {}
      bundler = watchify bundler if options.live
      process = ->
        st = bundler.bundle()
          .on 'error', gutil.log
          .pipe source "#{script}.js"
        st.pipe streamify uglify() if options.compress
        st.pipe gulp.dest '../Content'
          .pipe tap info
      bundler.on 'update', process if options.live
      process()

gulp.task 'default', ->
  styles  compress: off, live: off
  scripts compress: off, live: off

gulp.task 'production', ->
  styles  compress: on, live: off
  scripts compress: on, live: off

gulp.task 'live', ->
  styles  compress: off, live: on
  scripts compress: off, live: on
  _.delay ->
      lrs = livereload()
      lrs.changed ''
      gulp.watch '../Content/**/*', (e) -> lrs.changed path.relative '/Content', e.path
      gulp.watch '../Views/**/*',       -> lrs.changed ''
    , 3000
