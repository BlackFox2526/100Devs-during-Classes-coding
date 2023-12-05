//Write your pseduo code first! 
document.querySelector('#convert').addEventListener('click', convert)

function convert() {
    console.log('Hello');
    temp = document.querySelector('#cel').value
    temp = temp * 9 / 5 + 32
    document.querySelector('#far').innerText = temp
}

