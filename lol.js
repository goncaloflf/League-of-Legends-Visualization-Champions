
function highlight(stuff) {
	var child = document.getElementById("champSelLeft").children;
	for(i=0 ; i < child.length ; i++){
		document.getElementById(child[i].id).className = ("");
	}

	document.getElementById(stuff.id).className=("highlight");
}

function clickChamps() {
	var child = document.getElementById("champSelLeft").children;
	for(i = 0; i < child.length ; i++){
		document.getElementById(child[i].id).className = "";
		document.getElementById(child[i].id).style.visibility = "visible";
	}
}