var animalList = [
  ["Dog", "Bark"],
  ["Cat", "Meow"],
  ["Cow", "Moo"],
  ["Horse", "Nay"],
  ["Crow", "Caa"]
];

//declares variable named table and then grabs 
//the element by id named "table"
var table = document.getElementById("table");
console.log(table);

//Creates table head
var header = table.createTHead();
console.log(header);

//inserts a row in the head
var headerRow = header.insertRow(0);
console.log(headerRow);

//Creates two cells inside the header row
var headerCell = headerRow.insertCell(0);
console.log(headerCell);

var headerCell1 = headerRow.insertCell(1);
console.log(headerCell1);

//Inserts html into the cells
headerCell.innerHTML = "<strong>Animals</strong>";
headerCell1.innerHTML = "<strong>Animal Sound</strong>";

//creates TBody, below the table head
var body = table.createTBody();
console.log(body);

//Creates a row for dog.
var dogRow = body.insertRow(0);
console.log(dogRow);

//creates 2 cells for animal:dog
// and the sound:bark
var dogCell = dogRow.insertCell(0);
var dogCell2 = dogRow.insertCell(1);

//inserts <p> with the placement of the first animal.
dogCell.innerHTML = "<p>"+animalList[0][0]+"</p>";

dogCell2.innerHTML = "<p>"+animalList[0][1]+"</p>";

//Creates a row for cat.
var catRow = body.insertRow(1);
console.log(catRow);

var catCell = catRow.insertCell(0);
var catCell2 = catRow.insertCell(1);

catCell.innerHTML = "<p>"+animalList[1][0]+"</p>";
catCell2.innerHTML = "<p>"+animalList[1][1]+"</p>";


//Creates a row for cow.
var cowRow = body.insertRow(2);
console.log(cowRow);

var cowCell = cowRow.insertCell(0);
var cowCell2 = cowRow.insertCell(1);

cowCell.innerHTML = "<p>"+animalList[2][0]+"</p>";
cowCell2.innerHTML = "<p>"+animalList[2][1]+"</p>";



//Creates a row for horse.
var horseRow = body.insertRow(3);
console.log(horseRow);

var horseCell = horseRow.insertCell(0);
var horseCell2 = horseRow.insertCell(1);

horseCell.innerHTML = "<p>"+animalList[3][0]+"</p>";
horseCell2.innerHTML = "<p>"+animalList[3][1]+"</p>";



//Creates a row for crow.
var crowRow = body.insertRow(4);
console.log(crowRow);

var crowCell = crowRow.insertCell(0);
var crowCell2 = crowRow.insertCell(1);

crowCell.innerHTML = "<p>"+animalList[4][0]+"</p>";
crowCell2.innerHTML = "<p>"+animalList[4][1]+"</p>";





