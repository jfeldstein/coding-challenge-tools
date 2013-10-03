# GET /
# Loads the app
index = (config) ->

  options =
    reload:    config.liveReload.enabled
    optimize:  config.isOptimize ? false
    cachebust: if process.env.NODE_ENV isnt "production" then "?b=#{(new Date()).getTime()}" else ''

  # In the event plain html pages are being used, need to
  # switch to different page for optimized view
  name = if config.isOptimize and config.server.views.html
    "index-optimize"
  else
    "index"

  (req, res) -> res.render name, options


# GET /trucks
# returns data
trucks = (config) ->

  # Just dump the file. 
  # TODO: be able to query within a lat/long boundary, so the app can request and be expected to handle only the necessary data. As is, gmaps's sdk should just ignore irrelevant data points. Hopefully it can handle all 500 at a time without crashing/freezing up. 
  
  dataPath = './trucks.json'

  options =
    reload:    config.liveReload.enabled
    optimize:  config.isOptimize ? false
    cachebust: if process.env.NODE_ENV isnt "production" then "?b=#{(new Date()).getTime()}" else ''

  (req, res) -> res.sendfile dataPath, options



exports.trucks = trucks
exports.index = index