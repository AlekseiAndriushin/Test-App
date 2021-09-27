const findButton = document.querySelector('.findList');

export const showedTakenElements = () => {
  const componentsElem =
    document.getElementById('components');
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
  findButton.addEventListener('click', findList);
};
