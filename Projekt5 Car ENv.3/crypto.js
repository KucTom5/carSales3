const apiUrl = 'https://api.coingecko.com/api/v3';
  const endpoint = '/simple/price';
  const parameters = {
    ids: 'bitcoin,ethereum',
    vs_currencies: 'usd'
  };
  
  function updateBitcoinPrice() {
    fetch(apiUrl + endpoint + '?' + new URLSearchParams(parameters))
      .then(response => response.json())
      .then(data => {
        const btcPrice = data['bitcoin']['usd'];
        const priceElement = document.getElementById('btcPrice');
        const result = price / btcPrice; 
        priceElement.textContent = result;
        document.querySelector('.result').innerText = result.toFixed(2); 
      })
      .catch(error => console.error(error));
  }

  function updateEthereumPrice() {
    fetch(apiUrl + endpoint + '?' + new URLSearchParams(ethereumParameters))
      .then(response => response.json())
      .then(data => {
        const ethPrice = data['ethereum']['usd'];
        const priceElement = document.getElementById('ethPrice');
        const result = price / ethPrice;
        priceElement.textContent = result;
        document.querySelector('.result-eth').innerText = result.toFixed(2);
      })
      .catch(error => console.error(error));
  }

  const ethereumParameters = {
    ...parameters,
    ids: 'ethereum'
  };

  window.addEventListener('DOMContentLoaded', () => {
    updateBitcoinPrice();
    setInterval(updateBitcoinPrice, 299999);
    updateEthereumPrice();
    setInterval(updateEthereumPrice, 299999);
  });

  function typeWriter(element, text, speed) {
    let i = 0;
    function type() {
      if (i < text.length) {
        element.textContent += text.charAt(i);
        i++;
        setTimeout(type, speed);
      }
    }
    type();
  }
  const warningElement = document.getElementById('warning');
  typeWriter(warningElement, ' Due to server overload, the BTC and ETH prices update every 5 minutes from coingecko.com after the first API call.', 50);

