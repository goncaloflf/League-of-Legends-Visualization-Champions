var dataset;

d3.json("champions.json", function(data) {
	dataset = data;

	genFirst();
})

function genFirst(){
	var svg = d3.select("#champSelLeft");

	
}