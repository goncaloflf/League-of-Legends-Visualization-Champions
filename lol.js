var topl = ["Aatrox","Cho\'Gath","Darius","Dr. Mundo","Fiora","Gangplank","Garen","Gnar","Heimerdinger","Illaoi","Irelia","Jax","Jayce","Kayle","Kennen","Kled","Maokai","Mordekaiser","Nasus","Olaf","Pantheon","Poppy","Quinn","Renekton","Riven","Rumble","Ryze","Shen","Singed","Sion","Swain","Teemo","Trundle","Tryndamere","Urgot","Vladimir","Wukong","Yorick"]
var jun = ["Amumu","Elise","Evelynn","Fiddlesticks","Gragas","Graves","Hecarim","Ivern","Jarvan IV","Kha\'Zix","Kindred","Lee Sin","Master Yi","Nidalee","Nocturne","Nunu","Rammus","Rek\'Sai","Rengar","Sejuani","Shaco","Shyvana","Skarner","Udyr","Vi","Volibear","Warwick","Xin Zhao","Zac"]
var mid = ["Ahri","Akali","Annie","Anivia","Aurelion Sol","Azir","Brand","Cassiopeia","Diana","Ekko","Fizz","Galio","Karthus","Kassadin","Katarina","LeBlanc","Lissandra","Lux","Malzahar","Orianna","Syndra","Taliyah","Talon","Twisted Fate","Veigar","Vel\'Koz","Viktor","Xerath","Yasuo","Zed","Ziggs"]
var adc = ["Ashe","Caitlyn","Corki","Draven","Ezreal","Jhin","Jinx","Kalista","Kog\'Maw","Lucian","Miss Fortune","Sivir","Tristana","Twitch","Varus","Vayne"]
var sup = ["Alistar","Bard","Blitzcrank","Braum","Janna","Karma","Leona","Lulu","Morgana","Nami","Nautilus","Sona","Soraka","Tahm Kench","Taric","Thresh","Zilean","Zyra"]
var currentChamp = "";
var dataset;
var detData;
var barChartOrder = "Win Rate";
var barChartAsc = false;
var displayTop;
var displayMid;
var displayAdc;
var displaySup;
var displayJun;

var firstLane = "SUPPORT";

const MAX_DEALT = 29000.321167883;
const MAX_WARDS = 27.114444278;
const MAX_FARM = 221.382937212;
const MAX_GOLD = 12493.970097955;
const MAX_KILLS = 7.987258141;
const MAX_DEATH = 7.018248175;
const MAX_ASSIST = 13.951847134;
const MAX_WINRATE = 0.567102138;

const MIN_DEALT = 4170.750364396;
const MIN_WARDS = 8.203050524;
const MIN_FARM = 13.684585987;
const MIN_GOLD = 7616.418179755;
const MIN_KILLS = 0.634531326;
const MIN_DEATH = 3.728403459;
const MIN_ASSIST = 4.074815595;
const MIN_WINRATE = 0.300000000;

var colorscale = d3.scaleOrdinal(d3.schemeSet1);
var w = 180, h = 180;

d3.json("championstotal.json", function(data){
	dataset = data.data;
  sanityToggles();
  orderBarChart();
  $("#dsc").attr("disabled",true);
  $("#asc").attr("disabled",false);
  $("#cmpDiv").hide();
});

d3.json("champions.json", function(data){ 
  detData = data.data;
});

function sanityToggles(){
  displayTop = document.getElementById("topCheckBox").checked;
  displayMid = document.getElementById("midCheckBox").checked;
  displayAdc = document.getElementById("adcCheckBox").checked;
  displaySup = document.getElementById("supCheckBox").checked;
  displayJun = document.getElementById("junCheckBox").checked;
}



