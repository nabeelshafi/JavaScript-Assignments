// Chapter 26-30
// Math Methods

// Q1. Write a program that takes a positive integer from user &
// display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number

// Answer

// var numUser = 3.45214;

// console.log(numUser)
// console.log(Math.round(numUser))
// console.log(Math.floor(numUser))
// console.log(Math.ceil(numUser))

// Q2. Write a program that takes a negative floating point
// number from user & display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number

// Answer

// var numUser = -2.673

// console.log(numUser)
// console.log(Math.round(numUser))
// console.log(Math.floor(numUser))
// console.log(Math.ceil(numUser))


// Q3. Write a program that displays the absolute value of a
// number.
// E.g. absolute value of -4 is 4 & absolute value of 5 is 5


// Answer

// var numUser3 = -4 ;
// console.log("The absolute value of " , numUser3 , " is " , Math.abs(numUser3))


// Q4. Write a program that simulates a dice using random()
// method of JS Math class. Display the value of dice in your
// browser.:

// Answer

// var random = Math.random() * 6 + 1 ;

// console.log("random dice value :" , Math.round(random))


// Q5. Write a program that simulates a coin toss using random()
// method of JS Math class. Display the value of coin in your
// browser

// Answer

// var coin = Math.random() * 2

// coin = Math.floor(coin)

// if(coin == 0 ){
//     console.log("Heads")
// }
// else{
//     console.log("Tails")
// }


// Q6. Write a program that shows a random number between 1
// and 100 in your browser.


// Answer

// var randomNum = Math.random() * 100 + 1
// randomNum = Math.floor(randomNum)

// console.log("random number between 1 and 100: " + randomNum)


// Q7. Write a program that asks the user about his weight. Parse
// the user input and display his weight in your browser.
// Possible user inputs can be:
// a. 50
// b. 50kgs
// c. 50.2kgs
// d. 50.2kilograms

// Answer

// var userInput = prompt("Enter your weight in kilogram")

// userInput = parseFloat(userInput).toFixed(1)

// console.log("The weight of user is " + userInput + " Kilograms")



// Q8. Write a program that stores a random secret number from
// 1 to 10 in a variable. Ask the user to input a number
// between 1 and 10. If the user input equals the secret
// number, congratulate the user.


// Answer

// var userNum = +prompt("Enter a number between 1 and 10")
// var random = Math.floor(Math.random() * 10 + 1)

// if(userNum == random){
//     console.log("You Win")
// }else{
//     console.log("Try again!")

// }
