let formulaire = document.getElementById("formulaire");
let quoteCount = 1

formulaire.addEventListener('submit', (event) => {
    event.preventDefault();
    const text = document.getElementById('citation');
    const author = document.getElementById('author');
    const textValue = text.value.trim();
    const authorValue = author.value.trim();

    addQuote(textValue, authorValue);
 });

 function addQuote(quote, author){
    const p1 = document.createElement('p');
    p1.className = "text";
    p1.textContent = `"${quote}"`;

    const p2 = document.createElement('p');
    p2.className = "author";
    p2.textContent = author;

    const div = document.createElement('div');
    div.className = "quote";
    div.appendChild(p1)
    div.appendChild(p2);

    const quoteList = document.getElementById('quote-list');
    quoteList.appendChild(div);

    quoteCount = quoteCount += 1;

    let count = document.getElementById("count");
    count.textContent = `${quoteCount} citations`;
 }
