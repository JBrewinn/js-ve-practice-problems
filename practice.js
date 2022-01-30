function FizzBuzz(num) {
    for (let num = 0; num <= 100; num++) {
        const gnum = array[num];
        if (gnum % 15 === 0) {
            console.log("FizzBuzz");
        } else if (gnum % 3 === 0) {
            console.log("Fizz");
        } else if (gnum % 5 === 0) {
            console.log("Buzz");
        }
    }
}

console.log(FizzBuzz(0));