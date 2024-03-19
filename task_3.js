/**
 Use a for...of loop to concatenate all the elements of an array into a single string.

Input: 
var numbers = ['Tom', 'Tim', 'Tin', 'Tik']

Output:
'TomTimTinTik'
 */

let together = "";
var numbers = ["Tom", "Tim", "Tin", "Tik"];
for (number of numbers) {
  together = together + number;
}
console.log(together);
