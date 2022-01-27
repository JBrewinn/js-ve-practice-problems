var today = new Date;
var month = today.getMonth();
var monthList = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
var day = today.getDate();
var year = today.getFullYear();

out = "Today's date is " + monthList[month] + "/" + day + "/" + year + ".";

console.log(out);

document.getElementById("output").innerHTML = out;