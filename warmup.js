var randomBase=0;
var newstring = ""
function randomize(min, max){
  randomBase = Math.floor(Math.random()*(max - min + 1))+min;
  newstring = randomBase.toString();
}
function adding (randomNum){
  var sep = randomNum.split("");
  var empt = [];
  base = 0;
  for(i=0;i<sep.length;i++){
    var newnum = parseInt(sep[i]);
    empt.push(newnum);
    base+=newnum;
  }
  console.log("The Original number is: " + randomNum);
  console.log("The sum of the number is : "+ base);
}

function droppingLeft (randomNumber){
  var sep2 = randomNumber.split("");
  var empty2 = [];
  base2 =0;
  for(i=sep2.length-1;i>=0;i--){
    var newnum2 = parseInt(sep2[i]);
    base2+=newnum2;
    empty2.unshift(base2);
  }
  console.log("The Original number is: " + randomNumber);
  console.log("Dropping the left each time equals: "+ empty2);
  console.log(randomNumber, empty2);
}

randomize(1000,9999);
adding(newstring);
droppingLeft(newstring);