//local storage for the end page welcome message, (details also in the console)

function updateFavourites() {

  console.log(localStorage.getItem("name"));
  console.log(localStorage.getItem("password"));
  console.log(localStorage.getItem("email"));
  console.log(localStorage.getItem("bday"));


  let list = document.getElementById("yourinfo");
  list.innerHTML = "";
  if (localStorage.length > 0) {
    let value = localStorage.getItem("email");
    let listItem = document.createElement("li");
    listItem.textContent = value;
    list.appendChild(listItem);
  }


}
