// gets local storage items

window.onload = function() {
  if (document.readyState === 'complete') {


    //adds welcome message on endpage
    //some extra stuff to show im a boss

    let welcome = document.getElementById("centerText");
    let email = localStorage.getItem("email");
    let password = localStorage.getItem("password");
    let name = localStorage.getItem("name");

    let namefeild = document.getElementById("welcomeid");

    function createStorageElement(name) {
      // let words = document.createElement("P");

      var nameinput = document.createTextNode("Welcome " + name + "! Our geolocation AI also suggests these soundtracks for you!");
      namefeild.appendChild(nameinput);
      // welcome.style.color = "red";
      // welcome.classList.add("centerText2");

      // document.body.appendChild(welcome);
    }


    //can also pass in different values from the local storage so you could adress them by email or something:)
    createStorageElement(name);
    // createStorageElement(email);
    // createStorageElement(password);









  }
}
