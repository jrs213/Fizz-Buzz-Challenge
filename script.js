let numInput = document.getElementById("numInput");   

function FizzBuzz() {
    let num = parseInt(numInput.value);
    console.log(num);
// Input Value Validation Check
    if (isNaN(num)) {
        console.log("Please enter a valid number");
        return;
    }
    if (num < 0) {
        console.log("Please enter a positive number");
        return;
    }
    if (num === 0) {
        console.log("The number is zero");
        return;
    }
// FizzBuzz Logic
    if (num % 3 === 0 && num % 5 === 0) {
        console.log("FizzBuzz");
    } else if (num % 3 === 0) {
        console.log("Fizz");
    } else if (num % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(num);
    }
}

