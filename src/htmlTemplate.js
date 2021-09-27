export const htmlTemplate = () => {
  const submitForm = document.querySelector('.form');
  const components = document.querySelector('.components');
  const addButton = document.querySelector(
    '.add_component'
  );

  const generateTemplate = ({
    companyName,
    address,
    email,
    telephone,
  }) => {
    let children = components.children.length;
    let liElement = document.createElement('li');
    liElement.innerHTML = `<span class="company">Название компании: ${companyName}</span>
                     <span>Адрес: ${address}</span>
                    <span>Email: ${email}</span>
                    <span>Телефон: ${telephone}</span>`;
    liElement.classList.add(`components__card`);
    liElement.id = `${children}`;
    liElement.addEventListener(
      'click',
      processCardStyleOnClick
    );
    components.prepend(liElement);
  };

  function processCardStyleOnClick() {
    const result = document.getElementById(this.id);
    result.classList.toggle('components__card');
    result.classList.toggle('changedCard');
  }

  const reverseColor = document.querySelectorAll(
    '.components__card'
  );

  reverseColor.forEach((element) =>
    element.addEventListener(
      'click',
      processCardStyleOnClick
    )
  );

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
      generateTemplate({
        companyName,
        address,
        email,
        telephone,
      });
      submitForm.reset();
    }
  };

  submitForm.addEventListener('submit', addBlock);
  addButton.addEventListener('click', addBlock);
};
