require
  urlArgs: "b=#{(new Date()).getTime()}"
  paths:
    jquery: 'vendor/jquery/jquery'
    gmaps: 'vendor/requirejs-google-maps/GoogleMap'
    async: 'vendor/requirejs-plugins/async',
    bootstrap: 'vendor/bootstrap/bootstrap',
    underscore: 'vendor/underscore-amd/underscore'
  , ['app/map-view']
  , (MapView) ->
    view = new MapView()
    view.render('body')