$(document).ready(function() {
	var windowHeight = $(window).height();
		
		/*

		}
		$('.welcome-info-container').css('marginTop', $('.welcome-info-wrapper').height()/-2);
		
		$(window).on("resize", function() {
			$('.welcome-info-container').css('marginTop', $('.welcome-info-wrapper').height()/-2);
			if($(window).width() >=  992 && $(window).height() >= 750 && $(window).width()/$(window).height() >= 1.3) {
			var windowHeight = $(window).height();
			$('#home,.welcome-info-wrapper').css('height', windowHeight);
		} else {
			$('#home,.welcome-info-wrapper').css('height', $(window).width() / 1.78);
			
		}
		});
*/
	$('body').scrollspy({target: ".navbar", offset: 200}); 
	$('.navbar a, .welcome-info a').on('click', function(event) {
		event.preventDefault();
		var hash = this.hash;
		$('html,body').animate({
			scrollTop: $(hash).offset().top
		}, 900, function() {
			window.location.href = hash;
		});
	});

	/*var w = $(window).width();
	if (w >= 768) {

	$(window).on("scroll", function() {
			if($(window).scrollTop() > 900) {
			$('.navbar').fadeIn();
			}
			else {
			$('.navbar').fadeOut();
			}
		});
	}*/








		$('.gallery').photobox('a', { thumbs:true, thumb:'+div', loop:false }, callback);
		// using setTimeout to make sure all images were in the DOM, before the history.load() function is looking them up to match the url hash
		setTimeout(window._photobox.history.load, 2000);
		function callback(){
			console.log('callback for loaded content:', this);
		};





});