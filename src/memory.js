class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = [];  
    this.pairsClicked = 0;  
    this.pairsGuessed = 0;  
  }

  shuffleCards() {
    for (let i = this.cards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
    }
    console.log("Shuffled cards:", this.cards);
  }

  checkIfPair(card1, card2) {
    this.pairsClicked++;
    if (card1 === card2) {
      this.pairsGuessed++;
      return true;
    } else {
      return false;
    }
  }

  checkIfFinished() {
    return this.pairsGuessed === this.cards.length / 2;
  }
}

const cards = [
  { id: 1, image: 'img1' }, { id: 2, image: 'img1' },
  { id: 3, image: 'img2' }, { id: 4, image: 'img2' },
  { id: 5, image: 'img3' }, { id: 6, image: 'img3' },
  { id: 7, image: 'img4' }, { id: 8, image: 'img4' },
  { id: 9, image: 'img5' }, { id: 10, image: 'img5' },
  { id: 11, image: 'img6' }, { id: 12, image: 'img6' },
];

const game = new MemoryGame(cards);
game.shuffleCards();
console.log(game.checkIfPair(cards[0], cards[1]));
console.log(game.checkIfFinished());
