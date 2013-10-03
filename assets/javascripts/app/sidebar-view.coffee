define ['jquery', 'underscore', 'templates'], ($, _, templates) ->

  class SidebarView

    render: (renderInto) ->
      html = templates['sidebar']()

      $(renderInto).html html

      $('#gotoaddress').on 'click', =>
        address = $('#address').val()
        $('body').trigger('panToAddress', address)

        @showAlertSignup()

    # Could be more complex than .show(), and didn't want to pullute the click handler
    showAlertSignup: ->
      $('.alert-signup').show()

  SidebarView