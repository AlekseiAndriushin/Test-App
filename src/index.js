import './styles/index.scss';
const submitForm = document.querySelector('.add');
const addButton = document.querySelector('.add_component');
const component = document.querySelector('.components');
const findButton = document.querySelector('.findList');
const componentsElem =
  document.getElementById('components');
const takeCard = document.querySelector(
  '.components__card'
);
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

const reverseColor = document.querySelectorAll(
  '.components__card'
);

reverseColor.forEach((element) =>
  element.addEventListener('click', adding)
);

function findList() {
  const searchCompanies =
    document.querySelectorAll('.changedCard');
  if (
    searchCompanies.length &&
    componentsElem.getElementsByClassName('changedCard')
  ) {
    const findCompanyName = [...searchCompanies];
    console.clear();
    findCompanyName.forEach(function (child) {
      console.log(child.firstChild.textContent);
    });
  } else {
    console.log('тут пусто');
  }
}

const generateTempalate = (
  companyName,
  address,
  email,
  telephone
) => {
  let children = component.children.length;
  let liElement = document.createElement('li');
  liElement.innerHTML = `<span class="company">Название компании: ${companyName}</span>
                     <span>Адрес: ${address}</span>
                    <span>Email: ${email}</span>
                    <span>Телефон: ${telephone}</span>`;
  liElement.classList.add(`components__card`);
  liElement.id = `${children}`;
  liElement.addEventListener('click', adding);
  component.prepend(liElement);
  component.addEventListener('click', function (e) {
    if (e.target === children) {
      console.log('hello', `${children}`);
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

function onClickField(e) {
  if (e.button === 2 && e.target.nodeName === 'UL') {
    alert('Меню для списка компаний');
  }
}

function onClickCard(event) {
  if (
    event.which === 3 &&
    event.target.nodeName === 'SPAN'
  ) {
    alert('Меню для карточки');
  }
}

async function getData(url) {
  let data = await fetch(url);
  let json = await data.json();
  return json;
}

function createElementFollowers(repoFollowers) {
  const ulList = document.createElement('ul');
  ulList.classList.add('followersWrapper');
  if ([...repoFollowers]) {
    repoFollowers.forEach((repoItem) => {
      const listItem = document.createElement('li');
      listItem.classList.add('followersItem');
      const listItemTextNode = document.createTextNode(
        repoItem.login
      );
      listItem.appendChild(listItemTextNode);
      let image = document.createElement('img');
      image.src = repoItem.avatar_url;
      image.width = 50;
      ulList.appendChild(listItem).appendChild(image);
      document.querySelector('#footer').appendChild(ulList);
    });
  } else {
    return;
  }
}

function createProfile(profileData) {
  if (
    profileData.avatar_url &&
    profileData.company &&
    profileData.name
  ) {
    const heading = document.createElement('span');
    const headingTextNode = document.createTextNode(
      `Github profile: ${profileData.name}
			Company: ${profileData.company}`
    );
    heading.appendChild(headingTextNode);
    document.querySelector('#footer').appendChild(heading);

    let image = document.createElement('img');
    image.src = profileData.avatar_url;
    image.width = 100;
    document.querySelector('#footer').appendChild(image);
  } else {
    return;
  }
}

getData('https://api.github.com/users/gaearon').then(
  (data) => {
    createProfile(data);
  }
);
getData(
  'https://api.github.com/users/gaearon/followers'
).then((data) => {
  createElementFollowers(data);
});

submitForm.addEventListener('submit', addBlock);
addButton.addEventListener('click', addBlock);
findButton.addEventListener('click', findList);
component.addEventListener('mousedown', onClickField);
takeCard.addEventListener('mousedown', onClickCard);
