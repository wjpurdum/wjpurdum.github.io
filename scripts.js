$(document).ready(function() {
    
	$("#skills-link").click(function(){
    	$(".skills").fadeIn(3000).addClass("selected");
    	if ($(".contact").hasClass('selected') === true) {
    		$(".contact").();
    	}
});

	$("#contact-link").click(function() {
		$(".contact").fadeIn(3000);
	});


});


if ($(this).hasClass('') === false) {
        $("body").append($(this).prop("tagName") + " has a proper class defined <br/>");
    }


    $("#hide").click(function(){
    $("p").hide();
});
