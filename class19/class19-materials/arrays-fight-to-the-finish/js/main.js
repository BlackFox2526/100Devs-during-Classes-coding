//Create an array of movie titles. Loop through the array and each element to the h2.
let movies = ['Terminator', 'Aliens', 'StarWars']
for(let i = 0; i < movies.length; i++){
    document.querySelector('h2').innerText += movies[i] + ', '
}

//Create an array of numbers. Loop through the array and three to each number and replace the old number.
let numbers = [1, 2, 3]
numbers.forEach((item,i) => {
    numbers[i] = item + 3
})
//Find the average of all the numbers from question three
let sum = numbers.reduce((total, num) => total + num, 0);
let average = sum / numbers.length;