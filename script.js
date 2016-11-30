//You have served well, young function. Your job won't be for nothing. Long live and prosper.

//if someone reads this function: i'm really sorry for this code. i'm not proud of it myself.
function getMax(){
  var dealt = 0;
  var wards = 0;
  var farm = 0;
  var gold = 0;
  var kills = 0;
  var death = 0;
  var assist = 0;

  //watch out: bad code below this line!
  var tmpdealt = 0;
  var tmpassist = 0;
  var tmpwards = 0;
  var tmpfarm = 0;
  var tmpgold = 0;
  var tmpkills = 0;
  var tmpdeath = 0;
  for(i = 0; i < dataset.length ; i++) {

      tmpassist = dataset[i].AssistGame;
      if(typeof(tmpassist) == "string") { tmpassist = tmpassist.replace(',','.'); }
      if(parseFloat(tmpassist) > assist) {
        assist = parseFloat(tmpassist);
      }

      tmpdealt = dataset[i].DamageChampionGame;
      if(typeof(tmpdealt) == "string") { tmpdealt = tmpdealt.replace(',','.'); }
      if(parseFloat(tmpdealt) > dealt) {
        dealt = parseFloat(tmpdealt);
      }
      tmpwards = dataset[i].WardsPlacedGame;
      if(typeof(tmpwards) == "string") { tmpwards = tmpwards.replace(',','.'); }
      if(parseFloat(tmpwards) > wards) {
        wards = parseFloat(tmpwards);
      }
      tmpfarm = dataset[i].MinionGame;
      if(typeof(tmpfarm) == "string") { tmpfarm = tmpfarm.replace(',','.'); }
      if(parseFloat(tmpfarm) > farm) {
        farm = parseFloat(tmpfarm);
      }
      tmpkills = dataset[i].KillGame;
      if(typeof(tmpkills) == "string") { tmpkills = tmpkills.replace(',','.');  }
      if(parseFloat(tmpkills) > kills) {
        kills = parseFloat(tmpkills);
      }
      tmpgold = dataset[i].GoldSpentGame;
      if(typeof(tmpgold) == "string") { tmpgold = tmpgold.replace(',','.');}
      if(parseFloat(tmpgold) > gold) {
        gold = parseFloat(tmpgold);
      }
      tmpdeath = dataset[i].DeathGame;
      if(typeof(tmpdeath) == "string") { tmpdeath = tmpdeath.replace(',','.'); }
      if(parseFloat(tmpdeath) > death) {
        death = parseFloat(tmpdeath);
      }
  }
  console.log("dealt: " + dealt);
  console.log("wards: " + wards);
  console.log("farm: " + farm);
  console.log("gold: " + gold);
  console.log("kills: " + kills);
  console.log("death: " + death);
  console.log("assist: " + assist);

  return 0;
}