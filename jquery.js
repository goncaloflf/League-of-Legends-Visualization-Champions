$(document).ready(function(e) {   
	var championName = '';

	console.log("JQuery.js PING");

	$("li a").each(function() {
		
		championName = $(this).text();
		championName = championName.replace('','')
		personPhoto = 'champions/' + championName + '_Square_0.png';
		console.log(personPhoto)
		$(this).css('background-image', 'url(' + personPhoto + ')');
		$(this).css('background-position-y', '73px');
		
	  	
	});
 
});