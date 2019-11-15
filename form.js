//JS for a dynamic form

//declaring all the form items so they can displayed and hidden

var continuebutton = document.getElementById("continuebutton");
var recaptcha = document.getElementById("recaptcha");
var continuebutton2 = document.getElementById("continuebutton2");
var secondmenu = document.getElementsByClassName("formscreen1");
var centertext = document.getElementsByClassName("centertext")[0];
var socialbuttons = document.getElementsByClassName("socialbuttons");

//each time form continues, elements are dynamically replaced on the form instead of replacing entireform

function signupprocess1() {
  for (var i = 0; i < secondmenu.length; i++) {
    secondmenu[i].style.display = "none";
  }

  continuebutton.style.display = "none";
  recaptcha.style.display = "none";
  continuebutton2.style.display = "none";
}

signupprocess1();

function signupprocess2() {
  centertext.style.display = "none";

  for (var i = 0; i < secondmenu.length; i++) {
    secondmenu[i].style.display = "block";
  }

  continuebutton.style.display = "block";

  for (var i = 0; i < socialbuttons.length; i++) {
    socialbuttons[i].style.display = "none";
  }
}

document
  .getElementsByClassName("socialbuttons")[2]
  .addEventListener("click", signupprocess2);

document
  .getElementById("continuebutton")
  .addEventListener("click", signupprocess3);

function signupprocess3() {
  for (var i = 0; i < secondmenu.length; i++) {
    secondmenu[i].style.display = "none";
  }

  continuebutton.style.display = "none";

  for (var i = 0; i < socialbuttons.length; i++) {
    socialbuttons[i].style.display = "none";
  }

  recaptcha.style.display = "block";
  continuebutton2.style.display = "block";

  // setting local Storage items (account information)

  let inputEmail = document.getElementById("email");
  localStorage.setItem("email", inputEmail.value);

  // security level 100!

  let inputPassword = document.getElementById("password");
  localStorage.setItem("password", inputPassword.value);

  let inputName = document.getElementById("name");
  localStorage.setItem("name", inputName.value);

  let inputBday = document.getElementById("bday");
  localStorage.setItem("bday", inputBday.value);
}

document
  .getElementById("continuebutton2")
  .addEventListener("click", signupprocess4);

function signupprocess4() {
  // endpage

  window.alert(
    "I could not get the server side to work because I don't know about local hosting :)"
  );
  window.open("endpage.html", "_self");
}
