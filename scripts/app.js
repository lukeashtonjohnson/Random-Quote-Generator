const quote = document.querySelector('#quote p');
const author = document.querySelector('#author p');

const randomQuote = ( arr ) => {
  let index = Math.floor( Math.random() * arr.length);
  return {
    quote: arr[index].quote,
    author: arr[index].author
  }
}

const produceMessage = ( data, output) => {
  let theQuote = output(quotes);
  quote.textContent = `${theQuote.quote}`;
  author.textContent = `${theQuote.author}`;
}

produceMessage(quotes, randomQuote);


