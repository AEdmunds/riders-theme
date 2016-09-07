$ ->
	## -- CHECK THE COOKIE
	
	if $.cookie('Riders-Location-Cookie') is null 
		
		url = $('#has-cookie-url').val()
		data = $('#antixxs').serialize()
		$.post url, data, (result) -> 
			
			## double check no cookie
			if result.hasCookie is false		
			
				## set the culture on the form 
				$("#culture").val(result.culture)
			
				## select the radio box 
				if result.culture is 'en-US'
					$("#US").attr('checked', 'checked');
				else 
					$("#UK").attr('checked', 'checked');
			
				## show the popup 
				$("#location").modal()                       
				$("#location").modal keyboard: false    
				$("#location").modal 'show'

		
	## -- SAVE THE COOKIE

	$('.btn-primary, #close').click ->
		$("#location").modal 'hide'
		if $("#remember").attr('checked') is 'checked'
			url = $('#save-cookie-url').val()
			data = $('#antixxs').serialize()
			$.post url, data, (result) ->
				if result.saved is false
					alert result.error.Message 
				else 
					if result.culture is "en-US"
						location.reload(true)

		return false

	$('#change-culture').click ->
		
		## change cookie
		url = $('#save-cookie-url').val()
		data = $('#antixxs').serialize() + "&version=" + $("#change-culture-to").val() 
		$.post url, data, (result) ->
			if result.saved
				## reload or redirect 
				if result.url is "" 
					location.reload(true)
				else if window.location.href is result.url 
					location.reload(true)
				else if window.location.href.substring(0, window.location.href.length-1) is result.url
					location.reload(true)
				else                       
					window.location.href = result.url; 
			else
				alert result.error.Message

		return false