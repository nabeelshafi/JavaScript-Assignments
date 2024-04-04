// Chapter 14-16

// Array

// Q1. Declare an empty array using JS literal notation to store student names in future.

// var students = [];

// console.log(students)

// Q3. Declare and initialize a strings array

// var color = ["red","blue","orange"]

// console.log(color)

// Q4. Declare and initialize a numbers array.

// var num = [1,2,3,4,5,6,7,8]

// console.log(num)

// Q5. Declare and initialize a boolean array.

// var boolean = [true,false]

// console.log(boolean)

// Q6. Declare and initialize a mixed array

// var stuDetail = ["nabeel",100123,true]

// console.log(stuDetail)

// Q7. Declare and Initialize an array and store available
// education qualifications in Pakistan (e.g. SSC, HSC, BCS,
// BS, BCOM, MS, M. Phil., PhD). Show the listed
// qualifications in your browser like:

// var qul = ["SSC","HSC","BCS","BS","BCOM","MS","M.Phill","PhD"]

// console.log(qul)


// Q8. Write a program to store 3 student names in an array.Take
// another array to store score of these three students.
// Assume that total marks are 500 for each student, display
// the scores & percentages of students like:

// var stuName = ["Michael" , "John", "Tony"]
// var stuMarks = [320,230,480]

// for(var i = 0;i < stuName.length ; i++){
//     console.log("Score of " + stuName[i] +" is " + stuMarks[i] + " Percentage: " + (stuMarks[i]/500*100) +"%")
// }


// Q9. Initialize an array with color names. 
// elements in your browser.

// var color = ["Red","Green","Blue"]

// Display the array

// console.log(color)

// a. Ask the user what color he/she wants to add to the
// beginning & add that color to the beginning of the array.

// var begColor = prompt("Enter a color to add to the begining")
// color.unshift(begColor)

// Display the updated array in your browser.

// console.log(color)

// b. Ask the user what color he/she wants to add to the end
// & add that color to the end of the array.

// var endColor = prompt("Enter a color to add to the end") 
// color.push(endColor)

// Display the updated array in your browser.

// console.log(color)


// c. Add two more color to the beginning of the array.

// color.unshift("Yellow","Purple")

// Display the updated array in your browser.

// console.log(color)

// d. Delete the first color in the array. 

// color.shift()

// Display the updated array in your browser.

// console.log(color)

// e. Delete the last color in the array. 

// color.pop()

// Display the updated array in your browser.

// console.log(color)

// f. Ask the user at which index he/she wants to add a color & color name. 
// Then add the color to desired position/index. 

// var userIndex = prompt("Enter the Index number")
// var userColor = prompt("Enter a Color Name")

// color.splice(userIndex,0,userColor)

// Display the updated array in your browser.

// console.log(color)

// g. Ask the user at which index he/she wants to delete
// color(s) & how many colors he/she wants to delete. Then
// remove the same number of color(s) from user-defined
// position/index.

// var delIndex = prompt("Enter delete index")
// var delCount = prompt("How many delete color")

// color.splice(delIndex,delCount)

// Display the updated array in your browser.

// console.log(color)

// Q10. Write a program to store student scores in an array &
// sort the array in ascending order using Array’s sort
// method.

// var stuScore = [320,230,480,120]

// console.log("Scores of Students : " + stuScore)

// stuScore.sort()

// console.log("Ordered Scores of Students : " + stuScore)

// Q11. Write a program to initialize an array with city names.
// Copy 3 array elements from cities array to selectedCities
// array.

// var cityName = ["Karachi","Lahore","Islamabad","Quetta","Peshawar"]
// console.log("Cities list : " + cityName)

// var selectedCities = cityName.slice(2,4)

// console.log("Selected cities list: " + selectedCities)

// Q12. Write a program to create a single string from the
// below mentioned array:
// var arr = [“This ”, “ is ”, “ my ”, “ cat”];
// (Use array’s join method)

// var arr = ["This", "is","my","cat"]
// console.log("Array : " + arr)

// var arrJoin = arr.join(" ")
// console.log("String : " + arrJoin)


// Q13. Create a new array. Store values one by one in such a way
// that you can access the values in the order in which they
// were stored. (FIFO-First In First Out)

// var devices1 = []

// devices1.unshift("Keyboard")
// devices1.unshift("mouse")
// devices1.unshift("printer")
// devices1.unshift("monitor")

// devices1.reverse()

// console.log("Devices",devices1)
// console.log("out",devices1[0])
// console.log("out",devices1[1])
// console.log("out",devices1[2])
// console.log("out",devices1[3])

// Q14. Create a new array. Store values one by one in such a way that you can access the values in reverse order. (Last InFirst Out)

// var devices2 = []

// devices2.push("Keyboard")
// devices2.push("mouse")
// devices2.push("printer")
// devices2.push("monitor")

// devices.reverse()
// console.log("Devices",devices2)
// console.log("out",devices2[0])
// console.log("out",devices2[1])
// console.log("out",devices2[2])
// console.log("out",devices2[3])


// 15. Write a program to store phone manufacturers (Apple,
// Samsung, Motorola, Nokia, Sony & Haier) in an array.
// Display the following dropdown/select menu in your
// browser using document.write() method:

// Array Phone Manufacture
var manufacture = ["Apple","Samsung","Motorola","Nokia","Sony","Haier"];

// Dropdown create 

document.write("<select class='dropdown'>")
document.write("<option selected disabled>Select items</option>")

for(var i = 0 ; i < manufacture.length ; i++){
    document.write(`<option> ${manufacture[i]} </option>`)
}

document.write("</select>")

