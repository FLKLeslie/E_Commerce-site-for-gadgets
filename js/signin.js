let loginInfo;
// let database = JSON.parse(localStorage.getItem("database"));

let formPassword = document.querySelector(".form-password");
let formNumber = document.querySelector(".form-number");
let errorContainer = document.querySelector(".error-container");
// function to be done when login button is pressed
function loginFunc() {
  loginInfo = [];
  loginInfo.push(formPassword.value, formNumber.value);
  console.log(loginInfo);
  var passwordChecked;
  //handling no inputed data
  if (loginInfo[0] === "" || loginInfo[1] === "") {
    errorContainer.innerHTML = "Make sure all your info is inputed";
  } else {
    //checking if inputed info matches info in database
    database.forEach((i) => {
      if (i[3] === loginInfo[1]) {
        passwordChecked = true;
        if (i[1] !== loginInfo[0]) {
          errorContainer.innerHTML = "Wrong Password";
          passwordChecked = false;
        }
      }
    });
  }
  if (!passwordChecked) {
    errorContainer.innerHTML =
      "No account matches inputed data, please try again";
    console.log("hello");
    setTimeout(() => {
      alert("No account matches inputed data, please try again");
      location.href = "signin.html";
    }, 200);
  }
  if (passwordChecked === true) {
    database.forEach((i) => {
      if (i[3] === loginInfo[1]) {
        sessionStorage.setItem("currentClient", JSON.stringify(i));
        // checking if there was any order made while signed out, so as to transfer the data to the account when signed up
        if (sessionStorage.getItem("currentClient")) {
        }
        location.href = "index.html";
      }
    });
  }
}
//Event listener for the login button
document.querySelector(".form-submit-but").addEventListener("click", (e) => {
  e.preventDefault();
  loginFunc();
  // loginInfo = [];
  // loginInfo.push(formPassword.value, formNumber.value);
  // console.log(loginInfo);
  // var passwordChecked;
  // //handling no inputed data
  // if (loginInfo[0] === "" || loginInfo[1] === "") {
  //   errorContainer.innerHTML = "Make sure all your info is inputed";
  // } else {
  //   //checking if inputed info matches info in database
  //   database.forEach((i) => {
  //     if (i[3] === loginInfo[1]) {
  //       passwordChecked = true;
  //       if (i[1] !== loginInfo[0]) {
  //         errorContainer.innerHTML = "Wrong Password";
  //         passwordChecked = false;
  //       }
  //     }
  //   });
  // }
  // if (!passwordChecked) {
  //   errorContainer.innerHTML =
  //     "No account matches inputed data, please try again";
  //   console.log("hello");
  //   setTimeout(() => {
  //     alert("No account matches inputed data, please try again");
  //     location.href = "signin.html";
  //   }, 200);
  // }
  // if (passwordChecked === true) {
  //   database.forEach((i) => {
  //     if (i[3] === loginInfo[1]) {
  //       sessionStorage.setItem("currentClient", JSON.stringify(i));
  //       // checking if there was any order made while signed out, so as to transfer the data to the account when signed up
  //       if (sessionStorage.getItem("currentClient")) {
  //       }
  //       location.href = "index.html";
  //     }
  //   });
  // }
});

//  function handling password visibility
let passwordVisibility = document.querySelector(".password-visibility");
function passwordToggle() {
  if (formPassword.type === "password") {
    formPassword.type = "text";
  } else {
    formPassword.type = "password";
  }
}
passwordVisibility.addEventListener("click", (e) => {
  e.preventDefault();
  passwordToggle();
});

document.body.addEventListener("keydown", (key) => {
  // key.preventDefault();
  // console.log(key);
  if (key.key === "Enter") {
    loginFunc();
  }
  if (key.key === "Control") {
    passwordToggle();
  }
  // console.log(key);
});

console.log(database);
