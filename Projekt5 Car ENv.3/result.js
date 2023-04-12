const urlParams = new URLSearchParams(window.location.search);
const modelType = urlParams.get('modelType');
const price = parseFloat(urlParams.get('price'));
const modelTypeDiv = document.getElementById('modelType');
const priceDiv = document.getElementById('price');

modelTypeDiv.textContent = modelType;
priceDiv.textContent = price;

const addWinterTiresBtn = document.getElementById("addWinterTiresBtn");
const removeWinterTiresBtn = document.getElementById("removeWinterTiresBtn");

removeWinterTiresBtn.setAttribute('disabled', '');

addWinterTiresBtn.addEventListener("click", () => {
  let currentPrice = parseInt(priceDiv.textContent);
  priceDiv.textContent = currentPrice + 2500;
  addWinterTiresBtn.setAttribute('disabled', '');
  removeWinterTiresBtn.removeAttribute('disabled');
});

removeWinterTiresBtn.addEventListener("click", () => {
  let currentPrice = parseInt(priceDiv.textContent);
  if (currentPrice > 0) {
    priceDiv.textContent = currentPrice - 2500;
  }
  removeWinterTiresBtn.setAttribute('disabled', '');
  addWinterTiresBtn.removeAttribute('disabled');
});

const addYearOfWarrantyBtn = document.getElementById("addYearOfWarrantyBtn");
const removeYearOfWarrantyBtn = document.getElementById("removeYearOfWarrantyBtn");

removeYearOfWarrantyBtn.setAttribute('disabled', '');

addYearOfWarrantyBtn.addEventListener("click", () => {
  let currentPrice = parseInt(priceDiv.textContent);
  priceDiv.textContent = currentPrice + 5000;
  addYearOfWarrantyBtn.setAttribute('disabled', '');
  removeYearOfWarrantyBtn.removeAttribute('disabled');
});

removeYearOfWarrantyBtn.addEventListener("click", () => {
  let currentPrice = parseInt(priceDiv.textContent);
  if (currentPrice > 0) {
    priceDiv.textContent = currentPrice - 5000;
  }
  removeYearOfWarrantyBtn.setAttribute('disabled', '');
  addYearOfWarrantyBtn.removeAttribute('disabled');
});

const addServiceVoucherBtn = document.getElementById("addServiceVoucherBtn");
const removeServiceVoucherBtn = document.getElementById("removeServiceVoucherBtn");

removeServiceVoucherBtn.setAttribute('disabled', '');

addServiceVoucherBtn.addEventListener("click", () => {
  let currentPrice = parseInt(priceDiv.textContent);
  priceDiv.textContent = currentPrice + 1500 ;
  addServiceVoucherBtn.setAttribute('disabled', '');
  removeServiceVoucherBtn.removeAttribute('disabled');
});

removeServiceVoucherBtn.addEventListener("click", () => {
  let currentPrice = parseInt(priceDiv.textContent);
  if (currentPrice > 0) {
    priceDiv.textContent = currentPrice - 1500;
  }
  removeServiceVoucherBtn.setAttribute('disabled', '');
  addServiceVoucherBtn.removeAttribute('disabled');
});

const nameInput = document.querySelector('#nameInput');
const CityInput = document.querySelector('#CityInput');
const dateInput = document.querySelector('#dateInput');
const radioInputs = document.querySelectorAll('input[type="radio"]');

const formValue = localStorage.getItem('formValue');

if (formValue) {
  radioInputs.forEach(input => {
    if (input.value === formValue) {
      input.checked = true;
    }
  });
}

radioInputs.forEach(input => {
  input.addEventListener('change', () => {
    localStorage.setItem('formValue', input.value);
  });
});

nameInput.addEventListener('input', () => {
  localStorage.setItem('nameValue', nameInput.value);
});
CityInput.addEventListener('input', () => {
  localStorage.setItem('CityValue', CityInput.value);
});
dateInput.addEventListener('input', () => {
  localStorage.setItem('dateValue', dateInput.value);
});

if (localStorage.getItem('nameValue')) {
  nameInput.value = localStorage.getItem('nameValue');
}
if (localStorage.getItem('CityValue')) {
  CityInput.value = localStorage.getItem('CityValue');
}
if (localStorage.getItem('dateValue')) {
  dateInput.value = localStorage.getItem('dateValue');
}

function clearLocalStorage() {
  localStorage.clear();
}

function validateForm() {
  const name = document.getElementById("nameInput").value.trim();
  const city = document.getElementById("CityInput").value.trim();
  const date = document.getElementById("dateInput").value.trim();

  if (name === "") {
    document.querySelector(".errorMessage").innerHTML = "Enter your first and last name";
    return false;
  }

  if (!/^[A-Z]/.test(name)) {
    document.querySelector(".errorMessage").innerHTML = "First and last name should start with a capital letter";
    return false;
  }

  if (!/\s/.test(name)) {
    document.querySelector(".errorMessage").innerHTML = "Enter your first and last name";
    return false;
  }

  const nameArr = name.split(' ');
  const lastName = nameArr[1];

  if (!/^[A-Z]/.test(lastName)) {
  document.querySelector(".errorMessage").innerHTML = "Enter last name with a capital letter";
  return false;
}

  if (city === "") {
    document.querySelector(".errorMessage").innerHTML = "Enter city";
    return false;
  }

  if (!/^[A-Z]/.test(city)) {
    document.querySelector(".errorMessage").innerHTML = "City name should start with a capital letter";
    return false;
  }
  if (city.length < 3) {
    document.querySelector(".errorMessage").innerHTML = "City name should have a minimum of 3 letters";
    return false;
  }
  
  if (date === "") {
    document.querySelector(".errorMessage").innerHTML = "Please provide the pickup date";
    return false;
  }

  const today = new Date();
  const selectedDate = new Date(date);
  const diffInTime = selectedDate.getTime() - today.getTime();
  const diffInDays = diffInTime / (1000 * 3600 * 24);
  
  if (diffInDays < 0) {
  document.querySelector(".errorMessage").innerHTML = "We do not ship backwards :)";
  return false;
  }
  
  if (diffInDays < 14) {
  document.querySelector(".errorMessage").innerHTML = "The earliest it can be delivered to you is in 2 weeks, please change the delivery date";
  return false;
  }
  
  return true;
  }

  function clearLocalStorage() {
    localStorage.setItem('modelType', modelType);
    localStorage.setItem('price', price);
  }
  