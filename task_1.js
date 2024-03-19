/**
Write a JavaScript code to reverse the array colors "without using the reverse method".

Input:
const colors = ['red', 'blue', 'green', 'yellow', 'orange']


Output:
['orange', 'yellow', 'green', 'blue', 'red']
 */

// Using Reverse Method ---> 01
// const colors = ["red", "blue", "green", "yellow", "orange"];
// console.log(colors.reverse());

// Using for of method Without Using Reverse Method ---> 02
// const colors = ["red", "blue", "green", "yellow", "orange"];
// let reverse = [];
// for (let color of colors) {
//   reverse.unshift(color);
// }
// console.log(reverse);

// Using for loop Without Using Reverse Method ---> 03
// const reverse = [];
// const colors = ["red", "blue", "green", "yellow", "orange"];
// for (i = 0; i < colors.length; i++) {
//   let color = colors[i];
//   reverse.unshift(color);
// }
// console.log(reverse);

// Using while loop Without Using Reverse Method ---> 04
// const reverse = [];
// const colors = ["red", "blue", "green", "yellow", "orange"];
// let n = 0;
// while (n < colors.length) {
//   let color = colors[n];
//   reverse.unshift(color);
//   n++;
// }
// console.log(reverse);

// Using while loop decremental Without Using Reverse Method ---> 05
// const reverse = [];
// const colors = ["red", "blue", "green", "yellow", "orange"];
// let n = colors.length - 1;
// while (n >= 0) {
//   let color = colors[n];
//   reverse.push(color);
//   n--;
// }
// console.log(reverse);

// Using for loop decremental Without Using Reverse Method ---> 06
const reverse = [];
const colors = ["red", "blue", "green", "yellow", "orange"];
for (let n = colors.length - 1; n >= 0; n--) {
  let color = colors[n];
  reverse.push(color);
}
console.log(reverse);
