const num = Math.ceil(Math.random() * 10);

console.log(num);

const gnum = prompt("Guess a number between 1 and 10");

if (gnum == num) {
    console.log("You guessed right!");
} else {
    console.log("Oops, better luck next time! The correct answer was " +num);
}