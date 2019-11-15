//JS for a dynamic form


// signup on click
document.getElementById("continuebutton10").addEventListener("click", login());
document.getElementsByClassName("socialbuttons").addEventListener("click", login());


//continue login
function logmein() {
  // endpage

  window.open("endpage.html", "_self");

}


// signup with socials
function openfacebook() {
  window.open("https://facebook.com", "_self");

}

function opengoogle() {
  window.open("https://google.com", "_self");

}
