jQuery(document).ready(function () {

    $('img[usemap]').rwdImageMaps();

    $('.left-nav li a, area').hoverIntent(function () {

        var country = this.title.replace(' ', '-');
        
        if (country == "") {
            country = this.innerHTML.replace(' ', '-');
        }
        
        if (country != "") {
            var mapurl = $('#mapUrl')[0].value;
            $('#africa').attr('src', mapurl + country + ".png");
            if ($('#info-' + country).length > 0) {
                $('.info div, .details .detail').hide();
                $('#info-' + country).fadeToggle('slow', function () {
                });
                $('#detail-' + country).fadeToggle('slow', function () {
                });
            }

        };

    }, function () {
        null;
    });


});