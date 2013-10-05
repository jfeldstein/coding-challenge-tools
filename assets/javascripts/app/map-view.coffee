define ['jquery', 'underscore', 'templates'], ($, _, templates) ->
  
  # Had trouble getting the app to compile with the remote gmaps api javascripts
  # So they're loaded directly by the HTML. 
  #
  # Normally, I'd file an issue with the mimosa maintainers, 
  # as I think it's an issue with their mimosa-web-projects bundle
  GoogleMap = google.maps

  class MapView

    render: () ->
      geoCoder = new GoogleMap.Geocoder()
      mapEl = document.getElementById 'map'
      map = new GoogleMap.Map mapEl,
        center: new GoogleMap.LatLng('37.7733', '-122.4337')
        zoom: 14
      lastWindow = false

      # Anything can throw the panToAddress event
      $('body').on 'panToAddress', (e, address) ->
        geoCoder.geocode
          address: address
          ,
          (results, status) -> 
            map.setCenter results[0].geometry.location
            map.setZoom 15

      $.get '/trucks/', (data) ->
        _(data).each (truck) ->
          info = new GoogleMap.InfoWindow
            content: templates['truck-info-window'](truck)

          marker = new GoogleMap.Marker
            position: new GoogleMap.LatLng(truck.lat, truck.long)
            map: map
            icon: '/img/foodtruck.png'

          GoogleMap.event.addListener marker, 'click', ->
            lastWindow.close() if lastWindow
            info.open(map,marker)
            lastWindow = info

  MapView