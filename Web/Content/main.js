(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var icons, links;

icons = require('./Includes/awesome-icons.coffee');

links = require('./Includes/adjust-external-link-targets.coffee');

$(function() {
  $('.awesome-icons-wrapper').append(icons.execute());
  return links.execute();
});



},{"./Includes/adjust-external-link-targets.coffee":2,"./Includes/awesome-icons.coffee":3}],2:[function(require,module,exports){
exports.execute = function() {
  var link, _i, _len, _ref, _results;
  _ref = $('a[href^="http"]');
  _results = [];
  for (_i = 0, _len = _ref.length; _i < _len; _i++) {
    link = _ref[_i];
    _results.push($(link).attr('target', '_blank'));
  }
  return _results;
};



},{}],3:[function(require,module,exports){
var icons;

icons = ['twitter', 'facebook', 'google-plus', 'linux', 'apple', 'windows'];

exports.execute = function() {
  var icon;
  return ((function() {
    var _i, _len, _results;
    _results = [];
    for (_i = 0, _len = icons.length; _i < _len; _i++) {
      icon = icons[_i];
      _results.push("<li class=\"awesome-icon-wrapper\"><i class=\"awesome-icon fa fa-" + icon + "\"></i></li>");
    }
    return _results;
  })()).join('');
};



},{}]},{},[1])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlc1xcYnJvd3NlcmlmeVxcbm9kZV9tb2R1bGVzXFxicm93c2VyLXBhY2tcXF9wcmVsdWRlLmpzIiwiRDpcXFdvcmtcXEd1bHBKc1dpdGhOYW5jeUZ4XFxXZWJcXEZyb250RW5kXFxTY3JpcHRzXFxtYWluLmNvZmZlZSIsIkQ6XFxXb3JrXFxHdWxwSnNXaXRoTmFuY3lGeFxcV2ViXFxGcm9udEVuZFxcU2NyaXB0c1xcSW5jbHVkZXNcXGFkanVzdC1leHRlcm5hbC1saW5rLXRhcmdldHMuY29mZmVlIiwiRDpcXFdvcmtcXEd1bHBKc1dpdGhOYW5jeUZ4XFxXZWJcXEZyb250RW5kXFxTY3JpcHRzXFxJbmNsdWRlc1xcYXdlc29tZS1pY29ucy5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQSxJQUFBLFlBQUE7O0FBQUEsS0FBQSxHQUFRLE9BQUEsQ0FBUSxpQ0FBUixDQUFSLENBQUE7O0FBQUEsS0FDQSxHQUFRLE9BQUEsQ0FBUSxnREFBUixDQURSLENBQUE7O0FBQUEsQ0FHQSxDQUFFLFNBQUEsR0FBQTtBQUNBLEVBQUEsQ0FBQSxDQUFFLHdCQUFGLENBQTJCLENBQUMsTUFBNUIsQ0FBbUMsS0FBSyxDQUFDLE9BQU4sQ0FBQSxDQUFuQyxDQUFBLENBQUE7U0FDQSxLQUFLLENBQUMsT0FBTixDQUFBLEVBRkE7QUFBQSxDQUFGLENBSEEsQ0FBQTs7Ozs7QUNBQSxPQUFPLENBQUMsT0FBUixHQUFrQixTQUFBLEdBQUE7QUFDaEIsTUFBQSw4QkFBQTtBQUFBO0FBQUE7T0FBQSwyQ0FBQTtvQkFBQTtBQUFBLGtCQUFBLENBQUEsQ0FBRSxJQUFGLENBQU8sQ0FBQyxJQUFSLENBQWEsUUFBYixFQUF1QixRQUF2QixFQUFBLENBQUE7QUFBQTtrQkFEZ0I7QUFBQSxDQUFsQixDQUFBOzs7OztBQ0FBLElBQUEsS0FBQTs7QUFBQSxLQUFBLEdBQVEsQ0FDTixTQURNLEVBRU4sVUFGTSxFQUdOLGFBSE0sRUFJTixPQUpNLEVBS04sT0FMTSxFQU1OLFNBTk0sQ0FBUixDQUFBOztBQUFBLE9BU08sQ0FBQyxPQUFSLEdBQWtCLFNBQUEsR0FBQTtBQUNoQixNQUFBLElBQUE7U0FBQTs7QUFBQztTQUFBLDRDQUFBO3VCQUFBO0FBQUEsb0JBQUMsbUVBQUEsR0FBbUUsSUFBbkUsR0FBd0UsZUFBekUsQ0FBQTtBQUFBOztNQUFELENBQTBHLENBQUMsSUFBM0csQ0FBZ0gsRUFBaEgsRUFEZ0I7QUFBQSxDQVRsQixDQUFBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIu+7v2ljb25zID0gcmVxdWlyZSAnLi9JbmNsdWRlcy9hd2Vzb21lLWljb25zLmNvZmZlZSdcclxubGlua3MgPSByZXF1aXJlICcuL0luY2x1ZGVzL2FkanVzdC1leHRlcm5hbC1saW5rLXRhcmdldHMuY29mZmVlJ1xyXG5cclxuJCAtPlxyXG4gICQoJy5hd2Vzb21lLWljb25zLXdyYXBwZXInKS5hcHBlbmQgaWNvbnMuZXhlY3V0ZSgpXHJcbiAgbGlua3MuZXhlY3V0ZSgpIiwi77u/ZXhwb3J0cy5leGVjdXRlID0gLT5cclxuICAkKGxpbmspLmF0dHIgJ3RhcmdldCcsICdfYmxhbmsnIGZvciBsaW5rIGluICQoJ2FbaHJlZl49XCJodHRwXCJdJykiLCLvu79pY29ucyA9IFtcclxuICAndHdpdHRlcidcclxuICAnZmFjZWJvb2snXHJcbiAgJ2dvb2dsZS1wbHVzJ1xyXG4gICdsaW51eCdcclxuICAnYXBwbGUnXHJcbiAgJ3dpbmRvd3MnXHJcbl1cclxuXHJcbmV4cG9ydHMuZXhlY3V0ZSA9IC0+XHJcbiAgKFwiPGxpIGNsYXNzPVxcXCJhd2Vzb21lLWljb24td3JhcHBlclxcXCI+PGkgY2xhc3M9XFxcImF3ZXNvbWUtaWNvbiBmYSBmYS0je2ljb259XFxcIj48L2k+PC9saT5cIiBmb3IgaWNvbiBpbiBpY29ucykuam9pbiAnJyJdfQ==
