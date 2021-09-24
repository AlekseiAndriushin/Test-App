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
function adding() {
  const result = document.getElementById(this.id);
  let classChange = document.getElementById(
    this.id
  ).classList;
  if (classChange.contains('components__card')) {
    result.classList.remove('components__card');
    result.classList.add('changedCard');
  } else {
    result.classList.remove('changedCard');
    result.classList.add('components__card');
  }
}

const generateTempalate = (
  companyName,
  address,
  email,
  telephone
) => {
  let child_nodes = component.childNodes;
  let child_nodes_length = child_nodes.length;
  let liElement = document.createElement('li');
  liElement.innerHTML = `<span>Название компании: ${companyName}</span>
                     <span>Адрес: ${address}</span>
                    <span>Email: ${email}</span>
                    <span>Телефон: ${telephone}</span>`;
  liElement.classList.add(`components__card`);
  liElement.id = `${child_nodes_length}`;
  liElement.addEventListener('click', adding);
  component.prepend(liElement);
  component.addEventListener('click', function (e) {
    if (e.target === child_nodes_length) {
      console.log('hello', `${child_nodes_length}`);
    }
  });
};

const addBlock = (e) => {
  e.preventDefault(e);
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
    generateTempalate(
      companyName,
      address,
      email,
      telephone
    );
    submitForm.reset();
  }
};

submitForm.addEventListener('submit', addBlock);
addButton.addEventListener('click', addBlock);
