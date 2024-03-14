// JavaScript Chapter 12-13

// Q1. Write a program that takes a character (number or string) in a variable & checks whether the given input is a number, uppercase letter or lower case letter. (Hint: ASCII codes:- A=65, Z=90, a=97, z=122).

// var userInput = prompt("enter a letter or number ")

//  if(!isNaN(userInput)){
//   console.log(userInput, " is a number")
// }
//  else if(userInput === userInput.toUpperCase()){
//   console.log(userInput," is a Upper Case Letter")
// }else if(userInput === userInput.toLowerCase()){
//   console.log(userInput," is a Lower Case Letter")
// }
// else{
//   console.log(userInput," is mix character")
// }


//Q2. Write a JavaScript program that accept two integers and display the larger. Also show if the two integers are equal

// var userInput1 = +prompt("Enter a number")
// var userInput2 = +prompt("Enter a number")

// if(userInput1 == userInput2){
//   console.log(userInput1, " is a equal ", userInput2)
// }else if(userInput1 < userInput2){
//   console.log(userInput1, " is smaller number ", userInput2)
// }else if(userInput1 > userInput2){
//   console.log(userInput1," is a larger number ",userInput2)
// }else{
//   console.log("ma nhi batao ga!")
// }


// Q3. Write a program that takes input a number from user & state whether the number is positive, negative or zero.

// var userInput = +prompt("Enter a number")

// if(!isNaN(userInput)){
//   if(userInput > 0){
//     console.log("Number is positive")
//   }else if(userInput < 0){
//     console.log("Number is nagative")
//   }else{
//     console.log("Number is zero")
//   }
// }else{
//   console.log("invaild number")
// }


// Q4. Write a program that takes a character (i.e. string of length 1) and returns true if it is a vowel, false otherwise

// var userInput = prompt("Enter a Letter")

// var volLet = ["a","e","i","o","u"]

// if(isNaN(userInput)){
//   if(userInput.length == 1){
//     if(userInput === volLet[0] || userInput === volLet[1] || userInput === volLet[2] || userInput === volLet[3] || userInput === volLet[4]){
//       console.log(userInput," is a vowel")
//     }else{
//       console.log(userInput," is not a vowel")
//     }
//   }else{
//     console.log("please enter 1 letter")
//   }
// }else{
//   console.log("invaild letter")
// }


// Q5. Write a program that

// a. Store correct password in a JS variable.
// b. Asks user to enter his/her password
// c. Validate the two passwords:
// i. Check if user has entered password. If not, then give message “ Please enter your password”
// ii. Check if both passwords are same. If they are 
// same, show message “Correct! The password you entered matches the original password”. Show  “Incorrect password” otherwise.


// var userPass = prompt("Enter password")
// var orgPass = "strongpassword"

// if(userPass !== ""){
//   if(userPass === orgPass){
//     console.log("Login Successfully")
//   }else{
//     console.log("Password invaild")
//   }
// }else{
//   console.log("Please enter your password")
// }


// Q6. This if/else statement does not work. Try to fix it:


// var greeting;
// var hour = 13;
// if (hour < 18) {
// greeting = "Good day";
// }else{
// greeting = "Good evening";
// }

// console.log(greeting)


// Q7. Write a program that takes time as input from user in 24 hours clock format like: 1900 = 7pm. Implement the following case using if, else & else if statements


// var userTime = prompt("Enter time 24 hours clock format")

// if(userTime.length == 4 && userTime < 2400){
// if(userTime >= 0000 && userTime < 1200){
//   console.log(userTime + " Good Morning")
// }else if(userTime >= 1200 && userTime < 1700){
//   console.log(userTime + " Good Afternoon")
// }else if(userTime >= 1700 && userTime < 2100){
//   console.log(userTime + " Good Evening")
// }else if(userTime >= 2100 && userTime < 2359){
//   console.log(userTime + " Good Night")
// }else{
//   console.log("invail time")
// }
// }else{
//   console.log("Please enter a Correct time")
// }
  

// ----- END -----