const cards = [
  { name: 'aquaman', img: 'aquaman.jpg' },
  { name: 'batman', img: 'batman.jpg' },
  { name: 'captain america', img: 'captain-america.jpg' },
  { name: 'fantastic four', img: 'fantastic-four.jpg' },
  { name: 'flash', img: 'flash.jpg' },
  { name: 'green arrow', img: 'green-arrow.jpg' },
  { name: 'green lantern', img: 'green-lantern.jpg' },
  { name: 'ironman', img: 'ironman.jpg' },
  { name: 'spiderman', img: 'spiderman.jpg' },
  { name: 'superman', img: 'superman.jpg' },
  { name: 'the avengers', img: 'the-avengers.jpg' },
  { name: 'thor', img: 'thor.jpg' },
  { name: 'aquaman', img: 'aquaman.jpg' },
  { name: 'batman', img: 'batman.jpg' },
  { name: 'captain america', img: 'captain-america.jpg' },
  { name: 'fantastic four', img: 'fantastic-four.jpg' },
  { name: 'flash', img: 'flash.jpg' },
  { name: 'green arrow', img: 'green-arrow.jpg' },
  { name: 'green lantern', img: 'green-lantern.jpg' },
  { name: 'ironman', img: 'ironman.jpg' },
  { name: 'spiderman', img: 'spiderman.jpg' },
  { name: 'superman', img: 'superman.jpg' },
  { name: 'the avengers', img: 'the-avengers.jpg' },
  { name: 'thor', img: 'thor.jpg' }
];

const memoryGame = new MemoryGame(cards);

window.addEventListener('load', (event) => {
  let html = '';
  memoryGame.cards.forEach((pic) => {
    html += `
      <div class="card" data-card-name="${pic.name}">
        <div class="back" name="${pic.img}"></div>
        <div class="front" style="background: url(img/${pic.img}) no-repeat"></div>
      </div>
    `;
  });

  // Add all the divs to the HTML
  document.querySelector('#memory-board').innerHTML = html;

  let firstCard = null;

  // Bind the click event of each element to a function
  document.querySelectorAll('.card').forEach((card) => {
    card.addEventListener('click', () => {
      // Check if the card is blocked or already picked
      if (card.classList.contains('blocked') || memoryGame.pickedCards.length >= 2) return;

      // Flip the card
      card.classList.toggle('turned');

      // Get the name of the clicked card
      const cardName = card.getAttribute('data-card-name');

      // Add the clicked card to pickedCards
      memoryGame.pickedCards.push(cardName);

      // If it's the first card, just save it and return
      if (!firstCard) {
        firstCard = card;
        return;
      }

      // If it's the second card, compare with the first
      const secondCard = card;
      const firstCardName = firstCard.getAttribute('data-card-name');

      // Check if pair
      if (memoryGame.checkIfPair(firstCardName, cardName)) {
        // Matched pair
        firstCard.classList.add('blocked');
        secondCard.classList.add('blocked');
      } else {
        // Not a pair, flip both cards back
        setTimeout(() => {
          firstCard.classList.toggle('turned');
          secondCard.classList.toggle('turned');
        }, 1000);
      }

      // Reset picked cards for the next turn
      memoryGame.pickedCards = [];
      firstCard = null;

      // Update score
      document.getElementById('pairs-clicked').innerText = memoryGame.pairsClicked;
      document.getElementById('pairs-guessed').innerText = memoryGame.pairsGuessed;

      // Check if game finished
      if (memoryGame.checkIfFinished()) {
        alert('Congratulations! You won!');
      }
    });
  });
});
