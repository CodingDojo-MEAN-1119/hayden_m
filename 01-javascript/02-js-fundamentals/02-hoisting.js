// Rewrite the code the way it would be seen by the interpreter and 
//predict the output. An example is shown here:

// GIVEN
// console.log(example);
// var example = "I'm the example!";
// AFTER HOISTING BY THE INTERPRETER
var example;
console.log(example); // logs undefined
example = "I'm the example!";

// 1
console.log(hello); // var moved ^                                  
var hello = 'world'; // logs: "world"

// 2
var needle = 'haystack'; 
test(); // console logs: "magnet"
function test(){ // top needle outside function
	var needle = 'magnet';
	console.log(needle); // logs: "magnet" when called
}

// 3
var brendan = 'super cool'; // contrains "super cool"
function print(){
    brendan = 'only okay'; // no function called
	console.log(brendan);
}
console.log(brendan); // logs: "super cool"

// 4
var food = 'chicken';
console.log(food); // console log: "chicken"
eat(); // 
function eat(){
	food = 'half-chicken'; // console logs:"half-chimken"
	console.log(food); 
	var food = 'gone';
}

// 5
mean(); // console logs: "fish", "fish"
console.log(food); // undefined 
var mean = function() {
	food = "chicken";
	console.log(food);
	var food = "fish"; // uses "fish"
	console.log(food);
}
console.log(food); //undefined

// 6
console.log(genre); // logs: "undefined"
var genre = "disco";
rewind(); // console logs: "rock", "r&b"
function rewind() {
	genre = "rock";
	console.log(genre);
	var genre = "r&b";
	console.log(genre);
}
console.log(genre); //console logs: "dico"

// 7
dojo = "san jose";
console.log(dojo); // logs: "san jose"
learn(); 
function learn() {
	dojo = "seattle"; // logs "seattle"
	console.log(dojo);
	var dojo = "burbank"; // logs "burbank"
	console.log(dojo);
}
console.log(dojo); // console.logs: "san jose"

// 8
console.log(makeDojo("Chicago", 65)); // typeError - assignment to const*
console.log(makeDojo("Berkeley", 0)); 
function makeDojo(name, students){
        const dojo = {}; 
        dojo.name = name; // ****
        dojo.students = students;
        if(dojo.students > 50){
            dojo.hiring = true;
        }
        else if(dojo.students <= 0){
            dojo = "closed for now";
        }
        return dojo;
}