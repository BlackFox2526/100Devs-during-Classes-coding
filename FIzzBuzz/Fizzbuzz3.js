//create a fucntion that counts to the provided number. If that number is divisible by 3, return Fizz. If that number is divisible by 5, return Buzz. If that number is divisible by 3 and 5, return FizzBuzz. If that number is not divisible by 3 or 5, return that number.

//Create the function that takes in a number
function FizzBuzz(a) {
    //start for loop that counts to the given number
    for (let i = 0; i <= a; i++) {
        //create statement that checks if number is divisble by 3 and 5
        if (i % 3 === 0 && i % 5 === 0) {
            return 'FizzBuzz'
            //Statement for 3 only
        } else if (i % 3 === 0) {
            return 'Fizz'
            //statement for 5 only
        } else if (i % 5 === 0) {
            return 'Buzz'
        } else{
            // if not divisible
            return i
        }
    }
}