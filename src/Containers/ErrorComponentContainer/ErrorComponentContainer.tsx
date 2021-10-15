import React from 'react'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { ErrorComponent } from '../../components/ErrorComponent/ErrorComponent'



export const ErrorComponentContainer = () => {

	const { isAuth } = useTypedSelector(state => state.auth)

	return (
		<ErrorComponent isAuth={isAuth} />
	)
}
