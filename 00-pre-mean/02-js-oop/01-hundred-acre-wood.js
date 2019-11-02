//Imagine that we're building a game for children. They may wander the Hundred Acre Wood and 
//interact with Winnie the Pooh and other characters. Let's draw a map of where the 
//different characters live in the Hundred Acre Wood.



var tigger = { character: "Tigger" };
var pooh = { character: "Winnie the Pooh" };
var piglet = { character: "Piglet" };
var bees = { character: "Bees" };
var owl = { character: "Owl" };
var chris = { character: "Christopher Robin" };
var rabbit = { character: "Rabbit" };
var gopher = { character: "Gopher" };
var kanga = { character: "Kanga" };
var eeyore = { character: "Eeyore" };
var heffalumps = { character: "Heffalumps" };
tigger.north = pooh;

pooh.south = tigger;
pooh.west = piglet;
pooh.east = bees;
pooh.north = robin;

piglet.east = pooh;
piglet.north = owl;

bees.west = pooh;
bees.north = rabbit;

robin.south = pooh;
robin.west = owl;
robin.east = rabbit;
robin.north = kanga;

owl.south = piglet;
owl.east = robin;

rabbit.south = bees;
rabbit.west = robin;
rabbit.east = gopher;

gopher.west = rabbit;

kanga.south = robin;
kanga.north = eeyore;

eeyore.south = kanga;
eeyore.east = heffa;

heffalumps.west = eeyore;
 



