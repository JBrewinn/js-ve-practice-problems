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


// Create a function that returns true when num1 is equal to num2; otherwise return false.

function isSameNum(num1, num2) {
	return num1 === num2;
}


// Create a function that takes the number of wins, draws and losses and calculates the number of points a football team has obtained so far.

// wins get 3 points
// draws get 1 point
// losses get 0 points

function footballPoints(wins, draws, losses) {
	return (wins  * 3) + (draws * 1) + (losses * 0);
}


// Write a function that takes two integers (hours, minutes), converts them to seconds, and adds them.

function convert(hours, minutes) {
	return (hours * 3600) + (minutes * 60);
}


// Fix the code in the Code tab so the function returns true if and only if x is equal to 7.

function isSeven(x) {
	return x =="7";
}


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


// Create a function that takes three arguments prob, prize, pay and returns true if prob * prize > pay; otherwise return false.

function profitableGamble(prob, prize, pay) {
	return (prob * prize) > pay;
}


// Create a function that takes a boolean variable flag and returns it as a string.

function boolToString(flag) {
	return flag.toString();
}


// Create a function that returns the given argument, but by using an arrow function.

let arrowFunc = (input) =>  input;


// Create a function that returns the number of frames shown in a given number of minutes for a certain FPS.

let frames = (x, y) => (x * 60) * y;


// Create a function that will handle simple math expressions. The input is an expression in the form of a string.

let calculator = str => eval(str);


// Emmy has written a function that returns a greeting to users. However, she's in love with Mubashir, and would like to greet him slightly differently. She added a special case in her function, but she made a mistake.

// Can you help her?

function greeting(name) {
    if(name == "Mubashir") {
      return "Hello, my Love!";
    } else return "Hello " + name +"!";
} 


// Create a function that takes two arguments. Both arguments are integers, a and b. Return true if one of them is 10 or if their sum is 10.

function makesTen(a, b) {
	if (a == 10 || b == 10) {
		return true;
	} else if ((a + b) == 10) {
		return true;
	} return false;
}


// A vehicle needs 10 times the amount of fuel than the distance it travels. However, it must always carry a minimum of 100 fuel before setting off.

// Create a function which calculates the amount of fuel it needs, given the distance.

function calculateFuel(miles) {
	if (miles < 10) {
		return 100;
	} else return miles * 10;
}


// Fix the code in the code tab to pass this challenge (only syntax errors). Look at the examples below to get an idea of what the function should do.

function maxNum(n1, n2) {
	if (n1 < n2) {
	  return n2
	}
  	else return n1;
}


// Given two arguments, return an array which contains these two arguments.

function makePair(num1, num2) {
	return [51, num2];
}


// Create a function that takes two strings as arguments and return either true or false depending on whether the total number of characters in the first string is equal to the total number of characters in the second string.

function comp(str1, str2) {
	if (str1.length == str2.length) {
		return true;
	} else return false;
}


// Create a function that returns true if a string is empty and false otherwise.

function isEmpty(s) {
	if (s.length > 0) {
		return false;
	} else return true;
}


// Create a function that returns true if an integer is evenly divisible by 5, and false otherwise.

function divisibleByFive(n) {
	if (n%5 == 0) {
		return true;
	} else return false;
}


// Create a function that takes an integer and returns true if it's divisible by 100, otherwise return false.

function divisible(n) {
	if (n%100 == 0) {
		return true;
	} else return false;
}


// Write a function that returns the length of a string. Make your function recursive.

function length(str) {
	if (str == "") {
		return 0;
	} else return length(str.substring(1)) + 1;
}


// Given two integers, a and b, return true if a can be divided evenly by b. Return false otherwise.

function dividesEvenly (a, b) {
	if (a%b == 0) {
		return true;
	} else {
		return false;
	}
}


// Create a function that takes a string and returns it as an integer.

