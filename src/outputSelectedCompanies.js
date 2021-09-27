const findButton = document.querySelector(
  '.findListButton'
);

export const outputSelectedCompanies = () => {
  const componentsElem =
    document.getElementById('components');
  function findList() {
    const selectedCards =
      document.querySelectorAll('.changedCard');
    if (
      selectedCards.length &&
      componentsElem.getElementsByClassName('changedCard')
    ) {
      const findCompanyName = [...selectedCards];
      console.clear();
      findCompanyName.forEach(function (child) {
        console.log(child.firstChild.textContent);
      });
    } else {
      console.log('тут пусто');
    }
  }
  findButton.addEventListener('click', findList);
};
