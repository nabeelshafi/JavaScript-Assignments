// JavaScript Assignment 03

// Math Expression

// Q1. Write a program that take two numbers & add them in a new variable. Show the result in your browser.

// Display
console.log("Q1. Write a program that take two numbers & add them in a new variable. Show the result in your browser.")
document.write("Q1. Write a program that take two numbers & add them in a new variable. Show the result in your browser.")
document.write("<br />")


// Solution Q1
var a = 3;
var b = 5;
var ans1 = a + b;
console.log("Sum of 3 and 5 is " + ans1);
document.write("<br />")
document.write("Answer : Sum of 3 and 5 is " + ans1);
document.write("<br />")
document.write("<br />")

// Q2. Repeat task1 for subtraction, multiplication, division & modulus.

// Display
console.log("Q2. Repeat task1 for subtraction, multiplication, division & modulus.")
document.write("Q2. Repeat task1 for subtraction, multiplication, division & modulus.")
document.write("<br />")

// Solution Q2 Task 1 Substraction

var ansSub = b - a;
console.log("Subtract : 5 - 3 is " + ansSub);
document.write("<br />")
document.write("Subtract : 5 - 3 is " + ansSub);

// Solution Q2 Task 2 Multiplication

var ansMulti = a * b;
console.log("Multiple: 3 X 5 is " + ansMulti);
document.write("<br />")
document.write("Multiple: 3 X 5 is " + ansMulti);

// Solution Q2 Task 3 Division 

var ansDivi = b / a;
console.log("Divide: 5 ÷ 3 is " + ansDivi);
document.write("<br />")
document.write("Divide: 5 ÷ 3 is " + ansDivi);

// Solution Q2 Task 4 Modules

var ansMod = b % a;
console.log("Modules: 5 % 3 is " + ansMod);
document.write("<br />")
document.write("Modules: 5 % 3 is " + ansMod);


// 3. Do the following using JS Mathematic Expressions

// Solution
document.write("<br />")
document.write("<br />")
console.log("Q3. Do the following using JS Mathematic Expressions.")
document.write("Q3. Do the following using JS Mathematic Expressions.")
document.write("<br />")
document.write("<br />")
// a. Declare a variable.
// b. Show the value of variable in your browser like “Value after variable declaration is: ??”.

var initialValue;
console.log("Value after declaration is " + initialValue);
document.write("Value after declaration is " + initialValue);
document.write("<br />")
document.write("<br />")

// c. Initialize the variable with some number.
// d. Show the value of variable in your browser like “Initial value: 5”.

initialValue = 5;
console.log("Initial value: " + initialValue)
document.write("Initial value: " + initialValue)
document.write("<br />")
document.write("<br />")

// e. Increment the variable.
// f. Show the value of variable in your browser like “Value after increment is: 6”.

initialValue++;
console.log("Value after increment is: " + initialValue)
document.write("Value after increment is: " + initialValue)
document.write("<br />")
document.write("<br />")

// g. Add 7 to the variable.
// h. Show the value of variable in your browser like “Value after addition is: 13”.

initialValue = initialValue + 7;
console.log("Value after addition is: " + initialValue)
document.write("Value after addition is: " + initialValue)
document.write("<br />")
document.write("<br />")


//i. Decrement the variable.
// j. Show the value of variable in your browser like “Value after decrement is: 12”;

initialValue--;
console.log("Value after decrement is: " + initialValue)
document.write("Value after decrement is: " + initialValue)
document.write("<br />")
document.write("<br />")


// k. Show the remainder after dividing the variable’s value  by 3.  
// l. Output : “The remainder is : 0

initialValue = initialValue % 3;
console.log("The remainder is: " + initialValue)
document.write("The remainder is: " + initialValue)
document.write("<br />")
document.write("<br />")


// Q4. Cost of one movie ticket is 600 PKR. Write a script to store ticket price in a variable & calculate the cost of buying 5 tickets to a movie. Example output:

// Display
console.log("Q4. Cost of one movie ticket is 600 PKR. Write a script to store ticket price in a variable & calculate the cost of buying 5 tickets to a movie. Example output:")
document.write("Q4. Cost of one movie ticket is 600 PKR. Write a script to store ticket price in a variable & calculate the cost of buying 5 tickets to a movie. Example output:")
document.write("<br />")

// solution
document.write("<br />")
var ticketPrice = 600;
var ticketQty = 5;
var ticketCost = ticketPrice * ticketQty;
document.write("Total cost to buy " + ticketQty + " tickets to movie is " + ticketCost + "PKR")
document.write("<br />")
document.write("<br />")

// Display

// Q5. Write a script to display multiplication table of any  number in your browser. E.g

console.log("Q5. Write a script to display multiplication table of any number in your browser. E.g")
document.write("Q5. Write a script to display multiplication table of any number in your browser. E.g")
document.write("<br />")
document.write("<br />")

