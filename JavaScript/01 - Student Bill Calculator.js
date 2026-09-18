/*  
Problem: Student Bill Calculator

Create a JavaScript program that:

1. Prices of 3 products.
2. Calculates the total price .
3. Calculates the average price.
4. Applies a 10% discount and calculates the discount amount.
5. Calculates the final price after discount.
6. Divides the final price between 2 people.
7. Converts 125 minutes into hours and remaining minutes.
8. Swaps the prices of Product 1 and Product 2 and displays the new values.
*/ 

// Product prices
let price1 = 500;
let price2 = 300;
let price3 = 200;

let total = price1 + price2 + price3;

let average = total / 3;

let discount = total * 10 / 100;

let finalPrice = total - discount;

let eachPerson = finalPrice / 2;

 let totalMinutes = 125;
let hours = Math.floor(totalMinutes / 60);
let remainingMinutes = totalMinutes % 60;

// 7. Swap 
let temp = price1;
 price1 = price2;
price2 = temp;

// Output
console.log("Total Price:", total);
console.log("Average Price:", average);
console.log ("Discount:", discount);
console.log("Final Price:", finalPrice);
 console.log("Each Person Pays:", eachPerson);
console.log("Time:", hours, "hours", remainingMinutes, "minutes");
console.log("After Swap:");
console.log ("Price 1:", price1);
console.log("Price 2:", price2);

