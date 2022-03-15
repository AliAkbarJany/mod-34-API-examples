const loadeQuotes = () => {
    fetch('https://api.kanye.rest/')
        .then(response => response.json())
        .then(data => displayQuote(data))
}

const displayQuote = quote => {
    console.log(quote.quote);
    const quoteElement = document.getElementById('quote');
    quoteElement.innerText = quote.quote;
}