// To run this code, be sure you're in the right directory;
// e.g. cd ~/code/hello-javascript/exercises
// or cd c:\code\hello-javascript\exercises and type:
// node 2-booleans-and-conditionals.js

// EXERCISE
// Continue your craps program.
// When executed, this program should print out two random
// numbers, one on each line, simulating the roll of two
// dice. Set two variables, with names that make sense,
// then write them out to the screen.
// If the numbers add up to 7 or 11, write a message that reads
// "YOU WIN!", if they add up to 2, 3, or 12, write a message
// that reads "YOU LOSE!", otherwise, write a message that
// reads "THE POINT IS {number}"

// HINTS
// Get a random number between 1 and 6 by doing:
// Math.floor(Math.random()*6+1)
// Log output to the screen with console.log(), e.g.
// console.log("hello");
// We can specify multiple conditions with || (OR) and && (AND)
// if (dinner === "tacos" || dinner === "pizza")

let firstDie = Math.floor(Math.random()*6+1);
let secondDie = Math.floor(Math.random()*6+1);
let total = firstDie + secondDie;

console.log(firstDie);
console.log(secondDie);
console.log("The total is: " + total);

if (total === 7 || total === 11) {
  console.log("YOU WIN!");
} else if (total === 2 || total === 3 || total === 12) {
  console.log("YOU LOSE!");
} else {
  console.log("THE POINT IS:" + total);
}
