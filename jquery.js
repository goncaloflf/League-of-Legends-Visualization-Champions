$(document).ready(function(e) {   
	var championName = '';

	console.log("JQuery.js PING");

	$("li a").each(function() {
		
		championName = $(this).text();
		personPhoto = "champions/" + championName + "_Square_0.png";
		
		url = 'url(' + personPhoto + ')'
		$(this).css('background-image', url);
		$(this).css('background-position-y', '73px');
		
	  	
	});
 
});