// Solution 

var table = 4;
for (var i = 0; i <= 10; i++) {
  console.log(table + " X " + i + " = " + table * i)
  document.write(table + " X " + i + " = " + table * i + "<br />")
  document.write("<br />")
}


// Display 
// Q6. The Temperature Converter: It’s hot out! Let’s make a converter based on the steps here.

console.log("Q6. The Temperature Converter: It’s hot out! Let’s make a converter based on the steps here.")
document.write("Q6. The Temperature Converter: It’s hot out! Let’s make a converter based on the steps here.")
document.write("<br />")
document.write("<br />")

// a. Store a Celsius temperature into a variable.
var celsius = 25;
var forCtF = (celsius * 9 / 5) + 32;
// b. Convert it to Fahrenheit & output “NNoC is NNoF”.
console.log(celsius + " C is : " + forCtF + " F ")
document.write(celsius + "<sup>o</sup>C is : " + forCtF + "<sup>o</sup>F")
document.write("<br />")
document.write("<br />")



// c. Now store a Fahrenheit temperature into a variable.
var fahrenheit = 70;
// d. Convert it to Celsius & output “NNoF is NNoC”.

var forFtC = (fahrenheit - 32) * 5 / 9;
// b. Convert it to Fahrenheit & output “NNoC is NNoF”.
console.log(fahrenheit + " F is : " + forFtC + " C ")
document.write(fahrenheit + "<sup>o</sup>F is : " + forFtC + "<sup>o</sup>C")
document.write("<br />")
document.write("<br />")


// Display
// Q7. Write a program to implement checkout process of a shopping cart system for an e-commerce website. Store the following in variables;

console.log("Q7. Write a program to implement checkout process of a shopping cart system for an e-commerce website. Store the following in variables?")
document.write("Q7. Write a program to implement checkout process of a shopping cart system for an e-commerce website. Store the following in variables?")

document.write("<br />")
document.write("<br />")

// Solution

// a. Price of item 1
var items1 = 650;

// b. Price of item 2
var items2 = 100;

// c. Ordered quantity of item 1
var itm1Qty = 3;
var ord1Total = items1 * itm1Qty ;


// d. Ordered Quantity of item 2
var itm2Qty = 7;
var ord2Total = items2 * itm2Qty ;

// e. Shipping charges
var shpCha = 100;

var salesTotal = ord1Total + ord2Total + shpCha;

// Results Shoping Cart

console.log("Price of item 1 is " + items1);
document.write("Price of item 1 is " + items1);

document.write("<br />")
document.write("<br />")


console.log("Quantity of item 1 is " + itm1Qty);
document.write("Quantity of item 1 is " + itm1Qty);

document.write("<br />")
document.write("<br />")

console.log("Price of item 2 is " + items2);
document.write("Price of item 2 is " + items2);

document.write("<br />")
document.write("<br />")

console.log("Quantity of item 2 is " + itm2Qty);
document.write("Quantity of item 2 is " + itm2Qty);

document.write("<br />")
document.write("<br />")

console.log("Total cost of your order is " + salesTotal);
document.write("Total cost of your order is " + salesTotal);

document.write("<br />")
document.write("<br />")
// Display

// Q8. Store total marks & marks obtained by a student in 2
// variables. Computer the percentage & show the result in
// your browser

console.log("Q8. Store total marks & marks obtained by a student in 2 variables. Compute the percentage & show the result in your browser?")
document.write(" Q8. Store total marks & marks obtained by a student in 2 variables. Compute the percentage & show the result in your browser?")

// Solution

var totalMarks = 980;
var marksObt = 804;
// var perResults = ;

// Print

console.log("Total marks : " + totalMarks);
document.write("Total marks : " + totalMarks);
document.write("<br />")
document.write("<br />")

console.log("Marks Obtained : " + marksObt);
document.write("Marks Obtained : " + marksObt);
document.write("<br />")
document.write("<br />")


console.log("Precentage : " + marksObt / totalMarks * 100 + "%");
document.write("Precentage : " + marksObt / totalMarks * 100 + "%");
document.write("<br />")
document.write("<br />")

// Display
// Q9. Assume we have 10 US dollars & 25 Saudi Riyals. Write a
// script to convert the total currency to Pakistani Rupees.
// Perform all calculations in a single expression.
// (Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee
// and 1 Saudi Riyal = 28 Pakistani Rupee)

console.log("Q9. Assume we have 10 US dollars & 25 Saudi Riyals. Write a script to convert the total currency to Pakistani Rupees. Perform all calculations in a single expression. (Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee and 1 Saudi Riyal = 28 Pakistani Rupee)")
document.write("Q9. Assume we have 10 US dollars & 25 Saudi Riyals. Write a script to convert the total currency to Pakistani Rupees. Perform all calculations in a single expression. (Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee and 1 Saudi Riyal = 28 Pakistani Rupee)")

// Solution

