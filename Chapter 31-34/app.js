// chapter 31 to 34
//date method


// Q1.Write a program that displays current date and time in your browser.

// Answer 

// let now = new Date();
// console.log(now.toString());

// Q2.Write a program that alerts the current month in words. For example December.

// Answer 

// let now = new Date();
// let getMonth = now.getMonth();
// let months = ["January", "February", "March", "April", "May", "June", "july", "August", "September", "October", "November", "December"];
// console.log(months[getMonth]);

// Q3.Write a program that alerts the first 3 letters of the current day, for example if today is Sunday then alert will show Sun.

// Answer 

// let now = new Date();
// let getDay = now.getDay();
// let days =[ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday","Friday", "Saturday"];
// console.log(days[getDay].slice(0,3));

// Q4.Write a program that displays a message “It’s Fun day” if its Saturday or Sunday today.

//Answer 

// let now = new Date();
// let getDay = now.getDay();
// let days =[ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Saturday"];
// if(days[getDay] === "Saturday" || days[getDay] === "Sunday"){
//   console.log("It's Fun day");
// }

// Q5.Write a program that shows the message “First fifteen days of the month” if the date is less than 16th of the month else shows “Last days of the month”.

// Answer 

// let now = new Date();
// let getDate = now.getDate();
// if (getDate < 16) {
//    console.log("First fifteen days of the month");
// } else {
//    console.log("Last days of the month");
// }

// Q6.Write a program that determines the minutes since midnight, Jan. 1, 1970 and assigns it to a variable that hasn't been declared beforehand. Use any variable you like to represent the Date object.

// Answer 

// let now = new Date();
// console.log(now.getTime());


// Q7.Write a program that tests whether it's before noon and alert “Its AM” else “its PM”.

// Answer

// let now = new Date();
// let getHours = now.getHours();
// if (getHours < 12){
//   console.log("Its AM");
// }else{
//   console.log(`its PM`);
// }


// Q8.Write a program that creates a Date object for the last day of the last month of 2020 and assigns it to variable named laterDate.

// Answer

// let laterDate = new Date(2020,11,31)
// console.log(laterDate.toString())


// Q9.Create a date object of the starting date of this Ramadan and alert the number of days past since 1st Ramadan? Note: 1st Ramadan was on June 18, 2015.

// Answer

// let ramadan = new Date(2015,5,18);
// let now = new Date();
// let ramadanTime = ramadan.getTime();
// let nowTime = now.getTime();
// let diff = (nowTime - ramadanTime) / ( 1000 * 60 * 60 * 24 );

// console.log(Math.round(diff));

// Q10.Write a program that displays in your browser the seconds that elapsed between the reference date and the beginning of 2015.

// Answer

// let begDate = new Date(2015,5,18);
// let referDate = new Date();
// let begTime = begDate.getTime();
// let referTime = referDate.getTime();
// let diff = referTime - begTime;

// console.log('Seconds' , Math.round(diff));


// Q11.Create a Date object for the current date and time. Extract the hours, reset the date object an hour ahead and finally display the date object in your browser.

// Answer

// let now = new Date();

// let getHrs = now.getHours()

// console.log("Hours" , getHrs)

// Q12.Write a program that creates a date object and show the date in an alert box that is reset to 100 years back?

// Answer

// let now = new Date()
// console.log(now.getFullYear() - 100)

// Q13.Write a program to ask the user about his age. Calculate and show his birth year in your browser.

// Answer

// let now = new Date()
// let userAge = new Date('1999');
// let nowTime = now.getTime()
// let userAgetime = userAge.getTime()
// let result = (nowTime - userAgetime) / (1000 * 60 * 60 * 24 * 365 )
// console.log("Your Age is ",Math.round(result))

// Q14.Write a program to generate your K-Electric bill in your browser. All the amounts should be rounded off to 2 decimal places. Display the following fields:

// a. Customer Name

// b. Current Month

// c. Number of units

// d. Charges per unit

// e. Net Amount Payable (within Due Date)

// f. Late Payment Surcharge

// g. Gross Amount Payable (after Due Date) 
// Where,

//   Net Amount Payable (within Due Date) = Number of units * Charges per unit

// & Gross Amount Payable (after Due Date) = Net Amount + Late Payment Surcharge

// Answer 

// var customerName = "ABC";
// var currentMonth = "February";
// var numberOfUnits = 410;
// var chargePerUnit = 16;
// var netAmountPayable = numberOfUnits * chargePerUnit;
// var lateSurCharge = 350;

// console.log("Customer Name: " + customerName);
// console.log("Current Month: " + currentMonth);
// console.log("Number of units: " + numberOfUnits);
// console.log("Charges per unit: " + chargePerUnit);

// console.log("Net Amount Payable (within Due Date): " + netAmountPayable)
// console.log("Late Payment Surcharge: " + lateSurCharge)
// console.log("Gross Amount Payable (after Due Date): " + (netAmountPayable + lateSurCharge))

// === end ===