define ['jquery', 'underscore', 'templates'], ($, _, templates) ->

  class SidebarView

    render: (renderInto) ->
      html = templates['sidebar']()

      $(renderInto).html html

      $('#gotoaddress').on 'click', ->
        address = $('#address').val()
        $(this).trigger('panToAddress', address)

  SidebarView