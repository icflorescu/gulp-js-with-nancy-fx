Gulp.js with ASP.NET / NancyFx
==============================

A simple ASP.NET solution to showcase a Node.js-based front-end development workflow.

![Gulp.js with ASP.NET/NancyFx](https://rawgit.com/icflorescu/gulp-js-with-nancy-fx/master/Web/Content/Images/logo.svg)

## The idea

While Visual Studio is an excellent IDE for writing **.NET code**, its web-development features are years behind the rich ecosystem growing around [Node.js](http://nodejs.org/).
Since Node.js is working fairly well on Windows, ASP.NET projects can benefit from modern client-side development tools such as [Gulp](http://gulpjs.com/), [browserify](http://browserify.org)/[watchify](https://github.com/substack/watchify), [Stylus](http://learnboost.github.io/stylus), [Livereload](http://livereload.com) etc.

## What do you need

- Visual Studio (tested on 2013);
- [Node.js](http://nodejs.org/);
- [Gulp](http://gulpjs.com/) installed globally: `npm i -g gulp`;
- A local copy of this repository ([clone it](github-windows://openRepo/https://github.com/icflorescu/gulp-js-with-nancy-fx) or download the [zip archive](https://github.com/icflorescu/gulp-js-with-nancy-fx/archive/master.zip));

## Features

- Scripts and styles in [Web\\FrontEnd](https://github.com/icflorescu/gulp-js-with-nancy-fx/tree/master/Web/FrontEnd) are compiled to [Web\\Content](https://github.com/icflorescu/gulp-js-with-nancy-fx/tree/master/Web/Content) using [browserify](http://browserify.org)/[watchify](https://github.com/substack/watchify) Gulp.js tasks;
- Client-side code can be written in [CoffeeScript](http://coffeescript.org/);
- CommonJS client-side packages are managed with NPM based on [Web\\FrontEnd\\package.json](https://github.com/icflorescu/gulp-js-with-nancy-fx/blob/master/Web/FrontEnd/package.json);
- Using [Stylus](http://learnboost.github.io/stylus) CSS preprocessor to leverage the power of various CSS frameworks and utilities such as [Jeet Grid System](http://jeet.gs/), [Rupture](http://jenius.github.io/rupture/), etc.;

## How to

- `cd` to [Web\\FrontEnd](https://github.com/icflorescu/gulp-js-with-nancy-fx/tree/master/Web/FrontEnd) and run `npm i` to install the needed NPM modules;
- The default/production gulp tasks will be run automatically on Web project post-build;
- In order to **[live-reload](http://livereload.com)** your changes during development you have to **manually run** `gulp live` in [Web\\FrontEnd](https://github.com/icflorescu/gulp-js-with-nancy-fx/tree/master/Web/FrontEnd) folder in command prompt (just leave it open; you can stop it with `Ctrl-C` when you're done);

## Caveats

- NTFS filesystem has a *not-so-well-documented* limitation that will prevent you from deleting [Web\\FrontEnd](https://github.com/icflorescu/gulp-js-with-nancy-fx/tree/master/Web/FrontEnd)\\node_modules folder!

  However, you can use [rimraf](https://www.npmjs.org/package/rimraf) to circumvent this. Here's how:

  - install it globally with `npm i -g rimraf`;
  - use `rimraf folder-to-delete` in command prompt.
- Visual Studio severely lags behind [Sublime Text & Plugins](http://www.sublimetext.com/) regarding the ability to edit client-side specific code. Its JavaScript / CoffeeScript support is a joke and there's no support for Stylus. It may be a good idea to use Sublime Text in parallel.
- It may be a good idea to instruct Visual Studio to **"show all files"** in the Web project. 

## References

Youn may want to have a look at these for additional information, tools and and ideas:

- [Gulp, Grunt, Bower and NPM in Visual Studio](http://www.hanselman.com/blog/IntroducingGulpGruntBowerAndNpmSupportForVisualStudio.aspx);
- [Task Runner Explorer Extension](http://visualstudiogallery.msdn.microsoft.com/8e1b4368-4afb-467a-bc13-9650572db708) for Visual Studio;
- [NPM Package Intellisense Extension](http://visualstudiogallery.msdn.microsoft.com/65748cdb-4087-497e-a394-2e3449c8e61e) for Visual Studio;
- [Grunt/Gulp Launcher Extension](http://visualstudiogallery.msdn.microsoft.com/dcbc5325-79ef-4b72-960e-0a51ee33a0ff) for Visual Studio;

## Endorsing the author

If you find this repository useful, please [tweet about it](http://twitter.com/share?text=Here%27s+how+to+use+Gulp.js+with+ASP.NET%2FNancyFx%21&url=https%3A%2F%2Fgithub.com%2Ficflorescu%2Fgulp-js-with-nancy-fx&hashtags=nodejs%2Cnpm%2Cgulp%2Cvisualstudio%2Cdotnet&via=icflorescu) and/or [![endorse](https://api.coderwall.com/icflorescu/endorsecount.png)](https://coderwall.com/icflorescu) me on Coderwall!

## License

The [MIT License](https://github.com/icflorescu/gulp-js-with-nancy-fx/blob/master/LICENSE.md).
