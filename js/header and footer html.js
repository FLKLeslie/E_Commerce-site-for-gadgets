// INSERTING HTML INTO HEADER
let cartValue = 0;
document.querySelector("header").innerHTML = `<div class="header">
<div class="left-side">
  <div class="sign-but-container">
    <a href='signup.html'><button class="sign sign-up">Sign Up</button></a>
   <a href='signin.html'><button class="sign sign in">Sign In</button></a>
  </div>
  <div class="page-buts-container">
   <a href='index.html'> <button class="page-buts home">Home</button></a>
    <a href='details.html'><button class="page-buts details">Details</button></a>
  </div>
  <nav class="virtual-navigation">
    <div class="nav-logo-container">
      <img
        class="nav-logo"
        src="images/logos/nav-button.png"
        onclick=" 
      let toggleButs = document.querySelector('.virtual-navigation-container')
      
      if(toggleButs.classList.contains('virtual-navigation-container-toggle')){
          toggleButs.classList.remove('virtual-navigation-container-toggle')
      }
      else{
        toggleButs.classList.add('virtual-navigation-container-toggle')
      }"
      />
    </div>
    <div
      class="virtual-navigation-container virtual-navigation-container-toggle"
    >
      <a href="signin.html" class="nav-buts"> Sign In </a>

      <a href="signup.html" class="nav-buts"> Sign Up </a>
      <a href="index.html" class="nav-buts"> Home </a>
      <a href="details.html" class="nav-buts"> Details </a>
    </div>
  </nav>
</div>
<div class="middle-side"><a href="checkouts.html">
  <button class="cart">
    <span class="cart-value">${cartValue}</span
    ><img src="images/logos/cart-logo.png" />
  </button></a>
</div>
<div class="right-side">
  <button class="find-but">Find</button>
  <input type="text" class="find-input" placeholder="Find any item" />
</div>
</div>
<h1>Electronics and Gadgets<h1>`;

// INSERTING HTML INTO FOOTER
document.querySelector("footer").innerHTML = `
<div class="footer">
        <div class="footer-carosel">
          <img src="images/products/lenovo.jpg" alt="" class="footer-img" />
        </div>
        <div class="footer-text">
          <a><h2 class="footer-links">Contact Us</h2></a>
          <a><h2 class="footer-links">FAQS</h2></a>
          <a><h2 class="footer-links">Branches</h2></a>
        </div>
      </div>
`;
console.log(sessionStorage.getItem("currentClient"));
