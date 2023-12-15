function whosPaying(names){
var payer = `${names[Math.floor(Math.random()*names.length)]} is going to buy lunch today!`;
return payer;
};

var friends = ["Angela", "Ben", "Jenny", "Michael", "Chloe"];
whosPaying(friends);