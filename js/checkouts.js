let totalPrice = 0;

let checkoutIdValue = 0;
cartDatabase[currentClient[3]].products.forEach((i) => {
  products.forEach((j) => {
    if (i === j.name) {
      document.querySelector(
        ".large-checkout-items-container"
      ).innerHTML += `<div class="single-item-checkout-container" id="checkout${checkoutIdValue}">
      <div class="checkout-image-container">
          <img src="images/products/${j.primaryImageName}">
      </div>
      <div class="checkout-details-container">
      <div class="checkout-item-name-container"><span>${j.name}</span></div>
      <div class="checkout-item-price">${j.price}XAF</div>
      <div class="checkout-drop-button-container"><button class="drop-but"><i class="fas fa-close"></i></button></div>
  </div>

</div>`;
      totalPrice += j.price;
      checkoutIdValue++;
    }
  });
});
// document.querySelectorAll(".drop-but").forEach((i) => {
//   console.log(i.parentElement.parentElement.parentElement.id);
//   $(`#${i.parentElement.parentElement.parentElement.id}`).css(
//     "background-color",
//     "red"
//   );
// });
//Listening for click events on the drop button
document.querySelectorAll(".drop-but").forEach((i) => {
  i.addEventListener("click", () => {
    console.log("clicked");
    if (
      cartDatabase[currentClient[3]].products.indexOf(
        i.parentElement.parentElement.firstElementChild.firstElementChild
          .innerHTML
      ) !== -1
    ) {
      console.log("seen");
      cartDatabase[currentClient[3]].products.splice(
        cartDatabase[currentClient[3]].products.indexOf(
          i.parentElement.parentElement.firstElementChild.firstElementChild
            .innerHTML
        ),
        1
      );
      totalPrice -= Number(
        i.parentElement.previousElementSibling.innerHTML.slice(0, -3)
      );

      cartValue--;
      cartDatabase[currentClient[3]].cartValue = cartValue;
      localStorage.setItem("cartDatabase", JSON.stringify(cartDatabase));
      cartValueHtml.innerHTML = "" + cartValue;
      document.querySelector(".total-items-value").innerHTML = cartValue;
      document.querySelector(".total-cost-value").innerHTML =
        totalPrice + "XAF";
      $(`#${i.parentElement.parentElement.parentElement.id}`).animate(
        { opacity: 0, height: 0, width: 0 },
        500
      );
      setTimeout(() => {
        $(`#${i.parentElement.parentElement.parentElement.id}`).css(
          "display",
          "none"
        );
      }, 1000);
    }
  });
});
document.querySelector(".total-items-value").innerHTML = cartValue;
document.querySelector(".total-cost-value").innerHTML = totalPrice + "XAF";
