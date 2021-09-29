const message = document.querySelector('#message p');
const messages = [
  'The journey of a thousand miles begins with one step. - Lao Tzu',
  'That which does not kill us makes us stronger. - Friedrich Nietzsche',
  'Life is what happens when you’re busy making other plans. - John Lennon',
  'When the going gets tough, the tough get going. - Joe Kennedy',
  'You must be the change you wish to see in the world. - Mahatma Gandhi',
  'You only live once, but if you do it right, once is enough. - Mae West',
  'Tough times never last but tough people do. - Robert H. Schuller',
  'Whether you think you can or you think you can’t, you’re right. - Henry Ford'
]

const randomMessage = ( arr ) => {
  let randomNumber = Math.floor( Math.random() * arr.length);

  return arr[randomNumber];
}

const produceMessage = ( data ) => {
  /** 
   * Test to see if the button is selected
   * console.log( event.target );
  */
  message.textContent = randomMessage( data );
}

produceMessage(messages);