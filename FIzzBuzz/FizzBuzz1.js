// write a function that counts to a given number and checkseach number to see if a number is divisible by 3 and returns Fizz or 5 and returns buzz, and if both returns FizzBuzz

function fizzBuzz (a) {
    for (let i = 1; i <= a; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log('FizzBuzz')
        }
        else if (i % 3 === 0){
            console.log('Fizz')
        }
        else if (i % 5 === 0){
            console.log('Buzz')
        }
        else {
            console.log(i)
        }
    })
}