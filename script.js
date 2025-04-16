let numInput = document.getElementById("numInput");   

function log() {
    console.log(numInput.value);
    let num = parseInt(numInput.value);
// Create check to verify the input is a number and is positive 
    console.log(num);

    if ( num % 3 === 0 && num % 5 === 0){
        console.log("The number is divisible by both 3 and 5");
    } else if (num % 3 === 0){
        console.log("The number is divisible by 3");
    } else if (num % 5 === 0){
        console.log("The number is divisible by 5");
    } else {
        console.log("The number is not divisible by 3 or 5");
    }
}

