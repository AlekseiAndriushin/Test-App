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

const submitForm = document.querySelector('.add');
const addButton = document.querySelector('.add_component');
const component = document.querySelector('.components');
const list = document.querySelectorAll('.components li');

let listLenght = list.lenght;

const generateTempalate = (
  companyName,
  address,
  email,
  telephone
) => {
  const html = `<li>
                  <label for="result_${listLenght}">
                    <span class="check"></span>
                    Название компании: ${companyName}
                    <br/>
                    Адрес: ${address}
                    <br/>
                    Email: ${email}
                    <br/>
                    Телефон: ${telephone}
                    <br/>
                  </label>
                </li>`;
  component.innerHTML += html;
};

function addBlock(e) {
  e.preventDefault();
  const companyName = submitForm.companyName.value.trim();
  const address = submitForm.address.value.trim();
  const email = submitForm.email.value.trim();
  const telephone = submitForm.telephone.value.trim();
  if (
    companyName.length &&
    address.length &&
    email.length &&
    telephone.length
  ) {
    listLenght = listLenght + 1;
    generateTempalate(
      companyName,
      address,
      email,
      telephone
    );
    submitForm.reset();
  }
}

submitForm.addEventListener('submit', addBlock);
addButton.addEventListener('click', addBlock);
