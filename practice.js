var day = today.getDay();
var dayList = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

var hour = today.getHour();
var minute = today.getMinutes();
var second = today.getSeconds();



var out = "Today is: " + dayList[day] + ".";
out + "<br>Current time is: " + hour + " : " + minute + " : " + second + "."

document.getElementById("output").innerHTML = out;