
jQuery(document).ready(function ($) {
    $('#gallery-1').royalSlider({
        fullscreen: {
            enabled: false
        },
        controlNavigation: 'bullets',
        autoScaleSlider: true,
        autoPlay: {
            enabled: true,
            pauseOnHover: true,
            delay: 4000
        },
        autoScaleSlider: true,
        autoScaleSliderWidth: 1020,
        autoScaleSliderHeight: 336,
        arrowsNavHideOnTouch: true,
        loop: false,
        numImagesToPreload: 4,
        arrowsNavAutohide: true,
        arrowsNavHideOnTouch: true,
        keyboardNavEnabled: true,
        globalCaption: false,
        imageAlignCenter: true,
        imageScaleMode: 'fill'
    });
});