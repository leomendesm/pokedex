import React, { useState } from 'react'
import { DebounceInput } from 'react-debounce-input'
import { useDispatch } from 'react-redux'
import { thunkSearchAction } from '../../redux/search/actions'
import './SearchForm.css'
import Search from '../../Components/Search'

const SearchForm = () => {
	const [name, setName] = useState('')
	const dispatch = useDispatch()
	return (
		<header className="App-header">
			<h1 className='title'>Pokedex</h1>
			<div className="SearchForm">
				<DebounceInput
					minLength={2}
					debounceTimeout={400}
					placeholder="Digite o nome do pokemon aqui"
					value={name}
					onChange={event => {
						setName(event.target.value)
						dispatch(thunkSearchAction(event.target.value))
					}}
				/>
					<Search onClick={() => {
						dispatch(thunkSearchAction(name))
						setName("")
					}} />
			</div>
	</header>
	)
}

export default  SearchForm
