var main = function(){
	$('#motto1').fadeIn(750);
	$('#motto2').delay(750).fadeIn(750);
	$('#motto3').delay(1500).fadeIn(750);
	

	

	

	$('a.Navbar').hover(function(){
		$(this).addClass("hover");
	}, function(){
		$(this).removeClass("hover");
	});


	$(document).on('click', 'a', function(event){
    	event.preventDefault();

    	$('html, body').animate({
        	scrollTop: $( $.attr(this, 'href') ).offset().top
    	}, 500);
});

};

$(document).ready(main);