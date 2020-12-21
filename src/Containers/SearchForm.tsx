import React, { useState } from 'react'
import { DebounceInput } from 'react-debounce-input'
import { useDispatch } from 'react-redux';
import { thunkSearchAction } from '../redux/search/actions';

const SearchForm = () => {
	const [name, setName] = useState('')
	const dispatch = useDispatch()
	return (
		<header className="App-header">
			<h1>Pokedex</h1>
			<DebounceInput
				minLength={2}
				debounceTimeout={400}
				value={name}
				onChange={event => {
					setName(event.target.value)
					dispatch(thunkSearchAction(event.target.value))
				}} />
	</header>
	)
}

export default  SearchForm