var $cur = 104.80 ;
var riy = 28;

var $tpkr = $cur * 10;
var riytpkr = riy * 25;

var curRes = $tpkr + riytpkr ; 

// Results 

document.write("<br />")
document.write("<br />")
console.log("Total Curency in PKR: " + curRes);
document.write("Total Curency in PKR: " + curRes)
document.write("<br />")
document.write("<br />")


// Display

// Q10. Write a program to initialize a variable with some 
// number and do arithmetic in following sequence:

console.log("Q10. Write a program to initialize a variable with some number and do arithmetic in following sequence:")
document.write("Q10. Write a program to initialize a variable with some number and do arithmetic in following sequence:")

document.write("<br />")
document.write("<br />")

// a. Add 5
// b. Multiply by 10
// c. Divide the result by 2
// Perform all calculations in a single expression

var athm = 5 * 10 / 2 ;
//       = 10 / 2 = 5 * 5 = 25 Ans

// Results

console.log(athm + " Ans")
document.write(athm + " Ans")

document.write("<br />")
document.write("<br />")


// Display
// Q11. The Age Calculator: Forgot how old someone is? Calculate it!
console.log("Q11. The Age Calculator: Forgot how old someone is? Calculate it!")
document.write("Q11. The Age Calculator: Forgot how old someone is? Calculate it!")

document.write("<br />")
document.write("<br />")

// solution

// a. Store the current year in a variable.
var curYear = 2016;

// b. Store their birth year in a variable.
var birthYear = 1992;

// c. Calculate their 2 possible ages based on the stored values.
var ageCal = curYear - birthYear;

// Results 

console.log("Current Year :" + curYear);
document.write("Current Year : " + curYear)

document.write("<br />")
document.write("<br />")

console.log("Birth Year :" + birthYear);
document.write("Birth Year : " + birthYear)

document.write("<br />")
document.write("<br />")

console.log("Your Age is :" + ageCal);
document.write("Your Age is : " + ageCal)


// Display
document.write("<br />")
document.write("<br />")

// Q12. The Geometrizer: Calculate properties of a circle.
console.log("Q12. The Geometrizer: Calculate properties of a circle.")
document.write("Q12. The Geometrizer: Calculate properties of a circle.")

document.write("<br />")
document.write("<br />")

// a. Store a radius into a variable.
var radius = 20;
console.log("Radius of a circle : " + radius);
document.write("Radius of a circle : " + radius)

document.write("<br />")
document.write("<br />")

// b. Calculate the circumference based on the radius, and
// output “The circumference is NN”.
// (Hint : Circumference of a circle = 2 π r , π = 3.142)
var circumference = 2 * 3.142 * radius ;
console.log("The circumference is : " + circumference);
document.write("The circumference is : " + circumference);

document.write("<br />")
document.write("<br />")

// Calculate the area based on the radius, and output “The
// area is NN”. (Hint : Area of a circle = π r2, π = 3.142)
console.log("The area is : " + 3.142 * radius**2) ;
document.write("The area is : " + 3.142 * radius**2) ;


// Display

// 13. The Lifetime Supply Calculator: Ever wonder how
// much a “lifetime supply” of your favorite snack is?
// Wonder no more.

document.write("<br />")
document.write("<br />")

console.log("Q13. The Lifetime Supply Calculator: Ever wonder how much a “lifetime supply” of your favorite snack is? Wonder no more.")
document.write("Q13. The Lifetime Supply Calculator: Ever wonder how much a “lifetime supply” of your favorite snack is? Wonder no more.")

document.write("<br />")
document.write("<br />")

// a. Store your favorite snack into a variable
var favSnack = "chocolate chip"

// b. Store your current age into a variable.
var currentAge = 15;

// c. Store a maximum age into a variable.
var maxAge = 65 ;

// d. Store an estimated amount per day (as a number).
var amtSnack = 3;

// e. Calculate how many would you eat total for the rest of
// your life.

// Solution
var snackCal = ( maxAge - currentAge ) * amtSnack  ;

// Results

console.log("Favourite Snack : " + favSnack)
document.write("Favourite Snack : " + favSnack)

document.write("<br />")
document.write("<br />")

console.log("Current age : " + currentAge)
document.write("Current age : " + currentAge)

document.write("<br />")
document.write("<br />")

console.log("Estimated Maximum age : " + maxAge)
document.write("Estimated Maximum age : " + maxAge)
document.write("<br />")
document.write("<br />")

console.log("Amount of snacks per day : " + amtSnack)
document.write("Amount of snacks per day : " + amtSnack)

document.write("<br />")
document.write("<br />")

console.log("You will need " + snackCal + " " + favSnack + " to last you until the ripe old age of " + maxAge)
document.write("You will need " + snackCal + " " + favSnack + " to last you until the ripe old age of " + maxAge)

document.write("<br />")
document.write("<br />")



// ----- END -----