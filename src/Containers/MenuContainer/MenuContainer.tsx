import React, { SyntheticEvent } from 'react'
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { Menu } from '../../components/Menu/Menu'
import { logout } from '../../features/Slices/Auth/AuthService'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { removingDuplicateItems } from '../../utils/removingDuplicateItems'
import { RouteNames } from '../../router';

export const MenuContainer = () => {

	const { isAuth } = useTypedSelector(state => state.auth)

	const router = useHistory();

	const dispatch = useDispatch()

	const handleLogout = (event: SyntheticEvent) => {
		event.preventDefault()
		dispatch(logout())
		// router.push(RouteNames.LOGIN);

	}
	const takenCards = useTypedSelector(state => state.cards.card)
	const answer: Array<string> = []
	const findList = () => {
		takenCards?.map((card) => card.taken ? answer.push(card.company) : null)
		if (answer.length) {
			console.clear()
			console.log(removingDuplicateItems(answer))
		} else {
			console.log("тут пусто")
		}

	};
	return (
		<Menu findList={findList} isAuth={isAuth} handleLogout={handleLogout} />
	)
}

