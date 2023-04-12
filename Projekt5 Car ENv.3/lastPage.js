const modelType = localStorage.getItem('modelType');
const price = localStorage.getItem('price');
const modelTypeDiv = document.getElementById('modelType');
const priceDiv = document.getElementById('price');

if (modelType && price) {
  modelTypeDiv.textContent = modelType;
} else {
  modelTypeDiv.textContent = 'Nie wybrano modelu';
  priceDiv.textContent = 'Nie wybrano ceny';
}

const imageDiv = document.getElementById('image');

if (modelType === 'BMWi4') {
  imageDiv.src = './Picture/BMWi4.JPG';
  imageDiv.alt = 'BMW i4';
} else if (modelType === 'Fiat e500') {
  imageDiv.src = './Picture/Fiat500.JPG';
  imageDiv.alt = 'Fiat e500';
} else if (modelType === 'Porsche Turismo') {
  imageDiv.src = './Picture/PorscheTurismo.JPG';
  imageDiv.alt = 'Porsche Turismo';
} else if (modelType === 'Jaguar I-Pace') {
  imageDiv.src = './Picture/JaguarIPace.JPG';
  imageDiv.alt = 'JaguarIPace';
} else if (modelType === 'Mini Electric') {
  imageDiv.src = './Picture/MiniElectric.JPG';
  imageDiv.alt = 'Mini Electric';
}  else if (modelType === 'Peugeot e-2008') {
  imageDiv.src = './Picture/PeugeotE2008.JPG';
  imageDiv.alt = 'FPeugeot e2008';
} else if (modelType === 'Polestar 2') {
  imageDiv.src = './Picture/Polestar2.JPG';
  imageDiv.alt = 'Polestar 2';
} else if (modelType === 'Mercedes sBenz EQS') {
  imageDiv.src = './Picture/sBenzEQS.JPG';
  imageDiv.alt = 'JBenzEQS';
} else if (modelType === 'Volvo XC40') {
  imageDiv.src = './Picture/VolvoXC40.JPG';
  imageDiv.alt = 'VolvoXC40';
}

else {
  imageDiv.src = '';
  imageDiv.alt = '';
}
