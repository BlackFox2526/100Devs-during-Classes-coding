//Example fetch using DnD5eAPI - place subclasses in ul
document.querySelector('button').addEventListener('click', getFetch)


function getFetch(){
const choice = document.querySelector('input').value
const url = `https://www.dnd5eapi.co/api/spells/${choice}`

fetch(url)
    console.clear()
      .then(res => res.json()) // parse response as JSON
    .then(data => {
        console.log(data.subclasses)
        data.subclasses.forEach(subCl => {
            console.log(subCl.name)
        //extract the spell name, description and subclasses
        const subli = document.createElement('li')
        li.textContent = obj.name
    })
    console.log(data.classes)
    data.classes.forEach(cl => {
        console.log(cl.name)
        const clli = document.createElement('h3')
    })
        document.querySelector('h2').innerText = data.name
        document.querySelector('h3').appendChild(clli)
        document.querySelector('ul').appendChild(subli)
    })
    .catch(err => {
        console.log(`error ${err}`)
    });
}