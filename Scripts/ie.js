jQuery(document).ready(function() {
	
	// Fix IE7 z-indexing
    $(function() {
        var zIndexNumber = 1000;
        $('#header *').each(function() {
            $(this).css('zIndex', zIndexNumber);
            zIndexNumber -= 10;
        });
    });

});



