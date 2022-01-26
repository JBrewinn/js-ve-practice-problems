var name = prompt("What is your name?")
var city = prompt("In which city or town do you live?");
var age = prompt("How old are you?");
var pets = prompt("How many pets do you have?");
var food = prompt("What is your favorite food?");
 
var out = "This is my friend " + name;

out += "<br>" +  name + " lives in " + city;
out += "<br>" +  name + " is " + age + " years old";
out += "<br>" + name + " has " + pets + " pets";
out += "<br>" +  name + " likes to eat " + food;

document.getElementById("output").innerHTML = out;