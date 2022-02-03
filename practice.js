// Consider a && b:

// a is checked if it is true or false.
// If a is false, false is returned.
// b is checked if it is true or false.
// If b is false, false is returned.
// Otherwise, true is returned (as both a and b are therefore true ).
// The && operator will only return true for true && true.

// Make a function using the && operator.

function and(a, b) {
	return a && b;
}

// console.log(and(true, true));


// Create a function that returns true when num1 is equal to num2; otherwise return false.

function isSameNum(num1, num2) {
	return num1 === num2;
}

// console.log(isSameNum(2, 4));


// Create a function that takes the number of wins, draws and losses and calculates the number of points a football team has obtained so far.

// wins get 3 points
// draws get 1 point
// losses get 0 points

function footballPoints(wins, draws, losses) {
	return (wins  * 3) + (draws * 1) + (losses * 0);
}

// console.log(footballPoints(0, 0, 1));


// Write a function that takes two integers (hours, minutes), converts them to seconds, and adds them.

function convert(hours, minutes) {
	return (hours * 3600) + (minutes * 60);
}

// console.log(convert(2, 0));


// Fix the code in the Code tab so the function returns true if and only if x is equal to 7.

function isSeven(x) {
	return x =="7";
}

// console.log(isSeven(7));


// In this challenge, you must verify the equality of two different values given the parameters a and b.

// Both the value and type of the parameters need to be equal. The possible types of the given parameters are:

// Numbers
// Strings
// Booleans (false or true)
// Special values: undefined, null and NaN
// What have you learned so far that will permit you to do two different checks (value and type) with a single statement?

// Implement a function that returns true if the parameters are equal, and false if they are not.

function checkEquality(a, b) {
    return a === b;
}

// console.log(checkEquality(1, 1));


// Create a function that takes three arguments prob, prize, pay and returns true if prob * prize > pay; otherwise return false.

function profitableGamble(prob, prize, pay) {
	return (prob * prize) > pay;
}

// console.log(profitableGamble(.9, 3, 2));


// Create a function that takes a boolean variable flag and returns it as a string.

function boolToString(flag) {
	return flag.toString();
}

// console.log(boolToString(true));


// Create a function that returns the given argument, but by using an arrow function.

let arrowFunc = (input) =>  input;

// console.log(arrowFunc("test"));


// Create a function that returns the number of frames shown in a given number of minutes for a certain FPS.

let frames = (x, y) => (x * 60) * y;

// console.log(frames(10, 25));


// Create a function that will handle simple math expressions. The input is an expression in the form of a string.

let calculator = str => eval(str);

// console.log(calculator(24/4));


// Emmy has written a function that returns a greeting to users. However, she's in love with Mubashir, and would like to greet him slightly differently. She added a special case in her function, but she made a mistake.

// Can you help her?

function greeting(name) {
    if(name == "Mubashir") {
      return "Hello, my Love!";
    } else return "Hello " + name +"!";
} 

// console.log(greeting("Mubashir"));


// Create a function that takes two arguments. Both arguments are integers, a and b. Return true if one of them is 10 or if their sum is 10.

function makesTen(a, b) {
	if (a == 10 || b == 10) {
		return true;
	} else if ((a + b) == 10) {
		return true;
	} return false;
}

// console.log(makesTen(2, 1));


// A vehicle needs 10 times the amount of fuel than the distance it travels. However, it must always carry a minimum of 100 fuel before setting off.

// Create a function which calculates the amount of fuel it needs, given the distance.

function calculateFuel(miles) {
	if (miles < 10) {
		return 100;
	} else return miles * 10;
}

// console.log(calculateFuel(15));
// console.log(calculateFuel(23.5));
// console.log(calculateFuel(3));


// Fix the code in the code tab to pass this challenge (only syntax errors). Look at the examples below to get an idea of what the function should do.

function maxNum(n1, n2) {
	if (n1 < n2) {
	  return n2
	}
  	else return n1;
}

// console.log(maxNum(3, 7));
// console.log(maxNum(-1, 0));
// console.log(maxNum(1000, 400));


// Given two arguments, return an array which contains these two arguments.

function makePair(num1, num2) {
	return [51, num2];
}

// console.log(makePair(51, 21));


// Create a function that takes two strings as arguments and return either true or false depending on whether the total number of characters in the first string is equal to the total number of characters in the second string.

function comp(str1, str2) {
	if (str1.length == str2.length) {
		return true;
	} else return false;
}

// console.log(comp("AB", "CD"));
// console.log(comp("ABC", "DE"));
// console.log(comp("hello", "edabit"));


// Create a function that returns true if a string is empty and false otherwise.

function isEmpty(s) {
	if (s.length > 0) {
		return false;
	} else return true;
}

// console.log(isEmpty(""));
// console.log(isEmpty(" "));
// console.log(isEmpty("a"));


// Create a function that returns true if an integer is evenly divisible by 5, and false otherwise.

function divisibleByFive(n) {
	if (n%5 == 0) {
		return true;
	} else return false;
}

console.log(divisibleByFive(5));
console.log(divisibleByFive(-55));
console.log(divisibleByFive(37));