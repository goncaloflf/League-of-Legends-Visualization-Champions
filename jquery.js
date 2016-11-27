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
		$("#jungleCircle").addClass("highlight");
		$("#jungleCircle").removeClass("not-highlight");
		$( "#jungleCircle" ).siblings().removeClass("highlight");
		$("#championsCircle").addClass("highlight");
		$("#championsCircle").removeClass("not-highlight");
	});

	$("#midCircle").click(function(){
		$("#midCircle").addClass("highlight");
		$("#midCircle").removeClass("not-highlight");
		$( "#midCircle" ).siblings().removeClass("highlight");
		$("#championsCircle").addClass("highlight");
		$("#championsCircle").removeClass("not-highlight");
	});
	$("#topCircle").click(function(){
		$("#topCircle").addClass("highlight");
		$("#topCircle").removeClass("not-highlight");
		$( "#topCircle" ).siblings().removeClass("highlight");
		$("#championsCircle").addClass("highlight");
		$("#championsCircle").removeClass("not-highlight");
	});
	$("#adcCircle").click(function(){
		$("#adcCircle").addClass("highlight");
		$("#adcCircle").removeClass("not-highlight");
		$( "#adcCircle" ).siblings().removeClass("highlight");
		$("#championsCircle").addClass("highlight");
		$("#championsCircle").removeClass("not-highlight");
	});
	$("#supportCircle").click(function(){
		$("#supportCircle").addClass("highlight");
		$("#supportCircle").removeClass("not-highlight");
		$( "#supportCircle" ).siblings().removeClass("highlight");
		$("#championsCircle").addClass("highlight");
		$("#championsCircle").removeClass("not-highlight");

	});

	$("#championsCircle").click(function(){
		$("#championsCircle").addClass("highlight");
		$("#championsCircle").removeClass("not-highlight");
		$( "#championsCircle" ).siblings().removeClass("highlight");
		$( "#championsCircle" ).siblings().addClass("not-highlight");
		$("#supportCircle").css("top","60px");
		$("#supportCircle").css("left","75px");
		$("#adcCircle").css("top","-223px");
		$("#adcCircle").css("left","143px");
		$("#topCircle").css("top","-368px");
		$("#topCircle").css("left","32px");
		$("#midCircle").css("top","-171px");
		$("#midCircle").css("left","210px");
		$("#jungleCircle").css("top","-218px");
		$("#jungleCircle").css("left","253px");
	});


 
});

