let cartDatabase;
let currentClient;

let database = JSON.parse(localStorage.getItem("database"));
let cartValueHtml = document.querySelector(".cart-value");
if (localStorage.getItem("cartDatabase")) {
  cartDatabase = JSON.parse(localStorage.getItem("cartDatabase"));
} else {
  cartDatabase = {};
}
if (sessionStorage.getItem("currentClient")) {
  currentClient = JSON.parse(sessionStorage.getItem("currentClient"));
} else {
  currentClient = ["default", "default", "default", "1"];
}
if (cartDatabase[currentClient[3]]) {
  cartValue = cartDatabase[currentClient[3]].cartValue;
}
console.log(cartDatabase);
cartValueHtml.innerHTML = "" + cartValue;
console.log(currentClient);
