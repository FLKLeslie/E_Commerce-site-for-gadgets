if (localStorage.getItem("database")) {
  // var database = JSON.parse(localStorage.getItem("database"));
} else {
  database = [];
  localStorage.setItem("database", JSON.stringify(database));
}

let formValidation = false;
var formInputs = [];
// Funtion to get input from form
function getFormInput(group) {
  formInputs = [];
  let errorArr = [];
  document.querySelectorAll(`.${group}`).forEach((i) => {
    formInputs.push(i.value);
  });
  //General input validation
  if (
    formInputs[0] !== "" &&
    formInputs[1] !== "" &&
    formInputs[2] !== "" &&
    formInputs[3] !== ""
  ) {
    //name validation

    if (formInputs[0].length <= 3 || formInputs[0].search(" ") === -1) {
      errorArr.push("Invalid Name");
    }
    //password validation
    if (formInputs[1].trim().length <= 3) {
      errorArr.push("Invalid Password");
    }
    //email validation

    if (
      formInputs[2].search("@") === -1 ||
      formInputs[2].slice(-4) !== ".com"
    ) {
      console.log(-1);
      errorArr.push("Invalid Email");
    }
    //number validation
    if (
      (formInputs[3].length === 9 && formInputs[3].slice(1) === "69") ||
      formInputs[3].slice(0, 2) === "67" ||
      formInputs[3].slice(0, 2) === "65" ||
      formInputs[3].slice(0, 2) === "68"
    ) {
    } else {
      errorArr.push("Invalid Number");
      console.log("number");
    }
  } else {
    document.querySelector(".error-container").innerHTML =
      "Please make sure you have inputed all the necessary information";
  }

  if (errorArr.length > 0) {
    document.querySelector(".error-container").innerHTML = "";
    errorArr.forEach((i) => {
      document.querySelector(".error-container").innerHTML += "<li>" + i;
    });
  }
  if (document.querySelector(".error-container").innerHTML === "") {
    formValidation = true;
  }
  console.log(formInputs);
  console.log(formInputs[3].slice(0, 2));
}

// function to be carried out when sign in button is pressed
function signUpFunc() {
  document.querySelector(".error-container").innerHTML = "";
  //ckecking if any inputed information is already in the database
  getFormInput("form-input-js");
  var repetitionCheck;
  if (formValidation) {
    database.forEach((i) => {
      if (i[2] === formInputs[2]) {
        repetitionCheck = "Email";
      }
      if (i[3] === formInputs[3]) {
        repetitionCheck = "Number";
      }
      if (i[0] === formInputs[0]) {
        repetitionCheck = "Name";
      }
    });
    if (repetitionCheck) {
      document.querySelector(".error-container").innerHTML =
        repetitionCheck +
        " already taken. Please input a different valid " +
        repetitionCheck;
      console.log(repetitionCheck + " taken");
      repetitionCheck = null;
    } else {
      database.push(formInputs);
      localStorage.setItem("database", JSON.stringify(database));
      console.log("added");
      sessionStorage.setItem("currentClient", JSON.stringify(formInputs));
      location.href = "index.html";
    }
  }
}
document.querySelector(".sign-up-button").addEventListener("click", (e) => {
  e.preventDefault();
  signUpFunc();
});

//handling password visibility
let passwordVisibility = document.querySelector(".password-visibility");
let formPassword = document.querySelector(".form-password");
// passwordVisibility.addEventListener("click", (e) => {
//   e.preventDefault();
//   if (formPassword.type === "password") {
//     formPassword.type = "text";
//   } else {
//     formPassword.type = "password";
//   }
// });

//  function handling password visibility
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
    signUpFunc();
  }
  if (key.key === "Control") {
    passwordToggle();
  }
  // console.log(key);
});

console.log(localStorage);
// localStorage.clear();
console.log(sessionStorage);