function stringInt (a) {
	num = parseInt(a);
	return num;
}


// Create a function that calculates the area of a rectangle. If the arguments are invalid, your function must return -1.

function area(a, b) {
	if (a <=0 || b <= 0) {
		return -1;
	} else {
		return (a*b);
	}
}


// Write a function that returns true if the given integer is even, and false if it's odd.

function isEven(n) {
	if (n%2 == 0) {
		return true;
	} else {
		return false;
	}
}


// Given two strings, firstName and lastName, return a single string in the format "last, first".

function concatName (firstName, lastName) {
	let name = "";
	name += lastName + ", " + firstName;
	return name;
}


// The challenge is to try and fix this buggy code, given the inputs true and false. See the examples below for the expected output.

// function has_bugs(buggy_code) {
// 	if (buggyCode) {
// 		return 'sad days'
// 	} else if {
// 		return 'it's a good day'
// 	}
// }

function has_bugs(buggyCode) {
	if (buggyCode == true) {
		return 'sad days'
	} else if (buggyCode == false) {
		return 'it\'s a good day';
	}
}


// Scientists have discovered that in four decades, the world will EXPLODE! It will also take three decades to make a spaceship to travel to a new planet that can hold the entire world population.

// You must calculate the number of people there will be in three decades from now.

// The variable population is the world population now.
// Assume that every month, someone gives birth to more people n.
// Return the number of people there will be when the spaceship is complete.

function futurePeople(population, n) {
	n = n * 360;
	return n + population;
}


// Create a function that evaluates an equation.

function eq(evaluate) {
	return eval(evaluate);
}


// Given an object containing counts of both upvotes and downvotes, return what vote count should be displayed. This is calculated by subtracting the number of downvotes from upvotes.

function getVoteCount(votes) {
	return votes.upvotes - votes.downvotes;
}

// Create a function that takes a number as an argument and returns negative of that number. Return negative numbers without any change.

function returnNegative(num) {
	if (num > 0) {
		return num * -1;
	} else return num;
}


// A leap year happens every four years, so it's a year that is perfectly divisible by four. However, if the year is a multiple of 100 (1800, 1900, etc), the year must be divisible by 400.

// Write a function that determines if the year is a leap year or not.

function leapYear(year) {
	if (year%100 == 0) {
		return year%400 == 0;
	} 
	else return year%4 == 0;
} 


// Write a function to reverse an array.

function reverse(arr) {
	return arr.reverse();
}


// Write a function that checks whether a person can watch an MA15+ rated movie. One of the following two conditions is required for admittance:

// The person is at least 15 years old.
// They have parental supervision.
// The function accepts two parameters, age and isSupervised. Return a boolean.

function acceptIntoMovie(age, isSupervised) {
	if (age >= 15 || isSupervised == true) {
		return true;
	} else return false;
}


// Help fix all the bugs in the function incrementItems! It is intended to add 1 to every element in the array!

// function incrementItems(arr) {
// 	for (let i = 0; i < array.length; i++)
// 		arr[i] === arr[i] + 1
// 	return array
// }

function incrementItems(arr) {
	let array = [];
	for (let i = 0; i < arr.length; i++) {
		array.push(arr[i] + 1);
	} 
	return array;
}


// A bartender is writing a simple program to determine whether he should serve drinks to someone. He only serves drinks to people 18 and older and when he's not on break.

// Given the person's age, and whether break time is in session, create a function which returns whether he should serve drinks.

function shouldServeDrinks(age, onBreak) {
	if (age >= 18 && onBreak == false) {
		return true;
	} else return false;
}


// Write a template string according to the following example:

// const a = "John";
// const b = "Joe";
// const c = "Jack";
// const template = "your template string" ➞ "Their names were:  John,  Joe  and  Jack."

function format(a, b, c) {
	const template = `Their names were: ${a}, ${b}, ${c}`;
	return template;
}


