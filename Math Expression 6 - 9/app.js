// JavaScript Assignment 03

// Math Expression 06 - 09

// Display
// Q1. Write a program to take a number in a variable, do the
// required arithmetic to display the following result in your
// browser:

console.log("Q1. Write a program to take a number in a variable, do the required arithmetic to display the following result in your browser: ")
document.write("Q1. Write a program to take a number in a variable, do the required arithmetic to display the following result in your browser: ")

// Results

document.write("<br />")
document.write("<br />")

var a = 10;

console.log("Results:")
document.write("Results:")

document.write("<br />")

console.log("The Value of a is : " + a)
document.write("The Value of a is : " + a)

document.write("<br />")
document.write("<br />")


console.log("The Value of ++a is : " + ++a)
document.write("The Value of ++a is : " + a)

document.write("<br />")

console.log("Now the value of a is : " + a)
document.write("Now the value of a is : " + a)

document.write("<br />")
document.write("<br />")


console.log("The Value of a++ is : " + a)
document.write("The Value of a++ is : " + a++)
document.write("<br />")
console.log("Now the value of a is : " + a)
document.write("Now the value of a is : " + a)

document.write("<br />")
document.write("<br />")

console.log("The Value of 1 is : " + 1)
document.write("The Value of 1 is : " + a)
document.write("<br />")
console.log("Now the value of a is : " + a)
document.write("Now the value of a is : " + a)

document.write("<br />")
document.write("<br />")

console.log("The Value of a-- is : " + a)
document.write("The Value of a-- is : " + a--)
document.write("<br />")
console.log("Now the value of a is : " + a)
document.write("Now the value of a is : " + a)

document.write("<br />")
document.write("<br />")


// Display
// Q2. What will be the output in variables a, b & result after
// execution of the following script:

console.log("Q2. What will be the output in variables a, b & result after execution of the following script:")
document.write("Q2. What will be the output in variables a, b & result after execution of the following script:")
document.write("<br />")
document.write("<br />")

// Explain the output at each stage:
var a = 2, b = 1;
var result = --a - --b + ++b + b--;

// 1 - 0 + 1 + 1;
// 3 Ans

console.log("a is " + a)
document.write("a is " + a)

document.write("<br />")
document.write("<br />")


console.log("b is 2")
document.write("b is 2")

document.write("<br />")
document.write("<br />")


console.log( "result is " + result)
document.write( "result is " + result)
document.write("<br />")
document.write("<br />")


// display
// Q3. Write a program that takes input a name from user & greet the user.
console.log("Q3. Write a program that takes input a name from user & greet the user.");
document.write("Q3. Write a program that takes input a name from user & greet the user.");

document.write("<br />")
document.write("<br />")

// var greetname = prompt("Enter Your name")
var greetname = "Nabeel"

console.log("Welcome to " + greetname)
document.write("Welcome to " + greetname)

document.write("<br />")
document.write("<br />")

// Display
// Q5. Write a program to take input a number from user &
// display it’s multiplication table on your browser. If user
// does not enter a new number, multiplication table of 5
// should be displayed by default

console.log("Q5. Write a program to take input a number from user & display it’s multiplication table on your browser. If user does not enter a new number, multiplication table of 5 should be displayed by default")
document.write("Q5. Write a program to take input a number from user & display it’s multiplication table on your browser. If user does not enter a new number, multiplication table of 5 should be displayed by default")

// Solution

var table = 5 ; 
// Results
for (var i = 0 ; i <= 10 ; i++) {
    console.log(table + " X " + i + " = " + i * table)
    document.write(table + " X " + i + " = " + i * table)
    document.write("<br />")
    document.write("<br />")
}


// Display
// Q6. Take

console.log("Q6. Take")
document.write("Q6. Take")

// a) Take three subjects name from user and store them in 3
// different variables.

var subject1 ="English";
var subject2 ="Math";
var subject3 ="Urdu";

// b) Total marks for each subject is 100, store it in another
// variable.
var sub1Tot = 100;
var sub2Tot = 100;
var sub3Tot = 100;

// c) Take obtained marks for first subject from user and
// stored it in different variable.
var sub1Obt = 54;
var sub2Obt = 54;
var sub3Obt = 48;

// Solution

document.write("<br />")
document.write("<br />")

console.log("Subject" +  " Total Marks" + " Obtained Marks" + " Percentage")
document.write("Subject " +  " Total Marks  " + " Obtained Marks  " + "  Percentage  ")

document.write("<br />")
document.write("<br />")

console.log( subject1 + " " + sub1Tot + " " + sub1Obt + " " +  sub1Obt / sub1Tot * 100 + "%")
document.write( subject1 + "    " + sub1Tot + "   " + sub1Obt + "  " +  sub1Obt / sub1Tot * 100 + "%")

document.write("<br />")
document.write("<br />")

console.log( subject2 + " " + sub2Tot + " " + sub2Obt + " " +  sub2Obt / sub1Tot * 100 + "%")
document.write( subject2 + "    " + sub2Tot + "   " + sub2Obt + "  " +  sub2Obt / sub2Tot * 100 + "%")

document.write("<br />")
document.write("<br />")

console.log( subject3 + " " + sub3Tot + " " + sub3Obt + " " +  sub3Obt / sub1Tot * 100 + "%")
document.write( subject3 + "    " + sub3Tot + "   " + sub3Obt + "  " +  sub3Obt / sub3Tot * 100 + "%")

document.write("<br />")
document.write("<br />")

console.log(sub1Tot + sub2Tot + sub3Tot)
document.write(sub1Tot + sub2Tot + sub3Tot)

document.write(" ")

console.log(sub1Obt + sub2Obt + sub3Obt)
document.write(sub1Obt + sub2Obt + sub3Obt)
document.write(" ")

console.log((sub1Obt + sub2Obt +sub3Obt) / (sub1Tot + sub2Tot + sub3Tot) * 100 + "%")
document.write((sub1Obt + sub2Obt +sub3Obt) / (sub1Tot + sub2Tot + sub3Tot) * 100 + "%")
document.write("<br />")
document.write("<br />")


// ----- END -----
