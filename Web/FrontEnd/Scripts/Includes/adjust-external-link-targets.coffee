exports.execute = ->
  $(link).attr 'target', '_blank' for link in $('a[href^="http"]')