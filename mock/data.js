
const quotesData = document.querySelector(".quotes");
const loader = document.querySelector(".loader");


const getQuotes = async (page, limit) => {
    
    const API_URl = `https://api.javascripttutorial.net/v1/quotes/?page=${page}&limit=${limit}`;
    const res = await fetch(API_URl);

    if (!res.ok)
    {
        throw new Error(`An error occurred: ${res.status}`)
    }
    return await res.json();
}
const showQuotes = (quotes) => {

    quotes.forEach((quote) => {
        const quoteData = document.createElement('bq');
        quoteData.classList.add('quote');
        quoteData.innerHTML = `
        <span>${quote.id}</span>
        ${quote.quote}
        <footer>${quote.author}</footer>
        `;
        quoteData.appendChild(quoteData);
    });
};


var length = 10;
function fn() {
  console.log(this.length);
}
var obj = {
  length: 5,
  method: function (fn) {
    fn();
    arguments[0]();
  },
};
obj.method(fn, 1);

const arr =[2, 3, 4, 5, 3, 4]

arr.filter()