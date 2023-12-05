document.querySelector('#check').addEventListener('click', check)

function check() {

  const day = document.querySelector('#day').value

  //Conditionals go here
if(day === "Tuesday" || day === "Wednesday" || day === "Thursday" || day === "Friday"){
  document.querySelector('#placeToYell').innerText = "Class!"
} else {
  document.querySelector('#placeToYell').innerText = "weekend baby!"
}

}
