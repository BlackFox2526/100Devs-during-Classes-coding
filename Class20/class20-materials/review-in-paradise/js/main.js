// *Variables*
// Declare a variable, reassign it to your favorite food, and alert the value
let var1 = 'pizza';
var1 = 'tacos';
alert(var1)
//Declare a variable, assign it a string, alert the second character in the string (Use your google-fu and the MDN)
let var2 = 'a string'
alert(var2.charAt(1))
// *Functions*
// Create a function that takes in 3 numbers. Divide the first two numbers and multiply the last. Alert the product. Call the function.
function func(num1,num2,num3) {
    alert (num1 / num2) * num3
}
func(12,3,4)

// Create a function that takes in 1 number. Console log the cube root of the number. Call the function.
function func2 (num4) {
    console.log (Math.cbrt(num4).toFixed(5))
}
func2(44)

// *Conditionals*
//Create a function that takes in a month. If it is a summer month alert "YAY". If another other month, alert "Booo"
function func3 (month) {
    let month = month.toLowerCase
    if (month === 'october','november','december') {
        alert ('YAY')
    } else {
        alert ('Booo')
    }
}

//*Loops*
//Create a function that takes in a number. Console log every number from 1 to that number while skipping multiples of 5.
function func4 (num5) {
    console.log {
    for (let i=1; i <= num5; i++) {
        if(i % 5 !== 0) {
        }
    }
    }
}
func4