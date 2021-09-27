const takeContentBlock = document.querySelector('.content');
const takeCard = document.querySelectorAll(
  '.components__card'
);
export const checkingElementHit = () => {
  function onClickContentBlock(e) {
    if (
      (e.button === 2 && e.target.nodeName === 'SECTION') ||
      (e.button === 2 && e.target.nodeName === 'UL')
    ) {
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

  takeContentBlock.addEventListener(
    'mousedown',
    onClickContentBlock
  );
  takeCard.forEach((clickCard) =>
    clickCard.addEventListener('mousedown', onClickCard)
  );
};
