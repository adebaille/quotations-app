let formulaire = document.getElementById("formulaire");

formulaire.addEventListener('submit', (event) => {
    event.preventDefault();
    const text = document.getElementById('citation');
    const author = document.getElementById('author');
    const textValue = text.value.trim();
    const authorValue = author.value.trim();

    console.log(textValue)
 console.log(authorValue);
 });