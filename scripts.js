$(document).ready(function() {
    
	$("#skills-link").click(function(){
    	$(".skills").fadeIn(3000).addClass("selected");
    	if ($(".contact").hasClass('selected') === true) {
    		$(".contact").hide();
    	}
});

	$("#contact-link").click(function() {
		$(".contact").fadeIn(3000).addClass("selected");
		if ($(".skills").hasClass('selected') === true) {
			$(".skills").hide();
		}
	});


});



