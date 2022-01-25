var properName = prompt("Tell me your name");
var verb = prompt("Give me a verb in the past tense");
var noun = prompt("Now give me a noun");

var out = properName + ' ' + verb + ' a ' + noun + '.';

document.getElementById("output").innerHTML = out;