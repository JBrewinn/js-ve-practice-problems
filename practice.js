// Write a function that converts hours into seconds.

function howManySeconds(num) {
    return num *60 *60;
}

// console.log(howManySeconds(10));

// Create a function that takes length and width and finds the perimeter of a rectangle.

function findPerimeter(a, b) {
    return (a * 2) + (b * 2);
}

// console.log(findPerimeter(20, 10));

// A student learning JavaScript was trying to make a function. His code should concatenate a passed string name with string "Edabit" and store it in a variable called result. He needs your help to fix this code.

function nameString(name) {
    let result = name + "Edabit";
    return result;
}

// console.log(nameString("javaScript"));

// Mubashir created an infinite loop! Help him by fixing the code in the code tab to pass this challenge. Look at the examples below to get an idea of what the function should do.

function printArray(number) {
    var newArray = [];
  
    for(let i = 1; i <= number; i++) {
      newArray.push(i);
    }
  
    return newArray;
  }

//   console.log(printArray(8));

// Mubashir wants to swap two given numbers!

// It is not returning the right values. Can you help him fix it?

function swap(a, b) {
	[a, b] = [b, a]
    return [a, b];
}

console.log(swap(44, 33));