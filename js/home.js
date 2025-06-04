let homeProducts = document.querySelector(".large-home-container");
let homeProductsHTML = "";
products.forEach((product) => {
  homeProductsHTML += ` <div class="single-item-container">
  <div class="image-container">
   <img class="item-image" src="images/products/${product.primaryImageName} " />
  </div>
  <div class="item-texts">
    <div class="item-name"><h2>${product.name}</h2></div>
    <div class="minor-details">
      <span
        >${product.minorDetail}</span
      ><br />
      <span class="item-cost">${product.price}XAF</span>
      <button class="home-more add-butt">more</button>
    </div>
    <div class="item-buttons"><div class="item-buttons-top">
      <button class="but-add-to-cart add-butt"> <i class="fas fa-plus"></i><i class="fas fa-cart-plus"></i></button
      >
      <button class="remove-from-cart remove-butt">
      <i class="fas fa-minus"></i><i class="fas fa-cart-shopping"></i></button
      ></div><div>
      <input type="number" class="plus" />
      <button class="but-plus add-butt"><i class="fas fa-plus-minus"></i><i class="fas fa-cart-shopping"></i></button></div>
    </div>
  </div>
</div>`;
});
homeProducts.insertAdjacentHTML("afterbegin", homeProductsHTML);

console.log(JSON.parse(sessionStorage.getItem("currentClient")));

//listening for click events on the add to cart button
let addToCart = document.querySelectorAll(".but-add-to-cart");
addToCart.forEach((i) => {
  i.addEventListener("click", () => {
    console.log(
      i.parentElement.parentElement.parentElement.firstElementChild
        .firstElementChild.innerHTML
    );
    products.forEach((j) => {
      if (
        i.parentElement.parentElement.parentElement.firstElementChild
          .firstElementChild.innerHTML === j.name
      ) {
        cartValue++;
        if (cartDatabase[currentClient[3]]) {
          cartDatabase[currentClient[3]].cartValue = cartValue;
          cartDatabase[currentClient[3]].products.push(j.name);
          localStorage.setItem("cartDatabase", JSON.stringify(cartDatabase));
          cartValueHtml.innerHTML = `${cartValue}`;
        } else {
          cartDatabase[currentClient[3]] = {};
          cartDatabase[currentClient[3]].cartValue = cartValue;
          cartDatabase[currentClient[3]].products = [j.name];
          localStorage.setItem("cartDatabase", JSON.stringify(cartDatabase));
          cartValueHtml.innerHTML = "" + cartValue;
        }
      }
    });
    console.log(cartDatabase);
  });
});

// listening for click events on the add ++ button
document.querySelectorAll(".but-plus").forEach((i) => {
  i.addEventListener("click", () => {
    // console.log(
    //   i.parentElement.parentElement.firstElementChild.firstElementChild
    //     .innerHTML
    // );
    if (
      i.previousElementSibling.value === "" ||
      !parseInt(i.previousElementSibling.value)
    ) {
    } else if (parseInt(i.previousElementSibling.value) < 0) {
      for (let t = parseInt(i.previousElementSibling.value); t < 0; t++) {
        products.forEach((j) => {
          if (
            i.parentElement.parentElement.parentElement.firstElementChild
              .firstElementChild.innerHTML === j.name
          ) {
            console.log(j.name);
            if (
              cartDatabase[currentClient[3]].products.indexOf(j.name) !== -1
            ) {
              cartDatabase[currentClient[3]].products.splice(
                cartDatabase[currentClient[3]].products.indexOf(j.name),
                1
              );
              cartValue--;
              cartDatabase[currentClient[3]].cartValue = cartValue;
            }
          }
        });
        localStorage.setItem("cartDatabase", JSON.stringify(cartDatabase));
        cartValueHtml.innerHTML = "" + cartValue;
      }
    } else {
      products.forEach((j) => {
        if (
          j.name ===
          i.parentElement.parentElement.parentElement.firstElementChild
            .firstElementChild.innerHTML
        ) {
          console.log(parseInt(i.previousElementSibling.value));
          if (cartDatabase[currentClient[3]]) {
            for (let t = 0; t < parseInt(i.previousElementSibling.value); t++) {
              cartValue++;
              cartDatabase[currentClient[3]].products.push(j.name);
              cartDatabase[currentClient[3]].cartValue = cartValue;
            }
            localStorage.setItem("cartDatabase", JSON.stringify(cartDatabase));
            cartValueHtml.innerHTML = "" + cartValue;
          } else {
            cartDatabase[currentClient[3]] = {};
            for (let t = 0; t < parseInt(i.previousElementSibling.value); t++) {
              cartValue++;
              cartDatabase[currentClient[3]].products.push(j.name);
              cartDatabase[currentClient[3]].cartValue = cartValue;
            }
            localStorage.setItem("cartDatabase", JSON.stringify(cartDatabase));
            cartValueHtml.innerHTML = "" + cartValue;
          }
        }
      });
    }
    console.log(cartDatabase);
  });
});

//litening for click events for the remove from card button
document.querySelectorAll(".remove-from-cart").forEach((i) => {
  i.addEventListener("click", () => {
    console.log("clicked");
    if (
      cartDatabase[currentClient[3]].products.indexOf(
        i.parentElement.parentElement.parentElement.firstElementChild
          .firstElementChild.innerHTML
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
      cartValue--;
      cartDatabase[currentClient[3]].cartValue = cartValue;
      localStorage.setItem("cartDatabase", JSON.stringify(cartDatabase));
      cartValueHtml.innerHTML = "" + cartValue;
    }
    console.log(cartDatabase);
  });
});
console.log(cartValue);
console.log(cartDatabase);
