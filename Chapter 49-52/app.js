// Chapter 49 - 52

// Event

// 1. Create a signup form and display form data in your web page on submission.

// Answer

// function signUp(){
//   var username = document.getElementById("username")
//   var email = document.getElementById("email")
//   var password = document.getElementById("password")

//   console.log("username: " + username.value)
//   console.log("email: " + email.value);
//     console.log("password: " + password.value);
// }


// 2. Suppose in your webpage there is content area in which you have entered your item details, but user can only see some details on first look. When user clicks on “Read more” button, full detail of that particular item will be displayed. 

// Answer 

// var text = "JavaScript, often abbreviated as JS, is a programming language and core technology of the Web, alongside HTML and CSS. 99% of websites use JavaScript on the client side for webpage behavior. Web browsers have a dedicated JavaScript engine that executes the client code.";

// var flag = false;
// var para = document.getElementById("para");
// var oldtext = "JavaScript, often abbreviated as JS, is a programming language and core technology of the Web...";
// function seeMore(ele){

//   if (!flag) {
//     para.innerHTML = text; 
//     ele.innerHTML = "Read Less";
//     flag = true;
//   }else if(flag == true){
//  para.innerHTML = oldtext;
//     ele.innerHTML = "Read More";
//     flag = false;
// }
// }

// 3. In previous assignment you have created a tabular data using javascript. Let’s modify that. Create a form which takes student’s details and show each student detail in table. Each row of table must contain a delete button and an edit button. On click on delete button entire row should be deleted. On click on edit button, a hidden form will appear with the values of that row.

var serial = 1;
var fullname = document.getElementById("fullname");
var email = document.getElementById("email");
var course = document.getElementById("course");

function addStudent(){
  var table = document.getElementById("table");
var insertRow = table.insertRow(table.rows.length);
  var cell1 = insertRow.insertCell(0);
  var cell2 = insertRow.insertCell(1);
  var cell3 = insertRow.insertCell(2);
  var cell4 = insertRow.insertCell(3);
  var cell5 = insertRow.insertCell(4);
  var cell6 = insertRow.insertCell(5);
  
cell1.innerHTML = serial++;
  cell2.innerHTML = `<input disabled type="text" value=${fullname.value} />`;
  cell3.innerHTML = `<input disabled type="email" value=${email.value} />`;
  cell4.innerHTML = `<input disabled type="text" value=${course.value} />`;
  cell5.innerHTML = "<button onclick='editRow(this)'>Edit</button>";
  cell6.innerHTML = "<button onclick='deleteRow(this)'>Delete</button>";
  
  fullname.value = "";
  email.value = "";
  course.value = "";
}

function editRow(ele){
var row = ele.parentNode.parentNode;
 var rowGet = row.getElementsByTagName("td");
  var inputGet = row.getElementsByTagName("input");
  rowGet[4].innerHTML = "<button onclick='updateRow(this)'>Update</button>";
  for(let i = 0 ; i < inputGet.length ; i++){
    inputGet[i].disabled = false;
  }
}

function updateRow(ele){
var row = ele.parentNode.parentNode;
  var rowGet = row.getElementsByTagName("td");
  var inputGet = row.getElementsByTagName("input");
  rowGet[4].innerHTML = "<button onclick='editRow(this)'>Edit</button>";
  for(let i = 0 ; i < inputGet.length ; i++){
    inputGet[i].disabled = true;
    console.log(inputGet[i])
  }
  
 }

function deleteRow(ele){
  ele.parentNode.parentNode.remove();
}


// ===== end =====