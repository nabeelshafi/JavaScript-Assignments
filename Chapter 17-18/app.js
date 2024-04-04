// JavaScript Chapters 17 - 18

// Q1.Declare and initialize an empty multidimensional array.
// (Array of arrays).

// var multiArr = [[],[]];
// console.log(multiArr)


// Q2. Declare and initialize a multidimensional array
// representing the following matrix:

// var mulDim = [[0,1,2,3],[1,0,1,2],[2,1,0,1]];
// console.log(mulDim)


// Q3. Write a program to print numeric counting from 1 to 10.

// for(var i = 1 ; i <= 10 ; i++){
//     document.write("Counting " + i + "<br />")
// }


// Q4. Write a program to print multiplication table of any
// number using for loop. Table number & length should be
// taken as an input from user.

// var tableNum = +prompt("Enter table number")
// var tableLen = prompt("Enter table length")

// for(var i = 1 ; i <= tableLen ; i++){
//     document.write(`<h4> ${tableNum} X ${i} = ${tableNum * i} <br /> </h4>`)
// }


// Q5. Write a program to print items of the following array
// using for loop:fruits = [“apple”, “banana”, “mango”, “orange”,“strawberry”]

// var fruits = ["apple","banana","mango","orange","strawberry"]
// console.log(fruits)

// for(var i = 0 ; i < fruits.length ; i++){
//         document.write(`<h4> Elements at index ${i} is ${fruits[i]} <br /> </h4>`)
// }



// Q6.Generate the following series in your browser. See
// example output.
// a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15

// document.write("<h3> Counting: ")
// for(var i = 1 ; i <= 15 ; i++){
//     document.write(i)
//     if(i < 15){
//         document.write(", ")
//     }   
// }
// document.write("</h3>")

// b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1

// document.write("<h3> Reverse Counting: ")
// for(var i = 10 ; i >= 1 ; i--){
//     document.write(i)
//     if(i > 1){
//             document.write(", ")
//         }        
//     }
// document.write("</h3>")

// c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20

// document.write("<h3> Even: ")
// for(var i = 0 ; i <= 20 ; i++){
//     if(i % 2 !== 1){
//         document.write(i)
//         if(i < 19){
//                 document.write(", ")
//             }        
//         }
//     }
//     document.write("</h3>")

// d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19

// document.write("<h3> Odd: ")
// for(var i = 0 ; i <= 20 ; i++){
//     if(i % 2){
//         document.write(i)
//         if(i < 18){
//             document.write(", ")
//         }        
//     }
// }
// document.write("</h3>")

// e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k
// document.write("<h3> Series: ")
// for (var i = 2; i <= 20; i += 2) {
//     document.write(i + "k")
//     if(i < 20){
//         document.write(", ")
//     }
// }
// document.write("</h3>")