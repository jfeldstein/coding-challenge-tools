define ['jquery', 'templates', 'gmaps'], ($, templates, GoogleMap) ->

  class MapView

    render: (element) ->
      mapEl = document.getElementById 'map'
      map = new GoogleMap(mapEl)

  MapView