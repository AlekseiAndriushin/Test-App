import './styles/index.scss';

document
  .querySelector('.themes')
  .addEventListener('change', (event) => {
    if (event.target.nodeName === 'INPUT') {
      document.documentElement.classList.remove(
        'red',
        'blue'
      );
      document.documentElement.classList.add(
        event.target.value
      );
    }
  });

document
  .getElementById('inputCompanyName')
  .addEventListener('input', function addText() {
    document.getElementById('divCompanyName').innerText =
      this.value;
  });

document
  .getElementById('inputAddress')
  .addEventListener('input', function addText() {
    document.getElementById('divInputAddress').innerText =
      this.value;
  });

document
  .getElementById('inputEmail')
  .addEventListener('input', function addText() {
    document.getElementById('divEmail').innerText =
      this.value;
  });

document
  .getElementById('inputPhone')
  .addEventListener('input', function addText() {
    document.getElementById('divPhone').innerText =
      this.value;
  });
