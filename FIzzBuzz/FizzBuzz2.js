// write a function that counts to a given number, displaying each number,and checks each number to see if a number is divisible by 3 and returns Fizz or 5 and returns buzz, and if both returns FizzBuzz

//create a function that takes in a value
function fizzBuzz (a) {
    
    //create for loop that counts to the given variable and displays each number in console.log

    for (let i = 1; i <= a; i++) {
        forEach(console.log)
        // create statement that checks if number is by 3 and 5 and returns FizzBuzz
        if (i % 3 === 0 && i % 5 === 0) {
            return FizzBuzz
        } 
        // Create next step in if strand to check if it is divisible by 3 and return Fizz
        else if (i % 3 === 0) {
                return 'Fizz'
            } 
            // Create next step in if strand to check if it is divisible by 3 and return Buzz
        else {
            return 'Buzz'
        }
    }
}
