// Chapter 35 - 38

// Function

// Q1. Write a function that displays current date & time in your browser.

// Answer 

// let now = new Date();
// console.log(now.toString());

// Q2. Write a function that takes first & last name and then it greets the user using his full name.

// Answer 

// function greet(){
//   var firstName = prompt("Enter first name")
//   var lastName = prompt("Enter last name")
//   console.log("Welcome to " + firstName + " " + lastName)
// }

// greet()

// Q3. Write a function that adds two numbers (input by user) and returns the sum of two numbers.

// Answer

// var num1 = +prompt("Enter a num1")
// var num2 = +prompt("Enter a num2")

// function add(num1,num2){
//   console.log("results" , num1 + num2)
// }

// add(num1,num2)

// Q4. Calculator: Write a function that takes three arguments num1, num2 & operator & compute the desired operation. Return and show the desired result in your browser.

// Answer

// var num1 = +prompt("Enter a num1")
// var num2 = +prompt("Enter a num2")
// var opt = prompt("Enter a opt")

// function solve(num1,opt,num2){
//   if(opt == "+"){
//   console.log("Sum of ", num1 + opt + num2 , "=", num1 + num2)
//   }else if(opt == "-"){
//     console.log("Subs of ", num1 + opt + num2 , "=", num1 - num2)
//   }else if(opt == "*"){
//     console.log("Subs of ", num1 + opt + num2 , "=", num1 * num2)
//   }else if(opt == "/"){
//     console.log("Subs of ", num1 + opt + num2 , "=", num1 / num2)
//   }
// }

// solve(num1,opt,num2)


// Q5. Write a function that squares its argument.

// Answer

//  var num = +prompt("Enter a num")
//  function square(num){
//   console.log(num + " Squares is " + (num * num))
// }
// square(num)


// Q6. Write a function that computes factorial of a number.

// Answer

// var num = +prompt("Enter a num")
// function factorial(num){
//   console.log(num + " Factorial is " + (num * num))
// }
// factorial(num)


// Q7. Write a function that take start and end number as inputs & display counting in your browser.

// Answer

// var start = +prompt("Enter a start") 
// var end = +prompt("Enter a end")

// function count(start,end){
//   for(let i = start; i <= end; i++){
//     console.log(i)
//   }
// }

// count(start,end)

// Q8. Write a nested function that computes hypotenuse of a right angle triangle. 
// Hypotenuse2 = Base2 + Perpendicular2

// Take base and perpendicular as inputs.

// Outer function : calculateHypotenuse()

// Inner function: calculateSquare()

// Answer

// function calculateHypotenuse(base,perpendicular){
//   function calculateSquare(num){
//     return num * num
//   }
//   return Math.sqrt(calculateSquare(base) + calculateSquare(perpendicular))
// }

// let calHypotenuse = calculateHypotenuse(3,4)
// console.log(calHypotenuse)

// Q9. Write a function that calculates the area of a rectangle.

//  A = width * height

//  Pass width and height in following manner:

// i. Arguments as value

// ii. Arguments as variables

// Answer

// function area(width,height){
//   return width * height 
// }

// let areaOfRec = area(4,5)
// console.log(areaOfRec)


// Q10. Write a JavaScript function that checks whether a passed string is palindrome or not?

// A palindrome is word, phrase, or sequence that reads the same backward as 

// forward, e.g., madam.

// Answer

// function palindrome(str){
//   var reverse = str.split("").reverse().join("")

//   if (str == reverse) {
//      console.log(str + " is plindrome word")
//   }else{
//     console.log(str + " is not plindrome word")
//   }
// }

// palindrome("madam")


// Q11. Write a JavaScript function that accepts a string as a 

// parameter and converts the first letter of each word of the string in upper case. 

// EXAMPLE STRING : 'the quick brown fox'

// EXPECTED OUTPUT : 'The Quick Brown Fox'

// Answer

// var str = "tHe quiCk brOwn fOx"

// function upperCase(str){
//   var tempArr = str.split(" ")
//   console.log(tempArr)
//   for (let i = 0; i < tempArr.length; i++) {
//     tempArr[i] = tempArr[i].charAt(0).toUpperCase() + tempArr[i].slice(1).toLowerCase()
//   }
//   console.log(tempArr.join(" "))
// }

// upperCase(str)


// Q12. Write a JavaScript function that accepts a string as a 

// parameter and find the longest word within the string. 

// EXAMPLE STRING : 'Web Development Tutorial'

// EXPECTED OUTPUT : 'Development'

// Answer
// var str = "Web Development Tutorial"

// function longestWord(str){

//   var tempArr = str.split(" ");
//   var longestWord = "";
//   for (var i = 0 ;i < tempArr.length ;i++){
//     if (tempArr[i].length > longestWord.length) {
//        longestWord = tempArr[i];
//     }
    
//   }
//   console.log(longestWord)
  
// }

// longestWord(str)


// Q13. Write a JavaScript function that accepts two arguments, a string and a letter and the function will count the number of occurrences of the specified letter within the string. 

// Sample arguments : 'JSResourceS.com', 'o'

// Answer

// function countLetter(str,letter){
  
//   var count = 0;
//   var tempArr = str.split("")

//   for (let i = 0; i < tempArr.length ; i++) {
//     if (tempArr[i] == letter){
//       count++
//     }
//   }

//   console.log(str + " has " + count + " " + letter)
  
// }

// countLetter("JSResourceS.com","o")


// Q14. The Geometrizer Create 2 functions that calculate properties of a circle, using the definitions here.

// Create a function called calcCircumference:

// • Pass the radius to the function.

// • Calculate the circumference based on the radius, and output 

// "The circumference is NN".

// Create a function called calcArea:

// • Pass the radius to the function.

// • Calculate the area based on the radius, and output "The area is NN".

// Circumference of circle = 2πr

// Area of circle = πr2

// Answer

function calcCircumference(radius){
  var circumference = 2 * Math.PI * radius
  console.log("The circumference is " + circumference)
}

calcCircumference(5)

// ===== end =====