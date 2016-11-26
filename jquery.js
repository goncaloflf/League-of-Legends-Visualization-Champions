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

	// A solução optima seria fazer toogle class, mas pelo
	// facto de estar tudo com id's as classes passam a não funcionar
	// por causa das hierarquias css
	$("#jungleCircle").click(function(){
		$("#jungleCircle").css("opacity","1");
		$( "#jungleCircle" ).siblings().css( "opacity", "0.6" );
	});

	$("#midCircle").click(function(){
		$("#midCircle").css("opacity","1");
		$( "#midCircle" ).siblings().css( "opacity", "0.6" );
	});
	$("#topCircle").click(function(){
		$("#topCircle").css("opacity","1");
		$( "#topCircle" ).siblings().css( "opacity", "0.6" );
	});
	$("#adcCircle").click(function(){
		$("#adcCircle").css("opacity","1");
		$( "#adcCircle" ).siblings().css( "opacity", "0.6" );
	});
	$("#supportCircle").click(function(){
		$("#supportCircle").css("opacity","1");
		$( "#supportCircle" ).siblings().css( "opacity", "0.6" );
	});

	$("#championsCircle").click(function(){
		$("#championsCircle").css("opacity","1");
		$( "#championsCircle" ).siblings().css( "opacity", "0.6" );
	});


 
});

