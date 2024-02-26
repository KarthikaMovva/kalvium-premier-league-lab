//Progression 1 - create a Manager array and return it
let managerName = "Alex Ferguson";
let managerAge = 78;
let currentTeam = "Manchester FC";
let trophiesWon = 27;

//Write your function here
function createManager(managerName,managerAge,currentTeam,trophiesWon){
 var array=[managerName,managerAge,currentTeam,trophiesWon]
 return array;
}
// Don't edit the following code
try {
  var manager = createManager(
    managerName,
    managerAge,
    currentTeam,
    trophiesWon
  );
} catch (e) {
  // do nothing - expected error
}

//Progression 2 - create a formation object and return it
var formation = [4, 4, 3];

//write your function here
function createFormation(formation){
if(formation.length===0){
  return null}
  var player={
    defender: formation[0],
    midfield: formation[1],
    forward: formation[2]
  }
return player
}
// Dont edit the following code

try {
  var formationObject = createFormation(formation);
} catch (e) {
  //do nothing
}

//Progression 3 - Filter players that debuted in ___ year

function filterByDebut(year){
var debutyear=players.filter(p=>p.debut===year)
return debutyear
}

//Progression 4 - Filter players that play at the position _______

function filterByPosition(position){
var positions=players.filter(q=>q.position===position)
return positions
}

//Progression 5 - Filter players that have won ______ award

function filterByAward(awardName){
let array=[]
for(let h=0; h<players.length; h++){
  for(let k=0; k<players[h].awards.length; k++){
    if(players[h].awards[k].name===awardName){
      array.push(players[h])
    }
  }
}
return array
}

//Progression 6 - Filter players that won ______ award ____ times

function filterByAwardxTimes(awardName,noOfTimes){
let k=[]
let m=0;
let ans;
for(let i=0; i<players.length; i++){
  for(ans=0; ans<players[i].awards.length; ans++){
    if(players[i].awards[ans].name===awardName){
      m++
    }
  }
  if(m==noOfTimes){
    k.push(players[i])
  }
  m=0;
}
return k;
}


//Progression 7 - Filter players that won ______ award and belong to ______ country

function filterByAwardxCountry(awardName,country){
var info=filterByAward(awardName)
var getinfo=info.filter(r=>r.country===country)
return getinfo
}

//Progression 8 - Filter players that won atleast ______ awards, belong to ______ team and are younger than ____

function filterByNoOfAwardsxTeamxAge(noOfAwards,team,age){
var data=players.filter(m=>(m.age<age && m.team===team && m.awards.length>=noOfAwards))
return data
}

//Progression 9 - Sort players in descending order of their age

function SortByAge(){
for(let j=0; j<players.length; j++){
  for(let m=j+1; m<players.length; m++){
    if(players[j].age<players[m].age){
      let each=players[j]
      players[j]=players[m]
      players[m]=each
    }
  }
}
}

//Progression 10 - Sort players beloging to _____ team in descending order of awards won

function FilterByTeamxSortByNoOfAwards(team){
let number=0;
let array=[];
for(let r=0; r<players.length; r++){
  if(players[r].team===team){
    array[number++]=players[r]
  }
}
for(let e=0; e<array.length; e++){
  for(let f=e+1; f<array.length; f++){
    if(array[e].awards.length<array[f].awards.length){
      let play=array[e];
      array[e]=array[f];
      array[f]=play
    }
  }
}
return array
}

function find(m,n){
  let c=0;
  if(m.name>n.name){
    c=1
  }else if(n.name>m.name){
    c=-1
  }else{
    c=0
  }
}

//Challenge 1 - Sort players that have won _______ award _____ times and belong to _______ country in alphabetical order of their names

function SortByNamexAwardxTimes(awardName,noOfTimes,country){
let data1=filterByAwardxTimes(awardName,noOfTimes)
let data2=data1.filter(w=>w.country===country)
return data2.sort(find)
}

//Challenge 2 - Sort players that are older than _____ years in alphabetical order
//Sort the awards won by them in reverse chronological order
function SortByNamexOlderThan(age){

let data1=players.filter(m=>m.age>age);
return data1;
}







