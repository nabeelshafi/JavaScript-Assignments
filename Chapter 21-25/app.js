// Chapter 21-25
// String Methods

// Q1. Write a program that takes two user inputs for first and
// last name using prompt and merge them in a new variable
// titled fullName. Greet the user using his full name.


// Answer

// var firstname = prompt("Enter your firstname")
// var lastname = prompt("Enter your lastname")

// var fullname = firstname + " " +  lastname
// console.log(fullname)


// Q2. Write a program to take a user input about his favorite
// mobile phone model. Find and display the length of user
// input in your browser


// Answer

// var favModel = prompt("Enter your favorite mobile model")

// var strLength = favModel.length

// console.log("My favorite phone is: " + favModel + " Length of string: " + strLength)


// Q3. Write a program to find the index of letter “n” in the word
// “Pakistani” and display the result in your browser .

// Answer

// var str1 = "Pakistani"

// console.log("Pakistani Index of 'n': " + str1.indexOf('n'))


// Q4. Write a program to find the last index of letter “l” in the
// word “Hello World” and display the result in your browser.

// Answer

// var str2 = "Hello World"

// console.log("Hello World Last index of 'l': " + str2.lastIndexOf('l'))


// Q5. Write a program to find the character at 3rd index in the
// word “Pakistani” and display the result in your browser.


// Answer

// var str3 = "Pakistani"

// // Method 1
// console.log(str3 + " Character at index 3: " + str3[3])
// // Method 2
// console.log(str3 + " Character at index 3: " + str3.charAt(3))


// Q6. Repeat Q1 using string concat() method.

// Answer

// var firstname = "Nabeel "
// var lastname = "Shafi"

// // Method1
// console.log(firstname + lastname)
// // Method2
// var fullname = firstname.concat(lastname)

// console.log(fullname)


// Q7. Write a program to replace the “Hyder” to “Islam” in the
// word “Hyderabad” and display the result in your browser.

// Answer

// var cityname = "Hyaderabad";

// Method 1
// console.log("Islam" + cityname.slice(cityname.indexOf('abad')))

// Method 2
// for(var i = 0 ; i < cityname.length ; i++){
//     if(cityname.slice(i , i + 6) == "Hyader"){
//     console.log("Islam" + cityname.slice(i + 6))
//     }
// }


// Q8. Write a program to replace all occurrences of “and” in the
// string with “&” and display the result in your browser.
// var message = “Ali and Sami are best friends. They play cricket and
// football together.”;

// Answer

// var message ="Ali and Sami are best friends. They play cricket and football together.";

// Method 1 usind regax

// console.log(message.replace(/and/g,"&"))

// Method 2 Using Method

// console.log(message.replaceAll("and","&"))


// 9. Write a program that converts a string “472” to a number
// 472. Display the values & types in your browser.

// Answer

// var str4 = "472"

// var conNum = Number (str4)
// console.log("Before: " + str4)
// console.log("Type: " + typeof str4)
// console.log("After: " + conNum)
// console.log("Type: " + typeof conNum)


// Q10. Write a program that takes user input. Convert and
// show the input in capital letters.

// Answer

// var userInput = prompt("Enter Word")

// console.log(userInput.toUpperCase())


// Q11. Write a program that takes user input. Convert and
// show the input in title case.

// Answer

// var userInput1 = prompt("Enter word")

// console.log(userInput1[0].toUpperCase() + userInput1.slice(1).toLowerCase())


// 12. Write a program that converts the variable num to
// string.
// var num = 35.36 ;
// Remove the dot to display “3536” display in your browser.


// Answer

// var num = 35.36;
// var conStr = num.toString()
// var removeDot = conStr.slice(0 , conStr.indexOf('.')) + conStr.slice(conStr.indexOf(".") + 1)
// console.log(conStr)


// Q13. Write a program to take user input and store username
// in a variable. If the username contains any special symbol
// among [@ . , !], prompt the user to enter a valid username.
// For character codes of [@ .

// Note:
// ASCII code of ! is 33
// ASCII code of , is 44
// ASCII code of . is 46
// ASCII code of @ is 64


// Answer

// var flag = true;
// var username = prompt("Enter your username");

