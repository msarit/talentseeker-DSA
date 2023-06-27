let deck = [];
const ranks = [
  "Ace",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "Jack",
  "Queen",
  "King",
];
const suits = ["Clubs", "Diamonds", "Hearts", "Spades"];

// my algorithm depends on the ranks and suits arrays already being sorted 😞
function buildSortedDeck() {
  ranks.forEach((rank) => {
    suits.forEach((suit) => {
      deck.push(`${rank} of ${suit}`);
    });
  });
  console.log(deck);
}

// buildSortedDeck();
