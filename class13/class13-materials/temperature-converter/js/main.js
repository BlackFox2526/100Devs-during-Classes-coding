//Write your pseduo code first! 
// First you'd need to make a bucket in order to store the value that is the original temperature, from there you'd make another bucket in order to house the converted value, you would then use some !== and what not to math your way into a converted value. Use the catch of the secondary bucket to display the value.

//Playing with legos here.
input = document.querySelector('#cel')
function convert() {
    let temp = document.querySelector('#cel').value
    temp = temp * 9 / 5 + 32
    document.querySelector('#far').innerText = temp
}
