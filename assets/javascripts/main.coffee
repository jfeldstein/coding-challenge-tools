require
  urlArgs: "b=#{(new Date()).getTime()}"
  paths:
    jquery: 'vendor/jquery/jquery'
    gmaps: 'vendor/requirejs-google-maps/GoogleMap'
    async: 'vendor/requirejs-plugins/async'
  , ['app/example-view']
  , (ExampleView) ->
    view = new ExampleView()
    view.render('body')