const READLINE = require('readline-sync');

// declare and assign a variable for pennies using readlineSync
// ask the user how many pennies he/she wants change for

let pennies = READLINE.question('Please enter cents as a positive interger');

//console.log(pennies);




// declare, assign, and print how many quarters you can make out of the pennies

let quaters = Math.floor(pennies/25);

console.log(quaters, 'Quarters');
 let remainder = pennies%25;


// declare, assign, and print how many dimes you can make out of the pennies

let dimes = Math.floor(remainder/10);

console.log(dimes, 'Dimes');
remainder = remainder%10;

// declare, assign, and print how many nickels you can make out of the pennies

let nickels = Math.floor(remainder/5);

console.log(nickels, 'Nikels');




// declare, assign, and print how many pennies are left over





// make a change drawer using an object to
// store all of your change
// each property on the object should represent the particular coin
// use the dot operator on the object to assign how many of each coin you have
// many coins are in the drawer
// print the drawer to see that the values are correct
