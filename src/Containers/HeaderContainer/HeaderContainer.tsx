import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../app/store';
import { fetchUser } from '../../features/Queries/User/fetchUser';
import { Header } from '../../components/Header/Header';

const HeaderContainer = () => {
	const dispatch = useDispatch()
	useEffect(() => {

		dispatch(fetchUser())

	}, [])
	const user = useSelector((state: RootState) => state.user.user)

	return (
		<Header user={user} />
	)
}

export { HeaderContainer }
