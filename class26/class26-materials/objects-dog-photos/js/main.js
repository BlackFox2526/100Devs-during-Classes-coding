//Get a dog photo from the dog.ceo api and place the photo in the DOM
fetch('https://dog.ceo/api/breeds/image/random')
  .then(res => response.json())
  .then(data => {
    console.log(data.message)
    document.querySelector('img').src = data.message
  })
  .catch(error => {
    console.log(`Error: ${error}`);
  });