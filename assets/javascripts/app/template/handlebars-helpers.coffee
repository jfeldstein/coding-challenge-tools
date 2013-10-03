define ['vendor/handlebars'], (Handlebars) ->
  Handlebars.registerHelper 'map-link-helper', (address) ->
    url = "https://www.google.com/maps/preview#!q=" + encodeURIComponent(address)

    new Handlebars.SafeString "<a href=\"#{url}\" target=\"_blank\">#{address}</a>"


  Handlebars.registerHelper 'colon-del-to-list', (str) ->
    items = str.split(':')

    ret = "<ul>"

    for item in items
      ret += "<li>" + item + "</li>"

    ret + '</ul>'
