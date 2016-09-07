jQuery(document).ready(function() {
	
	// Fix IE7 z-indexing
    $(function() {
        var zIndexNumber = 1000;
        $('#header *').each(function() {
            $(this).css('zIndex', zIndexNumber);
            zIndexNumber -= 10;
        });
    });
	
	var hide_dropdowns_below = 850; // size we switch off the dynamic bits and pieces - dropdowns and tabs etc
	var disable_tabs_below = 650; // size we switch off the dynamic bits and pieces - dropdowns and tabs etc
	
	function viewport() {
		var e = window , a = 'inner';
		if ( !( 'innerWidth' in window ) ) {
			a = 'client';
			e = document.documentElement || document.body;
		}
		return { width : e[ a+'Width' ] , height : e[ a+'Height' ] }
	}

	var vp = viewport();
	
	if (vp.width >= hide_dropdowns_below) {
		
		// Dropdowns
		$('#header ul li').hoverIntent(function () {
			$(this).addClass('open');
			$('.dropdown', this).slideDown('fast', function() {});
		}, function () {
			$(this).removeClass('open');
			$('.dropdown', this).slideUp('fast', function() {});
		});
		
		// Pop down text
		$('.show-text').hoverIntent(function () {
			if ($(this).hasClass('ribbon')) {
				$(this).next().children('p').slideDown('fast', function() {});
			} else {
				$('p', this).slideDown('fast', function() {});
			}
		}, function () {
			if ($(this).hasClass('ribbon')) {
				$(this).next().children('p').slideUp('fast', function() {});
			} else {
				$('p', this).slideUp('fast', function() {});
			}
		});
		
	}
	
	if (vp.width >= disable_tabs_below) {
		
		// Tabs
		$('.tabs li a').click(function () {
			if ($(this).hasClass('selected')) {
				null;
			} else {
				$('.tabs li a').removeClass('selected');
				$('.tabs div').hide();
				$(this).addClass('selected');
				$('#tab-' + this.id).fadeToggle('fast', function() {});
			};
			return false;
		});
		
	}
	
	// Our people accordian
	$('.people li a').click(function () {
		if ($(this).hasClass('open')) {
			$(this).parent().parent().children('.extra-info').slideToggle('fast', function() {});
			$(this).removeClass('open');
		} else {
			$('.people li a').removeClass('open');
			$('.people li .extra-info').hide();
			$(this).addClass('open');
			$(this).parent().parent().children('.extra-info').slideToggle('fast', function() {});
		};
		return false;
	});
	
	// Mobile menu
    $('.left-nav .section').click(function () {
        if ($(this).hasClass('selected')) {
            $(this).removeClass('selected');
            $(this).next().slideUp('fast', function() {});
        } else {
            $(this).addClass('selected');
            $(this).next().slideDown('fast', function() {});
		};
        return false;
    });

});

// Fix IE7 z-indexing

$(function () {
    var zIndexNumber = 1000;
    $('#header *').each(function () {
        $(this).css('zIndex', zIndexNumber);
        zIndexNumber -= 10;
    });
});


