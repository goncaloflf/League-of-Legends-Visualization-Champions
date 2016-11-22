var top = ["Aatrox","Cho\'Gath","Darius","Dr. Mundo","Fiora","Gangplank","Garen","Gnar","Heimerdinger","Illaoi","Irelia","Jax","Jayce","Kayle","Kennen","Kled","Malphite","Maokai","Mordekaiser","Nasus","Olaf","Pantheon","Poppy","Quinn","Renekton","Riven","Rumble","Ryze","Shen","Singed","Sion","Swain","Teemo","Trundle","Tryndamere","Urgot","Vladimir","Wukong","Yorick"]
var jun = ["Amumu","Elise","Evelynn","Fiddlesticks","Gragas","Graves","Hecarim","Ivern","Jarvan IV","Kha\'Zix","Kindred","Lee Sin","Master Yi","Nidalee","Nocturne","Nunu","Rammus","Rek\'Sai","Rengar","Sejuani","Shaco","Shyvana","Skarner","Udyr","Vi","Volibear","Warwick","Xin Zhao","Zac"]
var mid = ["Ahri","Akali","Anivia","Aurelion Sol","Azir","Brand","Cassiopeia","Diana ","Ekko","Fizz","Galio","Karthus","Kassadin","Katarina","LeBlanc","Lissandra","Lux","Malzahar","Orianna","Syndra","Taliyah","Talon","Twisted Fate","Veigar","Vel\'Koz","Viktor","Xerath","Yasuo","Zed","Ziggs"]
var adc = ["Ashe","Caitlyn","Corki","Draven","Ezreal","Jhin","Jynx","Kalista","Kog\'Maw","Lucian","Miss Fortune","Sivir","Tristana","Twitch","Varus","Vayne"]
var sup = ["Alistar","Bard","Blitzcrank","Braum","Janna","Karma","Leona","Lulu","Morgana","Nami","Nautilus","Sona","Soraka","Tahm Kench","Taric","Thresh","Zilean","Zyra"]
var currentChamp;



function clickCircles(stuff) {
	var child = document.getElementById("champSelLeft").children;
	var champList = document.getElementById("championsList").children;

	for(i=0 ; i < child.length ; i++){
		document.getElementById(child[i].id).className = ("");
	}

	var auxList = checkClicked(stuff.id);


	for(i=0; i < champList.length ; i++) {
		champList[i].style.display = "inline";
		if(auxList.indexOf(champList[i].children[0].innerHTML) < 0){
			champList[i].style.display = "none";
		}
	}

	document.getElementById(stuff.id).className=("highlight");
}

function clickChamps() {
	var child = document.getElementById("champSelLeft").children;
	var champList = document.getElementById("championsList").children;

	for(i=0; i < champList.length ; i++) {
		champList[i].style.display = "inline";
	}

	for(i = 0; i < child.length ; i++){
		document.getElementById(child[i].id).className = "";
		document.getElementById(child[i].id).style.visibility = "visible";
	}
}

function highlightClickList(element) {
	var champion = element.innerHTML;
	var child = document.getElementById("champSelLeft").children;

	for(i=0 ; i < child.length ; i++){
		document.getElementById(child[i].id).className = ("");
	}

	if(adc.indexOf(champion) >= 0){
		document.getElementById("adcCircle").className=("highlight");
	} else if(sup.indexOf(champion) >= 0){
		document.getElementById("supportCircle").className=("highlight");
	} else if(mid.indexOf(champion) >= 0){
		document.getElementById("midCircle").className=("highlight");
	} else if(top.indexOf(champion) >= 0){
		document.getElementById("topCircle").className=("highlight");
	} else if(jun.indexOf(champion) >= 0){
		document.getElementById("jungleCircle").className=("highlight");
	}
}


function checkClicked(id){
	switch(id){
		case "supportCircle":
			return sup;

		case "topCircle":
			return top;

		case "midCircle":
			return mid;

		case "adcCircle":
			return adc;

		case "jungleCircle":
			return jun;

	}
}
