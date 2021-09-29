const findButton = document.querySelector(
  '.findListButton'
);

export const outputSelectedCompanies = () => {
  const findList = () => {
    const selectedCards = document.querySelectorAll(
      '.components__card__selected '
    );
    if (selectedCards.length) {
      console.clear();
      selectedCards.forEach((child) => {
        console.log(child.firstChild.textContent);
      });
    } else {
      console.log('тут пусто');
    }
  };
  findButton.addEventListener('click', findList);
};
