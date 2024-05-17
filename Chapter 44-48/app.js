// Chapter 44 - 48

// Answer

// 1. Show an alert box on click on a link.

// function greet(){
//     console.log("Hello World")
// }


// 2. Display some Mobile images in browser. On click on an
// image Show the message in alert to user.

// Answer

// function imgMsg(){
//     console.log("All Kind Mobile Sales")
// }

// 3. Display 10 student records in table and each row should contain a delete
// button. If you click on a button to delete a record, entire row should be
// deleted. 

// Answer

// function remove(ele){
//     ele.parentNode.parentNode.remove()
// }

// 4. Display an image in browser. Change the picture on mouseover and set the
// first picture on mouseout.

// Answer

// function swapImg(status,ele){
//     if(status == "over"){
//         ele.src = 'https://cdn.pixabay.com/photo/2012/05/29/00/43/car-49278_640.jpg';
//     }else if(status == "out"){
//         ele.src = 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2Fyc3xlbnwwfHwwfHx8MA%3D%3D';
//     }
// }


// 5. Show a counter in browser. Counter should increase on click on increase
// button and decrease on click on decrease button. And show updated counter
// value in browser.

// Answer

var count = 0; 
function counter(incDec){
    var display = document.getElementById('display')
    display.innerHTML = count
    
    if(incDec == 'inc' && count >= 0){
        display.innerHTML = ++count
    }else if(incDec == 'dec' && count > 0){
        display.innerHTML = --count
    }
}

counter()


// ==== End ====