// for (var i = 0; i < username.length; i++) {

//     var charCode = username.charCodeAt(i)
//     if (charCode === 33 || charCode === 44 || charCode === 46 || charCode === 64) {
//         flag = false;
//         break
//     }

// }

// while(!flag){

//     username = prompt("enter valid usernamer without dash [@, !, .]")
//     flag = true;
//     for (var i = 0; i < username.length; i++) {

//         var charCode = username.charCodeAt(i)
//         if (charCode === 33 || charCode === 44 || charCode === 46 || charCode === 64) {
//             flag = false;
//             break
//         }

//     }

// }

// console.log("Valid username:", username);


// Q14. You have an array
// A = [cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an
// array. After searching, prompt the user whether the given
// item is found in the list or not.
// Note: Perform case insensitive search. Whether the user
// enters cookie, Cookie, COOKIE or coOkIE, program
// should inform about its availability. Example:

// Answer

// var a = ['cake', "apple pie", "cookie", "chips", "patties"]

// var search = prompt("search items").trim()

// var flag = false;

// for (var i = 0; i < a.length; i++) {

//     if (a[i] === search.toLowerCase()){
//         console.log(search.toLowerCase() + " available index: " + i)
//         flag = true    
//     }


// }

// if(!flag){
//     console.log("we are sorry , " + search.toLowerCase() + " is out of stock")
// }



// Q15. Write a program to take password as an input from
// user. The password must qualify these requirements:
// a. It should contain alphabets and numbers
// b. It should not start with a number
// c. It must at least 6 characters long
// If the password does not meet above requirements,
// prompt the user to enter a valid password.
// For character codes of a-z, A-Z & 0-9, refer to ASCII
// table at the end of this document.

// var password = prompt("Please enter password")

// var passValid = false;
// var lengthFlag = password.length >= 6;
// var letterFlag = false;
// var numFlag = false;
// var startLetter = (password.charCodeAt(0) >= 65 && password.charCodeAt(0) <= 90) || (password.charCodeAt(0) >= 97 && password.charCodeAt(0) <= 122)

// for (var i = 0; i < password.length; i++) {
//     var charCode = password.charCodeAt(i)
//     if ((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122)) {
//         letterFlag = true;
//     } else if (charCode >= 48 && charCode <= 57) {
//         numFlag = true;
//     }

// }

// var passStatus = letterFlag && numFlag && startLetter && lengthFlag
// if (passStatus) {
//     passValid = true;

// }

// while (!passValid) {

//     password = prompt("Please enter a valid password:\n- contain alphabets and numbers\n- not start with a number\n- at least 6 characters")

//     passValid = false;
//     lengthFlag = password.length >= 6;
//     letterFlag = false;
//     numFlag = false;
//     startLetter = (password.charCodeAt(0) >= 65 && password.charCodeAt(0) <= 90) || (password.charCodeAt(0) >= 97 && password.charCodeAt(0) <= 122)


//     for (var i = 0; i < password.length; i++) {
//         var charCode = password.charCodeAt(i)
//         if ((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122)) {
//             letterFlag = true;
//         } else if (charCode >= 48 && charCode <= 57) {
//             numFlag = true;
//         }
//     }

//     var passStatus = letterFlag && numFlag && startLetter && lengthFlag

//     if (passStatus) {
//         passValid = true;
//     }
// }

// console.log("Valid Pssword " + password)



// Q16. Write a program to convert the following string to an
// array using string split method.
// var university = “University of Karachi”;
// Display the elements of array in your browser.

// Answer

// var university = "University of Karachi";

// var split = university.split("")

// for(var i = 0 ; i < split.length ; i ++){
//     console.log(split[i])
// }


// Q17. You have a string “The quick brown fox jumps over the
// lazy dog”. Write a program to count number of
// occurrences of word “the” in given string.

// Answer

var wordCount = 0;
var find = "the"
var para = "The quick brown fox jumps over the lazy dog"

para = para.toLowerCase()

var splitPara = para.split(" ")

for(var i = 0 ; i < splitPara.length ; i++){
    if(find.trim() === splitPara[i]){
        wordCount++
    }
}
console.log("text",para)
console.log("There are " + wordCount + " occurrence of word " + find)