// In the Code tab you will find code that is missing a single character in order to pass the tests. However, your goal is to submit a function as minimalist as possible. Use the tips in the tips section below.

// Write five adder functions:

// add2(x) should return 2 + x.
// add3(x) should return 3 + x.
// add5(x) should return 5 + x.
// add7(x) should return 7 + x.
// add11(x) should return 11 + x.

add2 = x => 2 + x;

add3 = x => 3 + x;

add5 = x => 5 + x;

add7 = x => 7 + x;

add11 = x => 11 + x;


// Write a function that uses the ternary operator to return "yeah" if bool is true, and "nope" otherwise.

function yeah_nope(bool) {
	return bool == true ? "yeah" : "nope";
}


// I have a bucket containing an amount of navy blue paint and I'd like to paint as many walls as possible. Create a function that returns the number of complete walls that I can paint, before I need to head to the shops to buy more.

// n is the number of square meters I can paint.
// w and h are the widths and heights of a single wall in meters.

function howManyWalls(n, w, h) {
	return x = Math.floor(n/(w*h));
}


// Write a function that returns the boolean true if the given number is zero, the string "positive" if the number is greater than zero or the string "negative" if it's smaller than zero.

function equilbrium (x) {
	if (x > 0) return "positive" 
	if (x < 0) return "negative"
	return true
}


// Given a string, return true if its length is even or false if the length is odd.

function oddOrEven(str) {
	return str.length%2 == 0;
}


// With ES6, you can assign variables from arrays in a much more succinct way. Create variables a and b from the given array using the ES6 destructuring assignment syntax, where a === 1 and b === 2.

const arr = [1, 2, 3, 4, 5, 6]

let [a, b] = arr;


// The police send you an electronic statement for you to sign. As you begin to sign, an error pops up. Apparently, they sent you a protected document.

// This challenge is a bit different as the function you are given already contains some code that you should not change or remove. Also, don't do a return statement, it is already included. Your task is, given an object, prevent changes to that object.

function preventChanges(obj) {
	// write your code here
	  // don't use a return statement
	Object.freeze(obj);
	  
	// DON'T CHANGE OR REMOVE THE LINES BELOW
	obj.noChanges = false;
	obj.signature = "whatever";
	return obj;
  }


//   I'd like to calculate how long on average I've lived in a single house.

//   Given a person's age and the number of times they've moved house as moves, return the average number of years that they've spent living in the same house.

function yearsInOneHouse(age, moves) {
	return Math.round(age/(moves + 1));
}


// Create a function that takes a number n and returns the nth even number beginning with 0 as the first.

function nthEven(n) {
	return (n * 2) - 2;
}


// Create a function that accepts a measurement value in inches and returns the equivalent of the measurement value in feet.

function inchesToFeet(n) {
	if (n < 12) return 0;
	if (n >= 12) return n / 12;
}


// You need to create two functions to substitute toString() and parseInt(); A function called intToString() that converts integers into strings and a function called stringToInt() that converts strings into integers.

function intToString(num) {
	return num.toString();
}

function stringToInt(num) {
	return parseInt(num);
}


// Create a function that takes a base number and an exponent number and returns the calculation.

function calculateExponent(n, exp) {
	return n ** exp;
}


// Given the radius of a circle and the area of a square, return true if the circumference of the circle is greater than the square's perimeter and false if the square's perimeter is greater than the circumference of the circle.

function circle_or_square(rad, area){
	return ((rad * 3.14 * 2) > (Math.sqrt(area) * 4));
}


// Create a function that accepts an array and returns the last item in the array.

function getLastItem(arr) {
	return arr[arr.length - 1];
}


// According to the lodash documentation, _.drop creates a slice of an array with n elements dropped from the beginning.

// Your challenge is to write your own version using vanilla JavaScript.

function drop(arr, val = 1) {
	return arr.slice(val);
}


