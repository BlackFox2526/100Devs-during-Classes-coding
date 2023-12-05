//Create a button that adds 1 to a botScore stored in localStorage 
document.querySelector('button').addEventListener('click', addOne)

function addOne(){
    letbotSCore = Number(localStorage.getItem('botScore'))
    botSCoreVal += 1
    localStorage.setItem('botSCore', botSoreVal)
}