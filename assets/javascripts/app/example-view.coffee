define ['jquery', 'templates', 'gmaps'], ($, templates, GoogleMap) ->

  class ExampleView

    render: (element) ->
      console.log "GOOGLE MAP", GoogleMap
      $(element).append templates.example({name:'Handlebars', css:'stylus'})
      $(element).append templates['another-example']({name:'Handlebars'})

  ExampleView