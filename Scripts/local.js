(function() {
  $(function() {
    var data, url;

    if ($.cookie('Riders-Location-Cookie') === null) {
      url = $('#has-cookie-url').val();
      data = $('#antixxs').serialize();
      $.post(url, data, function(result) {
        if (result.hasCookie === false) {
          $("#culture").val(result.culture);
          if (result.culture === 'en-US') {
            $("#US").attr('checked', 'checked');
          } else {
            $("#UK").attr('checked', 'checked');
          }
          $("#location").modal();
          $("#location").modal({
            keyboard: false
          });
          return $("#location").modal('show');
        }
      });
    }
    $('.btn-primary, #close').click(function() {
      $("#location").modal('hide');
      if ($("#remember").attr('checked') === 'checked') {
        url = $('#save-cookie-url').val();
        data = $('#antixxs').serialize();
        $.post(url, data, function(result) {
          if (result.saved === false) {
            return alert(result.error.Message);
          } else {
            if (result.culture === "en-US") {
              return location.reload(true);
            }
          }
        });
      }
      return false;
    });
    return $('#change-culture').click(function() {
      url = $('#save-cookie-url').val();
      data = $('#antixxs').serialize() + "&version=" + $("#change-culture-to").val();
      $.post(url, data, function(result) {
        if (result.saved) {
          if (result.url === "") {
            return location.reload(true);
          } else if (window.location.href === result.url) {
            return location.reload(true);
          } else if (window.location.href.substring(0, window.location.href.length - 1) === result.url) {
            return location.reload(true);
          } else {
            return window.location.href = result.url;
          }
        } else {
          return alert(result.error.Message);
        }
      });
      return false;
    });
  });

}).call(this);