// Some basic arithmetic operators are +, -, *, /, and %. In this challenge you will be given three parameters, num1, num2, and an operator. Use the operator on number 1 and 2.

function operate(num1, num2, operator) {
	return eval(num1 + operator +  num2);
}


// Create a function that returns how many possible arrangements can come from a certain number of switches (on / off). In other words, for a given number of switches, how many different patterns of on and off can we have?

function posCom(num) {
	return 2 ** num; // can also use return Math.pow(2, num);
}


// Create a function that calculates the chance of being an imposter. The formula for the chances of being an imposter is 100 × (i / p) where i is the imposter count and p is the player count. Make sure to round the value to the nearest integer and return the value as a percentage.

function imposterFormula(i, p) {
	return (Math.round(100 * (i / p))).toString() + "%";
}


// Create a function that takes the number of daily average recovered cases recovers, daily average newCases, current activeCases, and returns the number of days it will take to reach zero cases.

function endCorona(recovers, newCases, activeCases) {
	return Math.round(activeCases/(recovers - newCases));
}


// Create variables first, second, third and other from the given array using Destructuring Assignment (check the Resources tab for some examples).

[first, second, third, ...other] = [1, 2, 3, 4, 5, 6, 7, 8]


// Create a function that takes a word and returns the new word without including the first character.

function newWord(str) {
	return str.slice(1);
}


// Create a function that returns the opposite of the given boolean, as a number.

function flipBool(b) {
	return Number(!b);
}


// Create a function that takes a name and returns a greeting in the form of a string. Don't use a normal function, use an arrow function.

helloName = (name) => "Hello " + name + "!";


// Create a function that takes a number as an argument and returns "even" for even numbers and "odd" for odd numbers.

function isEOrO(num) {
	if (num%2 == 0) {
		return "even";
	} else 
	return "odd";
}


// Éowyn has written the function isOdd() to check if a given number is odd or not. Unfortunately, the function does not return the correct result for all the inputs. Help her fix the error.

function isOdd(num) {
	return num % 2 != 0;
}




// For this challenge, you will NOT be given a string. Your task isn't to add "Do not" before the given string. If there is no given string, you will not return "Do not do anything." Do not check the examples to know how to do this challenge.

function reversePsychology(s) {
	if (s == "") {
		return "Do not do anything."
	} else
	return "Do not " + s;
}

// console.log(reversePsychology("do the dishes"));

// Create a function that takes a string txt and a number n and returns the repeated string n number of times.

// If given argument txt is not a string, return Not A String !!

function repeatString(str, n) {
	if (typeof str != typeof "") {
		return "Not a string !!"
	} else
	return str.repeat(n);
}

// console.log(repeatString("Matt", 4));


// Here's an image of four models. Some of the cubes are hidden behind other cubes. Model one consists of one cube. Model two consists of four cubes, and so on...

function stackBoxes(n) {
	return n ** 2;
}

// console.log(stackBoxes(4));


// Create a function that takes an array and returns the types of values (data types) in a new array.

typeArr = []

function arrayValuesTypes(arr) {
	for (let i = 0; i < arr.length; i++) {
		typeArr.push(typeof arr[i]);
	}
	return typeArr;
}

// console.log(arrayValuesTypes([1, 2, "null", []]));


// Write a function that takes the last number of a consecutive list of numbers and returns the total of all numbers up to and including it.

var i = 1;
var tot = 0;

function addUpTo(num) {
	while (i <= num) {
		tot += i;
		i++;
	} return tot;
}
// console.log(addUpTo(7));


// Create a function that takes an array of strings and numbers, and filters out the array so that it returns an array of integers only.

var newArr = [];

function filterArray(arr) {
	for (let i = 0; i < arr.length; i++) {
		if (typeof arr[i] == Number) {
			newArr.push(arr[i]);
			
		} return newArr;
	} 
}

console.log(filterArray([1, 2, 3, "a", "b", 4]));