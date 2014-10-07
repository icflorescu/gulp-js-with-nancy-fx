icons = [
  'twitter'
  'facebook'
  'google-plus'
  'linux'
  'apple'
  'windows'
]

exports.execute = ->
  ("<li class=\"awesome-icon-wrapper\"><i class=\"awesome-icon fa fa-#{icon}\"></i></li>" for icon in icons).join ''