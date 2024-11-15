var quotes = [
    "Always forgive your enemies; nothing annoys them so much. - Oscar Wilde",
    "It is better to be hated for what you are than to be loved for what you are not. - Andre Gide",
    "If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals. - J.K. Rowling",
    "Be the change that you wish to see in the world. - Mahatma Gandhi",
    "In three words I can sum up everything I've learned about life: it goes on. - Robert Frost",
    "You only live once, but if you do it right, once is enough. - Mae West"
];

let last = -1;

function generateQuote() {
    let random;

    do {
        random = Math.floor(Math.random() * quotes.length);
    } while (random === last);

    last = random;

    var quoteele = document.getElementById('quote');

    quoteele.innerHTML = quotes[random];

   
}
document.getElementById('generator').onclick = generateQuote;
