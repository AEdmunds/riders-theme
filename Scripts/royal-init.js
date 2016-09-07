jQuery(document).ready(function ($) {
    $('#gallery-1').royalSlider({
        fullscreen: {
            enabled: false
        },
        controlNavigation: 'thumbnails',
        autoScaleSlider: true,
        autoScaleSliderWidth: 770,
        autoScaleSliderHeight: 609,
        arrowsNavHideOnTouch: true,
        loop: false,
        numImagesToPreload: 4,
        arrowsNavAutohide: true,
        arrowsNavHideOnTouch: true,
        keyboardNavEnabled: true,
        globalCaption: true,
        imageAlignCenter: true,
        imageScaleMode: 'fill'
    });
});