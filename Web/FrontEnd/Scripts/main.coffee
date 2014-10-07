icons = require './Includes/awesome-icons.coffee'
links = require './Includes/adjust-external-link-targets.coffee'

$ ->
  $('.awesome-icons-wrapper').append icons.execute()
  links.execute()