// JavaScript Assignment 03

// Variable legal and illegal

// 1. Declare 3 variable in one statement

console.log("Q1. Declare 3 variable in one statement?");
document.write("Q1. Declare 3 variable in one statement?" + "<br />" + "<br />");

var myName = "Nabeel Shafi", age = 23, enrol = "WMA";

document.write('var myName = "Nabeel Shafi", age = 23, enrol = "WMA";' + "<br />"  + "<br />" + "<br />");
console.log("Result: Name:" + myName + " Age:" + age + " enrol:" + enrol);


// 2. Declare 5 legal & 5 illegal variable names.

console.log("Q2. Declare 5 legal & 5 illegal variable names.");
document.write("Q2. Declare 5 legal & 5 illegal variable names?");

console.log("Answer : 5 Legal variable name");
document.write("<br />" + "<br />" + "Answer : 5 Legal variable name" + "<br />" + "<br />");

var myName = "'variable name Camel Case Allowed';";

console.log("var myName = " + myName);
document.write("var myName = " + myName + "<br />");

var APPUSER = "'variable name UPPERCASE allowed';";

console.log("var APPUSER = "+APPUSER);
document.write("var APPUSER = "+APPUSER + "<br />");

var _underScoreLegal = "'Variable names underscore allowed';";

console.log("var _underScoreLegal= " + _underScoreLegal);
document.write("var _underScoreLegal= " + _underScoreLegal + "<br />");

var $dollarAllowed = "'variable name Dollar sign allowed';";

console.log("var $dollarAllowed = " + $dollarAllowed);
document.write("var $dollarAllowed = " + $dollarAllowed + "<br />");

var myPage1 = "'variable name end a number allowed';";

console.log("var myPage1 = " + myPage1);
document.write("var myPage1 = " + myPage1 + "<br />");

console.log("Answer : 5 illegal variable name");
document.write("<br />" + "<br />" + "Answer : 5 illegal variable name" + "<br />" + "<br />");

// var 1myPage = "Variable names start with a number not allowed";

console.log("var 1mypage = Variable names start with a number not allowed");
document.write("var 1mypage = 'Variable names start with a number not allowed';" + "<br />");

// var my Page = "Variable names Space not allowed";

console.log("var my page = Variable names space not allowed.");
document.write("var my Page = 'Variable names Space not allowed';" + "<br />");

// var @myPage = "Variable names Special characters not allowed";

console.log("var @myPage = Variable names special characters not allowed")
document.write("var @myPage = 'Variable names Special characters not allowed';" + "<br />");

// var if = "Variable names JavaScript Reserved Words not Allowed";

console.log("var if = Variable names JavaScript reserved words not allowed")
document.write("var if = 'Variable names JavaScript Reserved Words not Allowed';" + "<br />");

// var my.page = "variable name dots not allowed";

console.log("var my.page = variable name dots not allowed")
document.write("var my.page = 'variable name dots not allowed';" + "<br />");

// Q3. Display this in your browser) 

console.log("Q3. Display this in your browser")
document.write("<br />" + "<br />" + "Q3. Display this in your browser.")
document.write("<br />")

document.write("<br />")
document.write('a) A heading starting “Rules for naming JS variables”')
console.log('a) A heading starting “Rules for naming JS variables”') 

document.write("<br />")
document.write(' b) Variable names can only contain number, $ and _. For example $my_1stVariable')
console.log(' b) Variable names can only contain number, $ and _. For example $my_1stVariable');

document.write("<br />")
document.write('c) Variables must begin with a letter, $ or _. For example $name, _name or name')
console.log('c) Variables must begin with a letter, $ or _. For example $name, _name or name');

document.write("<br />")
document.write('d) Variable names are case sensitive')
console.log('d) Variable names are case sensitive');

document.write("<br />")
document.write('e) Variable names should not be JS Keyword ');
console.log('e) Variable names should not be JS Keyword ');


// ----- END -----