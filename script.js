let numInput = document.getElementById("numInput");   

function FizzBuzz() {
    const results = [];
    const map = { 3: "Fizz", 5: "Buzz" };
    const divisors = [3,5];

    for (let i = 1; i <= n; i++) {
        let output = "";
        for (let divisor of divisors) {
            if (i % divisor === 0) {
                output += map[divisor];
            }
        }
        if (output === "") {
            output += i;
        }
        results.push(output);
    }
    return results;
}
const n = 9; // You can change this value to test with different numbers
const results = FizzBuzz(n);
console.log(results.join(", "));