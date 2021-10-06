import React from 'react'
import Button from '../Button/Button'
import './Menu.scss'

const Menu = () => {

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
	return (
		<menu className="menu">
			<Button title="узнать список компаний" onClick={findList} />
		</menu>
	)
}

export default Menu
