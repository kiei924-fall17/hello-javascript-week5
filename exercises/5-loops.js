// To run this code, be sure you're in the right directory;
// e.g. cd ~/code/hello-javascript/exercises
// or cd c:\code\hello-javascript\exercises and type:
// node 5-loops.js

// EXERCISE
// Build a deck of cards. Given the following arrays, use a loop
// (or two... hint, hint) to write out every combination to the
// screen.
let ranks = [2, 3, 4, 5, 6, 7, 8, 9, 10, "Jack", "Queen", "King", "Ace"];
let suits = ["Clubs", "Diamonds", "Hearts", "Spades"];

for (let i=0; i<ranks.length; i++) {
  for (let j=0; j<suits.length; j++) {
    console.log(ranks[i] + " of " + suits[j]);
  }
}