//------------------------------- SCREEN 1 ------------------------------------
function clickCircles(stuff) {
	var child = document.getElementById("champSelLeft").children;
	var champList = document.getElementById("championsList").children;

	clearChampList();
	document.getElementById("lanePortrait").src = "champions/blank.gif"
	document.getElementById("championPortrait").src = "champions/blank.gif"
	currentChamp = "";
  document.getElementById("starplot").innerHTML = "";
  document.getElementById("titleTile2").innerHTML = "";

	for(i=0 ; i < child.length ; i++){
		document.getElementById(child[i].id).className = ("not-highlight");
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

	document.getElementById("titleChamp").innerHTML = "Champions";
	document.getElementById("lanePortrait").src = "champions/blank.gif"
	document.getElementById("championPortrait").src = "champions/blank.gif"
  document.getElementById("starplot").innerHTML = "";
  document.getElementById("titleTile2").innerHTML = "";

	clearChampList();

	for(i=0; i < champList.length ; i++) {
		champList[i].style.display = "inline";
	}

	for(i = 0; i < child.length ; i++){
		document.getElementById(child[i].id).className = "";
		document.getElementById(child[i].id).style.visibility = "visible";
	}

  $("#cmpDiv").hide();
}

function highlightClickList(element) {
	var champion = element.innerHTML;
	var child = document.getElementById("champSelLeft").children;

	for(i=0 ; i < child.length ; i++){
		document.getElementById(child[i].id).className = ("not-highlight");
	}

	clearChampList();

	if(adc.indexOf(champion) >= 0){
		$("#adcCircle").addClass("highlight");
		document.getElementById("lanePortrait").src = "images/adc.jpg"
    $("#adcCircle").removeClass("not-highlight");
    $("#championsCircle").addClass("highlight");
    $("#championsCircle").removeClass("not-highlight");
    moveCircles();        //console.log(champObject.ChampionName)

	} else if(sup.indexOf(champion) >= 0){
    $("#supportCircle").addClass("highlight");
		document.getElementById("lanePortrait").src = "images/sup.jpg"
    $("#supportCircle").removeClass("not-highlight");
    $("#championsCircle").addClass("highlight");
    $("#championsCircle").removeClass("not-highlight");
    moveCircles();
	} else if(mid.indexOf(champion) >= 0){
    $("#midCircle").addClass("highlight");
		document.getElementById("lanePortrait").src = "images/mid.jpg"
    $("#midCircle").removeClass("not-highlight");
    $("#championsCircle").addClass("highlight");
    $("#championsCircle").removeClass("not-highlight");
    moveCircles();
	} else if(topl.indexOf(champion) >= 0){
    $("#topCircle").addClass("highlight");
		document.getElementById("lanePortrait").src = "images/top.jpg"
    $("#topCircle").removeClass("not-highlight");
    $("#championsCircle").addClass("highlight");
    $("#championsCircle").removeClass("not-highlight");
    moveCircles();
	} else if(jun.indexOf(champion) >= 0){
    $("#jungleCircle").addClass("highlight");
		document.getElementById("lanePortrait").src = "images/jun.jpg"
    $("#jungleCircle").removeClass("not-highlight");
    $("#championsCircle").addClass("highlight");
    $("#championsCircle").removeClass("not-highlight");
    moveCircles();
	}

	currentChamp = champion;
	document.getElementById("championPortrait").src = "champions/" + champion + "_Square_0.png";
	element.className = ("selected");
  document.getElementById("titleTile2").innerHTML = champion;

  disableButtons();

  $("#cmpDiv").show();


  $("#compareTitle").html(currentChamp); 

  firstLane = "Overall";
  RadarChart.draw("#starplot",false);
  RadarChart.draw("#starplotCompare",true);
}

function moveCircles(){
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
}

function checkClicked(id){
	switch(id){
		case "supportCircle":
			document.getElementById("titleChamp").innerHTML = "Support";
			return sup;

		case "topCircle":
			document.getElementById("titleChamp").innerHTML = "Top";
			return topl;

		case "midCircle":
			document.getElementById("titleChamp").innerHTML = "Mid";
			return mid;

		case "adcCircle":
			document.getElementById("titleChamp").innerHTML = "ADC";
			return adc;

		case "jungleCircle":
			document.getElementById("titleChamp").innerHTML = "Jungle";
			return jun;
	}
}

function clearChampList() {
	var champList = document.getElementById("championsList").children;
	for(i = 0; i < champList.length ; i++){
		champList[i].children[0].className = ("");
	}
}



//------------------------- SCREEN 2 -----------------------------------
function formatMe(d){
  var toReturn = 0;
  switch(d.axis){
    case ("Minions"):
      toReturn = d.value*MAX_FARM;
      break;
    case ("Gold Earned"):
      toReturn = d.value*MAX_GOLD;
      break;
    case ("Kills"):
      toReturn = d.value*MAX_KILLS;
      break;
    case ("Deaths"):
      toReturn = d.value*MAX_DEATH;
      break;
    case ("Wards"):
      toReturn = d.value*MAX_WARDS;
      break;
    case ("Damage Dealt"):
      toReturn = d.value*MAX_DEALT;
      break;            
    case ("Assists"):
      toReturn = d.value*MAX_ASSIST;
      break;
    case ("Win Rate"):
      toReturn = 100*(d.value*0.26 + 0.3);
      return "" + (toReturn.toFixed(2)) + "%";
  }
  return toReturn.toFixed(2)
}

function treatWinRate(wr){
  return (wr - 0.25) / 0.31;
}

var RadarChart = {
  draw: function(id,cmp){

    var champObject;

    if(!cmp || firstLane == "Overall"){
      for(i = 0; i < dataset.length; i++){
        if(dataset[i].ChampionName == currentChamp){
          champObject = dataset[i];
        }
      }
    } else if(cmp) {
      for(j = 0; j < detData.length; j++){
        if(detData[j].ChampionName == currentChamp){
          if(detData[j].Lane.toLowerCase() == firstLane.toLowerCase()){
            champObject = detData[j];
        } else if(detData[j].Lane = "BOTTOM" && detData[j].Role.toLowerCase() == firstLane.toLowerCase()){
            champObject = detData[j];
        }
      }
    }
  }

    var d = [
          [
            {axis:"Assists",value: parseFloat(champObject.AssistGame.replace(',','.')) / MAX_ASSIST},
            {axis:"Wards",value: parseFloat(champObject.WardsPlacedGame.replace(',','.')) / MAX_WARDS},
            {axis:"Minions",value: parseFloat(champObject.MinionGame.replace(',','.')) / MAX_FARM},
            {axis:"Gold Earned",value: parseFloat(champObject.GoldSpentGame.replace(',','.')) / MAX_GOLD},
            {axis:"Kills",value: parseFloat(champObject.KillGame.replace(',','.')) / MAX_KILLS},
            {axis:"Deaths",value: parseFloat(champObject.DeathGame.replace(',','.')) / MAX_DEATH},
            {axis:"Damage Dealt",value: parseFloat(champObject.DamageChampionGame.replace(',','.')) / MAX_DEALT},
            {axis:"Win Rate",value: treatWinRate(parseFloat(champObject.WinGame.replace(',','.'))) /*/ MAX_WINRATE*/}
          ]
        ];



  var cfg = {
     radius: 5,
     w: 180,
     h: 180,
     factor: 1,
     factorLegend: .85,
     levels: 3,
     maxValue: 0,
     radians: 2 * Math.PI,
     opacityArea: 0.5,
     ToRight: 5,
     TranslateX: 80,
     TranslateY: 30,
     ExtraWidthX: 300,
     ExtraWidthY: 100,
     color: d3.scaleOrdinal(d3.schemeSet1)
    };

    if('undefined' !== typeof options){
      for(var i in options){
        if('undefined' !== typeof options[i]){
          cfg[i] = options[i];
        }
      }
    }
    cfg.maxValue = Math.max(cfg.maxValue, d3.max(d, function(i){return d3.max(i.map(function(o){return o.value;}))}));
    var allAxis = (d[0].map(function(i, j){return i.axis}));
    var total = allAxis.length;
    var radius = cfg.factor*Math.min(cfg.w/2, cfg.h/2);
    var Format = d3.format('%');
    d3.select(id).select("svg").remove();

    var g = d3.select(id)
            .append("svg")
            .attr("width", cfg.w+cfg.ExtraWidthX)
            .attr("height", cfg.h+cfg.ExtraWidthY)
            .append("g")
            .attr("transform", "translate(" + cfg.TranslateX + "," + cfg.TranslateY + ")");
            ;


    //Circular segments
    for(var j=0; j<cfg.levels-1; j++){
      var levelFactor = cfg.factor*radius*((j+1)/cfg.levels);
      g.selectAll(".levels")
       .data(allAxis)
       .enter()
       .append("svg:line")
       .attr("x1", function(d, i){return levelFactor*(1-cfg.factor*Math.sin(i*cfg.radians/total));})
       .attr("y1", function(d, i){return levelFactor*(1-cfg.factor*Math.cos(i*cfg.radians/total));})
       .attr("x2", function(d, i){return levelFactor*(1-cfg.factor*Math.sin((i+1)*cfg.radians/total));})
       .attr("y2", function(d, i){return levelFactor*(1-cfg.factor*Math.cos((i+1)*cfg.radians/total));})
       .attr("class", "line")
       .style("stroke", "grey")
       .style("stroke-opacity", "0.75")
       .style("stroke-width", "0.3px")
       .attr("transform", "translate(" + (cfg.w/2-levelFactor) + ", " + (cfg.h/2-levelFactor) + ")");
    }

    series = 0;

    var axis = g.selectAll(".axis")
            .data(allAxis)
            .enter()
            .append("g")
            .attr("class", "axis");

    axis.append("line")
        .attr("x1", cfg.w/2)
        .attr("y1", cfg.h/2)
        .attr("x2", function(d, i){return cfg.w/2*(1-cfg.factor*Math.sin(i*cfg.radians/total));})
        .attr("y2", function(d, i){return cfg.h/2*(1-cfg.factor*Math.cos(i*cfg.radians/total));})
        .attr("class", "line")
        .style("stroke", "grey")
        .style("stroke-width", "1px");

    axis.append("text")
        .attr("class", "legend")
        .text(function(d){return d})
        .style("font-family", "sans-serif")
        .style("font-size", "11px")
        .attr("text-anchor", "middle")
        .attr("dy", "1.5em")
        .attr("transform", function(d, i){return "translate(0, -10)"})
        .attr("x", function(d, i){return cfg.w/2*(1-cfg.factorLegend*Math.sin(i*cfg.radians/total))-60*Math.sin(i*cfg.radians/total);})
        .attr("y", function(d, i){return cfg.h/2*(1-Math.cos(i*cfg.radians/total))-20*Math.cos(i*cfg.radians/total);});


    d.forEach(function(y, x){
      dataValues = [];
      g.selectAll(".nodes")
        .data(y, function(j, i){
          dataValues.push([
            cfg.w/2*(1-(parseFloat(Math.max(j.value, 0))/cfg.maxValue)*cfg.factor*Math.sin(i*cfg.radians/total)), 
            cfg.h/2*(1-(parseFloat(Math.max(j.value, 0))/cfg.maxValue)*cfg.factor*Math.cos(i*cfg.radians/total))
          ]);
        });
      dataValues.push(dataValues[0]);
      g.selectAll(".area")
                     .data([dataValues])
                     .enter()
                     .append("polygon")
                     .attr("class", "radar-chart-serie"+series)
                     .style("stroke-width", "2px")
                     .style("stroke", cfg.color(series))
                     .style("fill", function(j, i){return cfg.color(series);})
                     .style("fill-opacity", cfg.opacityArea)
                     .attr("points",function(d) {
                         var str="";
                         for(var pti=0;pti<d.length;pti++){
                             str=str+d[pti][0]+","+d[pti][1]+" ";
                         }
                         return str;
                      })

                     .on('mouseover', function (d){
                                        z = "polygon."+d3.select(this).attr("class");
                                        g.selectAll("polygon")
                                         .transition(200)
                                         .style("fill-opacity", 0.1); 
                                        g.selectAll(z)
                                         .transition(200)
                                         .style("fill-opacity", .7);
                                      })
                     .on('mouseout', function(){
                                        g.selectAll("polygon")
                                         .transition(200)
                                         .style("fill-opacity", cfg.opacityArea);
                     });
      series++;
    });
    series=0;

    var aux;
    d.forEach(function(y, x){
      g.selectAll(".nodes")
        .data(y).enter()
        .append("svg:circle")
        .attr("class", function(d){
          if($(this).parent().parent().parent().attr("id") == "starplotCompare"){
            return "radar-chart-serie"+series + " spCompare";
          } else if($(this).parent().parent().parent().attr("id") == "starplot"){
            return "radar-chart-serie"+series + " spNorm";
          }
        })
        .attr('r', cfg.radius)
        .attr("alt", function(j){return Math.max(j.value, 0)})
        .attr("cx", function(j, i){
          dataValues.push([
            cfg.w/2*(1-(parseFloat(Math.max(j.value, 0))/cfg.maxValue)*cfg.factor*Math.sin(i*cfg.radians/total)), 
            cfg.h/2*(1-(parseFloat(Math.max(j.value, 0))/cfg.maxValue)*cfg.factor*Math.cos(i*cfg.radians/total))
        ]);
        return cfg.w/2*(1-(Math.max(j.value, 0)/cfg.maxValue)*cfg.factor*Math.sin(i*cfg.radians/total));
        })
        .attr("cy", function(j, i){
          return cfg.h/2*(1-(Math.max(j.value, 0)/cfg.maxValue)*cfg.factor*Math.cos(i*cfg.radians/total));
        })
        .attr("data-id", function(j){return j.axis})
        .style("fill", cfg.color(series)).style("fill-opacity", .9)
        .on('mouseover', function (d,j){

                    //HERE: onhover bug with the 2 starplots

                    /*if($(this).attr("class").includes("spCompare")){
                      newX =  parseFloat(d3.select(this).attr('cx')) - 10;
                    } else if($(this).attr("class").includes("spNorm")){
                      newX =  parseFloat(d3.select(this).attr('cx')) - 300;
                    } else{
                      console.log("Something went wrong!");
                      newX =  parseFloat(d3.select(this).attr('cx')) - 10;
                    }*/
                    
                    newX =  parseFloat(d3.select(this).attr('cx')) - 10;
                    newY =  parseFloat(d3.select(this).attr('cy')) - 5;

                    tooltip
                        .attr('x', newX)
                        .attr('y', newY)
                        .text(formatMe(d))
                        .transition(200)
                        .style('opacity', 1);


                    z = "polygon."+d3.select(this).attr("class");
                    g.selectAll("polygon")
                        .transition(200)
                        .style("fill-opacity", 0.1); 
                    g.selectAll(z)
                        .transition(200)
                        .style("fill-opacity", .7);
                  })
        .on('mouseout', function(){
                    tooltip
                        .transition(200)
                        .style('opacity', 0);
                    g.selectAll("polygon")
                        .transition(200)
                        .style("fill-opacity", cfg.opacityArea);
                  });

      series++;
    });
    //Tooltip
    tooltip = g.append('text')
               .style('background-color', '#ff0000')
               .style('opacity', 0)
               .style('font-family', 'sans-serif')
               .style('font-size', '20px')
               .style('text-shadow','2px 0px 0px rgb(255, 255, 255), -2px 0px 0px rgb(255, 255, 255), 0px 2px 0px rgb(255, 255, 255), 0px -2px 0px rgb(255, 255, 255), 1px 1px rgb(255, 255, 255), -1px -1px 0px rgb(255, 255, 255), 1px -1px 0px rgb(255, 255, 255), -1px 1px 0px rgb(255, 255, 255)')
               ;

  }
};

//------------------------- SCREEN 3 -----------------------------------



//------------------------- SCREENS 4 & 5 -----------------------------------

function changeBarChart(element) {
  var tmpColor;

  //Do nothing if clicked on the current button
  if(element.innerHTML == barChartOrder){
      return 0;
    } else {
      barChartOrder = element.innerHTML;
      $("#barChart").empty();
      $(element).addClass("barChartHighlight");
      $(element).siblings().removeClass("barChartHighlight");
      barchart();
    }

    updateHallFame();
}


function barchart() {
  var notDrawn = 0;
  var drawn;

  var svg = d3.select("#barChart")
      .append("svg")
      .attr("width", 345)
      .attr("height", 300);

  var xScale = d3.scaleLinear()
                  .domain([0,1])
                  .range([0,300]);

  var hScale = d3.scaleLinear()
                  .domain([0,dataset.length])
                  .range([0,300]);

  var yaxis = d3.axisLeft()
                .scale(hScale)
                .tickFormat(function(d) {return dataset[d].ChampionName;});

  var xaxis = d3.axisTop()
                .scale(xScale.domain([0,100]));

  var div = d3.select("body").append("div")
              .attr("class","tooltip")
              .style("opacity",0);


  svg.selectAll("rect")
      .data(dataset)
      .enter().append("rect")
      .attr("text",function(d){return d.ChampionName;})
      .attr("width", function(d) { 
        switch(barChartOrder){
          case "Win Rate":
            return xScale(100*(parseFloat(d.WinGame.replace(',','.'))));
          case "Damage Dealt":
            return xScale(100*parseFloat(d.DamageChampionGame.replace(',','.')) / MAX_DEALT);          
          case "Deaths":
            return xScale(100* parseFloat(d.DeathGame.replace(',','.')) / MAX_DEATH);          
          case "Assists":
            return xScale(100* parseFloat(d.AssistGame.replace(',','.')) / MAX_ASSIST);
          case "Minions":
            return xScale(100* parseFloat(d.MinionGame.replace(',','.')) / MAX_FARM);
          case "Gold Earned":
            return xScale(100* parseFloat(d.GoldSpentGame.replace(',','.')) / MAX_GOLD);
          case "Kills":
            return xScale(100* parseFloat(d.KillGame.replace(',','.')) / MAX_KILLS);
          case "Wards":
            return xScale(100* parseFloat(d.WardsPlacedGame.replace(',','.')) / MAX_WARDS);

          }
        })
      .attr("height", function(d){
        if((!displayTop && topl.indexOf(d.ChampionName) >= 0) || 
            (!displayMid && mid.indexOf(d.ChampionName) >= 0) ||
            (!displayAdc && adc.indexOf(d.ChampionName) >= 0) || 
            (!displaySup && sup.indexOf(d.ChampionName) >= 0) ||
            (!displayJun && jun.indexOf(d.ChampionName) >= 0)){
          d3.select(this).remove();
          return 0;
        } else {
          return 20;
        }})
      .attr("fill",function(d){
        var champAux = d.ChampionName;
        if(topl.indexOf(champAux) >= 0){
          return "#8b7426";
        } else if(mid.indexOf(champAux) >= 0){
          return "#2c408b";
        } else if(adc.indexOf(champAux) >= 0){
          return "#000000";
        } else if(jun.indexOf(champAux) >= 0){
          return "#ffaa00";
        } else if(sup.indexOf(champAux) >= 0){
          return "#0091d3";
        }
      })
      .attr("x", 10)
      .on("mouseover",function(d){
        tmpColor = d3.select(this).attr("fill");
        d3.select(this).attr("fill","rgb(160, 160, 160)");
        //d3.select(this).attr("height",40);
        div.transition().duration(100).style("opacity",1.0);
        div.html(formatTooltip(d))
          .style("left", (d3.event.pageX) + "px")   
          .style("top", (d3.event.pageY - 30) + "px");})
      .on("mouseout",function(){
        //d3.select(this).attr("height",20);
        d3.select(this).attr("fill",tmpColor);
        div.transition().duration(100).style("opacity",0.0);
      });

  svg.append("g")
      .attr("transform","translate(0,20)")
      .text(function() { return barChartOrder;});

  svg.selectAll("rect")
      .sort(function(a,b) { 
        switch(barChartOrder){
          case "Win Rate":
            if(barChartAsc){
              return d3.ascending((parseFloat(a.WinGame.replace(',','.'))), (parseFloat(b.WinGame.replace(',','.'))));
            } else {
              return d3.descending((parseFloat(a.WinGame.replace(',','.'))), (parseFloat(b.WinGame.replace(',','.'))));
            }
          case "Damage Dealt":
            if(barChartAsc){
              return d3.ascending((parseFloat(a.DamageChampionGame.replace(',','.'))),(parseFloat(b.DamageChampionGame.replace(',','.'))));          
            } else {
              return d3.descending((parseFloat(a.DamageChampionGame.replace(',','.'))),(parseFloat(b.DamageChampionGame.replace(',','.'))));          
            }
          case "Deaths":
            if(barChartAsc){
              return d3.ascending((parseFloat(a.DeathGame.replace(',','.'))),(parseFloat(b.DeathGame.replace(',','.'))));          
            } else {
              return d3.descending((parseFloat(a.DeathGame.replace(',','.'))),(parseFloat(b.DeathGame.replace(',','.'))));          
            }
          case "Assists":
            if(barChartAsc){
              return d3.ascending((parseFloat(a.AssistGame.replace(',','.'))),(parseFloat(b.AssistGame.replace(',','.'))));          
            } else {
              return d3.descending((parseFloat(a.AssistGame.replace(',','.'))),(parseFloat(b.AssistGame.replace(',','.'))));          
            }
          case "Minions":
            if(barChartAsc){
              return d3.ascending((parseFloat(a.MinionGame.replace(',','.'))),(parseFloat(b.MinionGame.replace(',','.'))));          
            } else {
              return d3.descending((parseFloat(a.MinionGame.replace(',','.'))),(parseFloat(b.MinionGame.replace(',','.'))));          
            }
          case "Gold Earned":
            if(barChartAsc) {
              return d3.ascending((parseFloat(a.GoldSpentGame.replace(',','.'))),(parseFloat(b.GoldSpentGame.replace(',','.'))));          
            } else {
              return d3.descending((parseFloat(a.GoldSpentGame.replace(',','.'))),(parseFloat(b.GoldSpentGame.replace(',','.'))));          
            }
          case "Kills":
            if(barChartAsc){
              return d3.ascending((parseFloat(a.KillGame.replace(',','.'))),(parseFloat(b.KillGame.replace(',','.'))));          
            } else {
              return d3.descending((parseFloat(a.KillGame.replace(',','.'))),(parseFloat(b.KillGame.replace(',','.'))));          
            }
          case "Wards":
            if(barChartAsc){
              return d3.ascending((parseFloat(a.WardsPlacedGame.replace(',','.'))),(parseFloat(b.WardsPlacedGame.replace(',','.'))));          
            } else {
              return d3.descending((parseFloat(a.WardsPlacedGame.replace(',','.'))),(parseFloat(b.WardsPlacedGame.replace(',','.'))));          
            }
          }
        })
      .transition().duration(500)
      .attr("y", function(d,i) {return 6 + i*21});

      var barLen = $("#barChart").find("rect").length * 21;
      svg.attr("height", barLen);
}

function formatTooltip(d) { 
        switch(barChartOrder){
          case "Win Rate":
            return "" + d.ChampionName + " - " + (100*(parseFloat(d.WinGame.replace(',','.')))).toFixed(2) + "%";
          case "Damage Dealt":
            return "" + d.ChampionName + " - " + (parseFloat(d.DamageChampionGame.replace(',','.'))).toFixed(2);          
          case "Deaths":
            return "" + d.ChampionName + " - " + (parseFloat(d.DeathGame.replace(',','.'))).toFixed(2);          
          case "Assists":
            return "" + d.ChampionName + " - " + (parseFloat(d.AssistGame.replace(',','.'))).toFixed(2);
          case "Minions":
            return "" + d.ChampionName + " - " + (parseFloat(d.MinionGame.replace(',','.'))).toFixed(2);
          case "Gold Earned":
            return "" + d.ChampionName + " - " + (parseFloat(d.GoldSpentGame.replace(',','.'))).toFixed(2);
          case "Kills":
            return "" + d.ChampionName + " - " + (parseFloat(d.KillGame.replace(',','.'))).toFixed(2);
          case "Wards":
            return "" + d.ChampionName + " - " + (parseFloat(d.WardsPlacedGame.replace(',','.'))).toFixed(2);
      }
}

function changeOrder(element) {
  if((element.getAttribute("name") == "asc" && barChartAsc) || (element.getAttribute("name") == "dsc" && !barChartAsc)) {return 0;}
  barChartAsc = !barChartAsc;
  $("#barChart").empty();
  barchart();
  updateHallFame();

  $(element).attr("disabled",true);
  $(element).siblings().attr("disabled",false);


}

function orderBarChart() {


  var inputList = $("#barChartSelector").find("input");
  for( i=0 ; i< inputList.length ; i++){
    if(inputList[i].id == "midCheckBox"){
      displayMid = inputList[i].checked;
    } else if(inputList[i].id == "adcCheckBox"){
      displayAdc = inputList[i].checked;
    } else if(inputList[i].id == "topCheckBox"){
      displayTop = inputList[i].checked;
    } else if(inputList[i].id == "supCheckBox"){
      displaySup = inputList[i].checked;
    } else if(inputList[i].id == "junCheckBox"){
      displayJun = inputList[i].checked;
    }
  }
  $("#barChart").empty();
  barchart();
  updateHallFame();
}

function updateHallFame(){
  var rectList = $("#barChart").find("rect");
  if(rectList.length == 0){
    $("#medalone").attr("src","champions/blank.gif");
    $("#medaltwo").attr("src","champions/blank.gif");
    $("#medalthree").attr("src","champions/blank.gif");

    $("#firstImage").attr("src","champions/blank.gif");
    $("#secondImage").attr("src","champions/blank.gif");
    $("#thirdImage").attr("src","champions/blank.gif");

    $("#firstLegend").html("");
    $("#secondLegend").html("");
    $("#thirdLegend").html("");
    return 0; 
  }

  var first = rectList[0];
  var second = rectList[1];
  var third = rectList[2];

  if((!barChartAsc && barChartOrder != "Deaths") || (barChartAsc && barChartOrder == "Deaths")){
    $("#hallFame").html("Hall of Fame");

    $("#medalone").attr("src","images/firstplace.png");
    $("#medaltwo").attr("src","images/secondplace.png");
    $("#medalthree").attr("src","images/thirdplace.png");
  } else {
    $("#hallFame").html("Hall of Infame");

    $("#medalone").attr("src","medals/skull.png");
    $("#medaltwo").attr("src","medals/skull.png");
    $("#medalthree").attr("src","medals/skull.png");
  }


  for(j = 0; j < rectList.length; j++){
    if(rectList[j].getAttribute("y") < first.getAttribute("y")){
      first = rectList[j];
    } else if(rectList[j].getAttribute("y") < second.getAttribute("y") && rectList[j].getAttribute("y") > first.getAttribute("y")){
      second = rectList[j];
    } else if(rectList[j].getAttribute("y") < second.getAttribute("y") && rectList[j].getAttribute("y") > second.getAttribute("y") && rectList[j].getAttribute("y") > first.getAttribute("y")){
      third = rectList[j];
    }
  }

  $("#hallDet").html("<u><b>" + barChartOrder + "</b></u>");

  $("#firstImage").attr("src","champions/" + first.getAttribute("text") + "_Square_0.png")  ;
  $("#secondImage").attr("src","champions/" + second.getAttribute("text") + "_Square_0.png");
  $("#thirdImage").attr("src","champions/" + third.getAttribute("text") + "_Square_0.png");

  $("#firstLegend").html(first.getAttribute("text"));
  $("#secondLegend").html(second.getAttribute("text"));
  $("#thirdLegend").html(third.getAttribute("text"));
}

// ------------------------------------------- SCREEN 3 ---------------------------------------------------------

function seeChampionLanes(champname){
  var laneList = [];
  for(i = 0; i < detData.length; i++){
    if(detData[i].ChampionName == champname){
      if(detData[i].Lane == "BOTTOM"){
        laneList.push(detData[i].Role);
      } else {
        laneList.push(detData[i].Lane);
      }
    }
  }
  return laneList;
}

function changePrimeLane(btn){

  firstLane = btn.innerHTML;

  $("#starplotCompare").empty();


  d3.json("champions.json", function(data){ 
    detData = data.data;
  });
  
  RadarChart.draw("#starplotCompare",true);
  return 0;
}


function disableButtons(){
  var auxList = seeChampionLanes(currentChamp);

  $("#AllLaneButton").attr("disabled",false);
  $("#TopLaneButton").attr("disabled",false);
  $("#JunLaneButton").attr("disabled",false);
  $("#MidLaneButton").attr("disabled",false);
  $("#AdcLaneButton").attr("disabled",false);
  $("#SupLaneButton").attr("disabled",false);

  if(auxList.indexOf("TOP") < 0){
    $("#TopLaneButton").attr("disabled",true);
  }
  if(auxList.indexOf("JUNGLE") < 0){
    $("#JunLaneButton").attr("disabled",true);
  }
  if(auxList.indexOf("MID") < 0){
    $("#MidLaneButton").attr("disabled",true);
  }
  if(auxList.indexOf("ADC") < 0){
    $("#AdcLaneButton").attr("disabled",true);
  }
  if(auxList.indexOf("SUPPORT") < 0){
    $("#SupLaneButton").attr("disabled",true);
  } 
}

// ------------------------------------------- SCREEN 6 -------------------------------------------------------

