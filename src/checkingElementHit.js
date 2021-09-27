const component = document.querySelector('.content');
const takeCard = document.querySelector(
  '.components__card'
);
export const checkingElementHit = () => {
  function onClickField(e) {
    if (e.button === 2) {
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

  component.addEventListener('mousedown', onClickField);
  takeCard.addEventListener('mousedown', onClickCard);
};
