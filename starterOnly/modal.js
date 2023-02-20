function editNav() {
  let x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// Close modal form
const closeBtn = document.querySelector(".close");

closeBtn.addEventListener("click", closeModal);

function closeModal() {
  modalbg.style.display = "none";
}

// Checking data

//  Callaback functions

function validateFirstName() {
  const firstNameInput = document.querySelector("#first");
  if (firstNameInput.value.length < 2) {
    return false;
  }
  else {
    return true;
  }
}

function validateLastName() {
  const firstNameInput = document.querySelector("#last");
  if (firstNameInput.value.length > 1) {
    return true;
  }
  else {
    return false;
  }
}

function emailValidation() {
  const emailInput = document.querySelector("#email");
  const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (regexEmail.test(emailInput.value)) {
      return true;
  }
    else {
      return false;
  }
}

function birthdateValidation() {
  const regexDate = /^\d{4}[./-]\d{2}[./-]\d{2}$/
  const birthdateInput = document.querySelector("#birthdate");
  if (regexDate.test(birthdateInput.value)) {
    return true;
}
  else {
    return false;
}
}

function quantityValidation() {
  const quantityInput = document.querySelector("#quantity");
  if (quantityInput.value > 0) {
    return true;
  }
  else {
    return false;
  }
}

function locationValidation() {
  let hasOneChecked = false;
  const radioBtnNodeList = document.querySelectorAll("#location > input");
  const radioBtnList = Array.from(radioBtnNodeList);

  radioBtnList.forEach(button => {
    if (button.checked == true)
      hasOneChecked = true;
  })
  return hasOneChecked;
}

function checkboxValidation() {
  const agreementInput = document.querySelector("#checkbox1");
  return agreementInput.checked;
}

function displayError(targetInput) {
  targetInput.classList.toggle("border-red", true);
  let parentContainer = targetInput.parentNode;
  let errorContainer = parentContainer.querySelector(".error-msg");
  errorContainer.style = "display:block;"
}


function validateForm(event) {

  event.preventDefault();

  const firstNameInput = document.querySelector("#first");
  let validationOk = true;

  if (!validateFirstName()) {
    displayError(firstNameInput);
    validationOk = false;
  }
  const lastNameInput = document.querySelector("#last");
  if (!validateLastName()) {
    displayError(lastNameInput);
    validationOk = false;
  }
  const emailInput = document.querySelector("#email");
  if (!emailValidation()) {
    displayError(emailInput);
    validationOk = false;
  }
  const birthdateInput = document.querySelector("#birthdate");
  if (!birthdateValidation()) {
    displayError(birthdateInput);
    validationOk = false;
  }
  const quantityInput = document.querySelector("#quantity");
  if (!quantityValidation()) {
    displayError(quantityInput);
    validationOk = false;
  }
  const locationContainer = document.querySelector("#location6");
  if (!locationValidation()) {
    validationOk = false;
    displayError(locationContainer);
  }
  const agreementInput = document.querySelector("#checkbox1");
  if (!checkboxValidation()) {
    validationOk = false;
    displayError(agreementInput);
  }
  if (validationOk) {

    // Form sent and new page with success message appear

    const containerSuccessPage = document.querySelector(".modal-body")
    // containerSuccessPage.innerHTML = null;
    // const successTextContainer = document.createElement("div");
    // successTextContainer.classList.add("text-success");
    // containerSuccessPage.appendChild(successTextContainer);
    // const successText = document.createElement("p");
    // successText.innerText = "Merci pour votre inscription";
    // successTextContainer.appendChild(successText);

    
    const successMessage = '<div class="text-success"><p>Merci pour votre inscription</p></div><div><input class="btn-close-success" type="button" value="Fermer"></div>';
    containerSuccessPage.innerHTML = successMessage;
    
    const btnCloseSucessPage = document.querySelector(".btn-close-success");
    btnCloseSucessPage.addEventListener("click", () =>{
      const modalbg = document.querySelector(".bground");
      modalbg.style.display = "none";

    })


    // const inputSuccessBtnClose = document.createElement("button");
    // inputSuccessBtnClose.classList.add(".btn-close")
    // containerSuccessPage.appendChild(inputSuccessBtnClose);
    // // btnCloseSucessPage.style.display = "block";
    // console.log(btnCloseSucessPage)
    
  
    }; 
}


const form = document.querySelector("form");
form.addEventListener("submit", validateForm);

function firstNameActiveValidation() {
  const firstNameInput = document.querySelector("#first");
  if (validateFirstName()) {
    firstNameInput.classList.toggle("border-red", false);
    let parentContainer = firstNameInput.parentNode;
    let errorContainer = parentContainer.querySelector(".error-msg");
    errorContainer.style = "display:none;"
  }
}

const firstNameInput = document.querySelector("#first");
firstNameInput.addEventListener("keyup", firstNameActiveValidation);


function lastNameActiveValidation() {
  const lastNameInput = document.querySelector("#last");
  if (validateLastName()) {
    lastNameInput.classList.toggle("border-red", false);
    let parentContainer = lastNameInput.parentNode;
    let errorContainer = parentContainer.querySelector(".error-msg");
    errorContainer.style = "display:none;"
  }
}

const lastNameInput = document.querySelector("#last");
lastNameInput.addEventListener("keyup", lastNameActiveValidation);


function emailActiveValidation() {
  const emailInput = document.querySelector("#email");
  if (emailValidation()) {
    emailInput.classList.toggle("border-red", false);
    let parentContainer = emailInput.parentNode;
    let errorContainer = parentContainer.querySelector(".error-msg");
    errorContainer.style = "display:none;"
  }
}

const emailInput = document.querySelector("#email");
emailInput.addEventListener("keyup", emailActiveValidation);


function birthdateActiveValidation() {
  const birthdateInput = document.querySelector("#birthdate");
  if (birthdateValidation()) {
    birthdateInput.classList.toggle("border-red", false);
    let parentContainer = birthdateInput.parentNode;
    let errorContainer = parentContainer.querySelector(".error-msg");
    errorContainer.style = "display:none;"
  }
}

const birthdateInput = document.querySelector("#birthdate");
birthdateInput.addEventListener("input", birthdateActiveValidation);


function quantityActiveValidation() {
  const quantityInput = document.querySelector("#quantity");
  if (quantityValidation()) {
    quantityInput.classList.toggle("border-red", false);
    let parentContainer = quantityInput.parentNode;
    let errorContainer = parentContainer.querySelector(".error-msg");
    errorContainer.style = "display:none;"
  }
}

const quantityInput = document.querySelector("#quantity");
quantityInput.addEventListener("change", quantityActiveValidation);


function locationActiveValidation() {
  const locationContainer = document.querySelector("#location6");
 
  if (locationValidation()) {
    locationContainer.classList.toggle("border-red", false);
    let parentContainer = locationContainer.parentNode;
    let errorContainer = parentContainer.querySelector(".error-msg");
    
    errorContainer.style = "display:none;"
  }
}

const locationContainer = document.querySelector("#location");
locationContainer.addEventListener("change", locationActiveValidation);


function checkboxActiveValidation() {
  const agreementInput = document.querySelector("#checkbox1");
  if (checkboxValidation()) {
    agreementInput.classList.toggle("border-red", false);
    let parentContainer = agreementInput.parentNode;
    let errorContainer = parentContainer.querySelector(".error-msg");
    errorContainer.style = "display:none;"
  }
}

const agreementInput = document.querySelector("#checkbox1");
agreementInput.addEventListener("change", checkboxActiveValidation);

