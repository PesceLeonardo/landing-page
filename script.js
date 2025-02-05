// Swap Quotes

const wifeQuote = document.getElementById("wife-quote");
const fatherQuote = document.getElementById("father-quote");

wifeQuote.addEventListener("click", function() {
    wifeQuote.style.display = "none";
    fatherQuote.style.display = "flex";
});

fatherQuote.addEventListener("click", function() {
    fatherQuote.style.display = "none";
    wifeQuote.style.display = "flex";
});

