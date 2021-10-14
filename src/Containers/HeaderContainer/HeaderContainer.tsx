import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../app/store';
import { fetchUser } from '../../features/Queries/User/fetchUser';
import { Header } from '../../components/Header/Header';

export const HeaderContainer = () => {
	const dispatch = useDispatch()
	useEffect(() => {

		dispatch(fetchUser())

	}, [])
	const { user, isLoading } = useSelector((state: RootState) => state.user)

	return (
		<Header user={user} isLoading={isLoading} />
	)
}

