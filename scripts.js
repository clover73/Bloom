// code I couldn't get to work in time with my nav scrolling and changing svg


// //create sticky nav

// // When the user scrolls the page, execute myFunction

// // window.onload() = myFunction();



// // Get the navbar
// var navbar = document.getElementById("navbar");

// // Get the offset position of the navbar
// // var sticky = navbar.offsetTop;
// var sticky = navbar.offsetTop;

// // Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position

// function myFunction() {
//     if (window.pageYOffset > sticky) {
//         navbar.classList.add("sticky");
//     } else {
//         navbar.classList.remove("sticky");
//     }
// }

// function clearSticky() {
//     if (window.pageYOffset < sticky) {
//         navbar.classList.remove("sticky");
//     } else {
//         navbar.classList.add("sticky");
//     }


// }




// //animate colour change

// window.addEventListener('scroll', function (event) { // To listen for event
//     event.preventDefault();
//     let loginbutton = document.getElementById("loginbutton");
//     let logowhite = document.getElementById("logowhite");
//     let logoblack = document.getElementById("logoblack");

//     if (window.scrollY >= 65) {
//         myFunction()
//         navbar.style.backgroundColor = '#ffffff';
//         loginbutton.style.color = '#1c1c1c';

//         logowhite.style.display = "in-line block";
//         logoblack.style.display = "none";



//     } else {
//         clearSticky()
//         navbar.style.backgroundColor = 'transparent';
//         loginbutton.style.color = '#ffffff';

//         logowhite.style.display = "none";
//         logoblack.style.display = "in-line block";

//     }
// });









// document.getElementById("logowhite").style.display = "none";
// document.getElementById("logoblack").style.display = "in-line block";




// // call to action buttons

// let cta = document.get.getElementById("cta");

// object.onclick = function () {

//     window.open("form1.html");
// };








// nano bar :D

var options = {
  classname: 'my-class',
  id: 'my-id',
  target: document.getElementById('myDivId')
};
var nanobar = new Nanobar(options);
nanobar.go(100);









// changing the nav for mobile

// this is to delete the cross which appears when you click menu
function deleteMenubutton() {
  document.getElementById("menubutton").style.display = "none";
}

function showMenubutton() {
  document.getElementById("menubutton").style.display = "block";
}

//this is to hide the button with resizing

function openNav() {
  document.getElementById("mobile__menu").style.width = "100%";
  deleteMenubutton();

}

function closeNav() {
  document.getElementById("mobile__menu").style.width = "0";
  showMenubutton();
}

// a cheeky js query to fix the menu button not hiding when the screen size increases (only an issue for developers and markers hehe)

function deletedammit(x) {
  if (x.matches) { // If media query matches
    deleteMenubutton();
  } else {
    showMenubutton();


  }
}

var x = window.matchMedia("(min-width: 800px)")
deletedammit(x) // Call listener function at run time
x.addListener(deletedammit) // Attach listener function on state changes
