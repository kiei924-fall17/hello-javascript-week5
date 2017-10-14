// To run this code, be sure you're in the right directory;
// e.g. cd ~/code/hello-javascript/exercises
// or cd c:\code\hello-javascript\exercises and type:
// node 3-arrays.js

// EXERCISE
// Create a "shared" shopping list with your friend
// Create two data structures - one for your list of stuff, and one
// for your friend, e.g. you want milk, eggs, and bacon, and
// your friend wants beer, cookies, and apples.
// Programmatically combine the two arrays into a single list,
// sort the result (alphabetically), and write it to the screen.

// HINTS
// Learn to read the documentation!
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
// concat(), sort() functions

let myStuff = ["milk", "eggs", "bacon"];
let friendStuff = ["beer", "cookies", "apples"];

let combinedStuff = myStuff.concat(friendStuff);
let sortedStuff = combinedStuff.sort();

console.log(sortedStuff);
