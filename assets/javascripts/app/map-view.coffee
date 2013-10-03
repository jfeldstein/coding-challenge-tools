define ['jquery', 'underscore', 'templates', 'gmaps'], ($, _, templates, GoogleMap) ->

  class MapView

    render: (element) ->
      mapEl = document.getElementById 'map'
      map = new GoogleMap mapEl,
        center: new google.maps.LatLng('37.7733', '-122.4337')
        zoom: 14
      lastWindow = false

      $.get '/trucks/', (data) ->
        _(data).each (truck) ->
          info = new google.maps.InfoWindow
            content: templates['truck-info-window'](truck)

          marker = new google.maps.Marker
            position: new google.maps.LatLng(truck.lat, truck.long)
            map: map

          google.maps.event.addListener marker, 'click', ->
            lastWindow.close() if lastWindow
            info.open(map,marker)
            lastWindow = info

  MapView