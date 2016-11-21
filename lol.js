/*var dataset;
var currentChampion;
var diameter = 200;

var bubble = d3.layout.pack()
		.sort(null)
		.size([diameter,diameter])
		.padding(1.5);

d3.json("champions.json", function(data) {
	dataset = data;

	genFirst();
})

function genFirst(){
	var w = 361.6;
	var h = 312.5;

	var svg = d3.select("#champSelLeft")
				.append("svg")
				.attr("width",w)
				.attr("height", h);



}*/

function highlight(stuff) {
	var child = document.getElementById("champSelLeft").children;
	for(i=0 ; i < child.length ; i++){
		document.getElementById(child[i].id).className = ("");
	}

	document.getElementById(stuff.id).className=("highlight");
}