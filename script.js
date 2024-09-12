"use strict";
//Variables
const _cardName = document.querySelector("#cardholder-name");
const _cardNumber = document.querySelector("#card-number");
const _expiredMonth = document.querySelector("#expired-month-date");
const _expiredYear = document.querySelector("#expired-year-date");
const _cvcNumber = document.querySelector("#cvc-input");
const _confirmBtn = document.querySelector(".confirm-btn");
const _displayedNum1 = document.querySelector(".num1");
const _displayedNum2 = document.querySelector(".num2");
const _displayedNum3 = document.querySelector(".num3");
const _displayedNum4 = document.querySelector(".num4");
const _displayedName = document.querySelector(".card-name");
const _displayedDate = document.querySelector(".card-date");
const _displayedCvc = document.querySelector(".card-cvc");
const _continueBtn = document.querySelector(".continue-btn");


document.addEventListener("DOMContentLoaded",() => {
  //**Specifying input values length
const inputLength = (fieldName, maxLength) => {
  fieldName.addEventListener("input", () => {
    if (fieldName.value.length > maxLength) {
      fieldName.value = fieldName.value.slice(0, maxLength);
    }
  });
};

const insertValues = () => {
  _displayedName.textContent = _cardName.value;
  _displayedNum1.textContent = _cardNumber.value.slice(0, 4);
  _displayedNum2.textContent = _cardNumber.value.slice(4, 8);
  _displayedNum3.textContent = _cardNumber.value.slice(8, 12);
  _displayedNum4.textContent = _cardNumber.value.slice(12, 16);
  document.querySelector(".m").textContent = _expiredMonth.value;
  document.querySelector(".y").textContent = _expiredYear.value;
  _displayedCvc.textContent = _cvcNumber.value;
};

//* Check Name validity
const checkName = () => {
  if (!_cardName.value) {
    _cardName.nextElementSibling.textContent = "Can't be blank";
    _cardName.style.borderColor = "hsl(0, 100%, 66%)";
    return false;
  }  _displayedName.textContent = _cardName.value;
    _cardName.nextElementSibling.textContent = "";
    _cardName.style.borderColor = "hsl(270, 3%, 87%)";
    return true;
  
};
//* Check Number validity
const checkCardNumber = () => {
  const REGEX = /^\d{16}$/;
  if (!_cardNumber.value) {
    _cardNumber.nextElementSibling.textContent = "Can't be blank";
    _cardNumber.style.borderColor = "hsl(0, 100%, 66%)";
    return false;
  } else if (!_cardNumber.value.match(REGEX)) {
    _cardNumber.nextElementSibling.textContent = "Wrong format,numbers only";
    _cardNumber.style.borderColor = "hsl(0, 100%, 66%)";
    return false;
  } 
  _displayedNum1.textContent = _cardNumber.value.slice(0, 4);
  _displayedNum2.textContent = _cardNumber.value.slice(4, 8);
  _displayedNum3.textContent = _cardNumber.value.slice(8, 12);
  _displayedNum4.textContent = _cardNumber.value.slice(12, 16);
    _cardNumber.nextElementSibling.textContent = "";
    _cardNumber.style.borderColor = "hsl(270, 3%, 87%)";
    return true;
  
};
//* Check Month validity
const checkExpiredMonth = () => {
  if (!_expiredMonth.value) {
    _expiredMonth.nextElementSibling.textContent = "Can't be blank";
    _expiredMonth.style.borderColor = "hsl(0, 100%, 66%)";
    return false;
  } else if (_expiredMonth.value < 1 || _expiredMonth.value > 12) {
    _expiredMonth.nextElementSibling.textContent =
      "Months must be between 1 and 12";
    return false;
  } 
  

  document.querySelector(".m").textContent = _expiredMonth.value;
  _expiredMonth.nextElementSibling.textContent = "";
  _expiredMonth.style.borderColor = "hsl(270, 3%, 87%)";
  return true;
};

//* Check Year validity

const checkExpiredYear = () => {
  if (!_expiredYear.value) {
    _expiredYear.nextElementSibling.textContent = "Can't be blank";
    _expiredYear.style.borderColor = "hsl(0, 100%, 66%)";
    return false;
  }
  _expiredYear.nextElementSibling.textContent = "";
  _expiredYear.style.borderColor = "hsl(270, 3%, 87%)";
  document.querySelector(".y").textContent = _expiredYear.value;
  return true;
};

//* Check Cvc validity
const checkCvc = () => {
  if (!_cvcNumber.value) {
    _cvcNumber.nextElementSibling.textContent = "Can't be blank";
    _cvcNumber.style.borderColor = "hsl(0, 100%, 66%)";
    return false;
  } else if (_cvcNumber.value.length < 3) {
    _cvcNumber.nextElementSibling.textContent = "Wrong format";
    _cvcNumber.style.borderColor = "hsl(0, 100%, 66%)";
    return false;
  }

  _displayedCvc.textContent = _cvcNumber.value;
  _cvcNumber.nextElementSibling.textContent = "";
  _cvcNumber.style.borderColor = "hsl(270, 3%, 87%)";
  return true;
};


//* Event Listener for confirmation button
_confirmBtn.addEventListener("click", () => {
  checkName();
  checkCardNumber();
  checkExpiredMonth();
  checkExpiredYear();
  checkCvc();

  if (
    checkName() &&
    checkCardNumber() &&
    checkExpiredMonth() &&
    checkExpiredYear() &&
    checkCvc()
  ) {
    document.querySelector("#card-form").classList.add("visually-hidden");
    document.querySelector(".thanks-box").classList.remove("visually-hidden");
  }
});

_continueBtn.addEventListener("click",() =>{ 
  document.querySelector("#card-form").classList.remove("visually-hidden");
  document.querySelector(".thanks-box").classList.add("visually-hidden");
  document.location.reload();
});

inputLength(_expiredMonth, 2);
inputLength(_expiredYear, 2);
inputLength(_cvcNumber, 3);
});
