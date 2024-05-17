// Chapter 39 - 43

// Function | Switch | while | do while


// 1. Write a custom function power ( a, b ), to calculate the value of 

// a raised to b.

// Answer

// function power(a,b){
//   console.log(a**b)
// }

// power(4,6)


// 2. Any year is entered through the keyboard. Write a function to determine whether the year is a leap year or not.

// Leap years ..., 2012, 2016, 2020, …

// Answer

// function leapYear(year){
//   if(year%4==0){
//     console.log("Leap Year")
//   }else{
//     console.log("Not a Leap Year")
//   } 
  
// }

// leapYear(2012)


// 3. If the lengths of the sides of a triangle are denoted by a, b, and c, then area of triangle is given by

// area = S(S − a)(S − b)(S − c)

// where, S = ( a + b + c ) / 2

// Calculate area of triangle using 2 functions

// Answer

// function areaOfTriangle(a,b,c){
//   let s = (a+b+c)/2
//   let area = Math.sqrt(s*(s-a)*(s-b)*(s-c))
//   console.log(area)
// }

// areaOfTriangle(3,4,5)



// 4. Write a function that receives marks received by a student in 3  subjects and returns the average and percentage of these marks. there should be 3 functions one is the mainFunction and other are for average and percentage. Call those functions from mainFunction and display result in mainFunction.


// Answer

// function mainFunction(a,b,c){

//   function average(a,b,c){
//     let avg = (a+b+c)/3
//     console.log("avg " + avg)
//   }
//   function percentage(a,b,c){
//     let per = ((a+b+c)/300)*100
//     console.log("per " + per + "%")
//   }

//   average(a,b,c)
//   percentage(a,b,c)
  
// }

// mainFunction(50,60,70)


// 5. You have learned the function indexOf. Code your own custom  function that will perform the same functionality. You can code  for single character as of now.

// Answer

// function indexOf(str,char){
// var count = 0;
//   for(var i = 0 ; i < str.length ; i++ ){
//     if(str[i] == char){
//       count++
//     }
//   }
//   console.log(count)
  
// }

// indexOf("Hello","l")

// 6. Write a function to delete all vowels from a sentence. Assume  that the sentence is not more than 25 characters long.

// Answer

// function deleteVowels(str){
//   var vowels = "aeiouAEIOU"
//   var newStr = ""
//   for(var i = 0 ; i < str.length ; i++){
//     if(vowels.indexOf(str[i]) == -1){
//       newStr += str[i]
//     }
//   }
//   console.log(newStr)
// }

// deleteVowels("Hello")

// 7. Write a function with switch statement to count the number of  occurrences of any two vowels in succession in a line of text. 

// For example, in the sentence

// “Pleases read this application and give me gratuity”

// Such occurrences are ea, ea, ui.

// Answer




// 8. The distance between two cities (in km.) is input through the 

// keyboard. Write four functions to convert and print this 

// distance in meters, feet, inches and centimeters.

// 9. Write a program to calculate overtime pay of employees. 

// Overtime is paid at the rate of Rs. 12.00 per hour for every hour 

// worked above 40 hours. Assume that employees do not work 

// for fractional part of an hour.

// 10. A cashier has currency notes of denominations 10, 50 and 

// 100. If the amount to be withdrawn is input through the 

// keyboard in hundreds, find the total number of currency notes 

// of each denomination the cashier will have to give to the 

// withdrawer.