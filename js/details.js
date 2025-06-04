let largeDetailContainer = document.querySelector(".large-detail-container");
let largeDetailContainerHTML = "";
let cardValueHtml = $(".cart-value");
products.forEach((productDetail) => {
  largeDetailContainerHTML += `<div class="single-detail-container">
  <div class="detail-images-container">
    <div class="primary-image">
      <a href="images/products/${productDetail.primaryImageName}"><img
        class="detail-images"
        src="images/products/${productDetail.primaryImageName}"
        alt=""
      /></a>
    </div>
    <div class="secondary-image">
      <a href="images/products/${productDetail.secondaryImageName}"><img
        class="detail-images"
        src="images/products/${productDetail.secondaryImageName}"
        alt=""
      /></a>
    </div>
  </div>
  <div class="detail-text">
    <div class="detail-name"><h2>${productDetail.name}</h2></div>
    <div class="full-details">
      <span class="major-details"
        >${productDetail.minorDetail}</span
      ><br /><ul>`;
  productDetail.majorDetail.forEach((i) => {
    largeDetailContainerHTML += `<li>${i}</li>`;
  });
  largeDetailContainerHTML += `</ul></div>
  </div>
  <span class="detail-price">${productDetail.price}XAF</span>
  <div class="detail-but">
    <button class="but-add-to-cart add-butt"><i class="fas fa-cart-plus"></i></button>
  </div>
</div>`;
});

largeDetailContainer.innerHTML = largeDetailContainerHTML;

document.querySelectorAll(".add-butt").forEach((i) => {
  i.addEventListener("click", () => {
    console.log(
      i.parentElement.parentElement.children[1].children[0].children[0]
        .innerHTML
    );

    products.forEach((j) => {
      if (
        i.parentElement.parentElement.children[1].children[0].children[0]
          .innerHTML === j.name
      ) {
        cartValue++;

        if (cartDatabase[currentClient[3]]) {
          cartDatabase[currentClient[3]].cartValue = cartValue;
          cartDatabase[currentClient[3]].products.push(j.name);
          localStorage.setItem("cartDatabase", JSON.stringify(cartDatabase));
          cartValueHtml.innerHTML = "" + cartValue;
        } else {
          cartDatabase[currentClient[3]] = {};
          cartDatabase[currentClient[3]].cartValue = cartValue;
          cartDatabase[currentClient[3]].products = [j.name];
          localStorage.setItem("cartDatabase", JSON.stringify(cartDatabase));
          cardValueHtml.innerHTML = "" + cartValue;
        }
      }
    });
  });
});
console.log(JSON.parse(localStorage.getItem("cartDatabase")));
