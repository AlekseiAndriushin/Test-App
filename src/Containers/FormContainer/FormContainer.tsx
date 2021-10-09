import React, { FocusEvent, SyntheticEvent, useState } from 'react'
import { useDispatch } from 'react-redux';
import { addCard } from '../../features/Slices/cards/cardsSlice';
import { Form } from '../../components/Form/Form';

export const FormContainer = () => {

	const dispatch = useDispatch();

	const initialState = {
		company: '',
		address: '',
		email: '',
		phone: ''
	}

	const [formData, setFormData] = useState(initialState)

	const { company, address, email, phone } = formData;

	const onChange = (e: FocusEvent<HTMLInputElement>) =>
		setFormData({ ...formData, [e.target.name]: e.target.value });

	const handleSubmit = (event: SyntheticEvent) => {

		event.preventDefault()
		dispatch(addCard({
			id: Date.now().toString(),
			address,
			company,
			email,
			phone,
			taken: false
		}))

		setFormData(initialState)
	}
	return (
		<Form formData={formData}
			onChange={onChange}
			handleSubmit={handleSubmit} />
	)
}

