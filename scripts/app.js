const quote = document.querySelector('#quote p');
const author = document.querySelector('#author p');
const photo = document.querySelector('#photo img');

const randomQuote = ( arr ) => {
  let index = Math.floor( Math.random() * arr.length);
  return {
    quote: arr[index].quote,
    author: arr[index].author,
    image: arr[index].image
  }
}

const produceMessage = ( data, output) => {
  let theQuote = output(quotes);
  quote.textContent = `${theQuote.quote}`;
  author.textContent = `${theQuote.author}`;
  theQuote.image ? photo.src =`${theQuote.image}` : photo.src = `https://via.placeholder.com/150`;
  
}

produceMessage(quotes, randomQuote);


