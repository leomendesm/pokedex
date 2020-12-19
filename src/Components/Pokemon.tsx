import React from 'react'
import './Pokemon.css'
import Delete from './Delete';
import { useDispatch } from 'react-redux';
import { removeFromPokedex } from '../redux/pokedex/actions';

interface PokemonProps {
	name: string
	image_url: string
	types: string[]
	id: number
}

const Pokemon = ({name, image_url, types, id}: PokemonProps): JSX.Element => {
	const dispatch = useDispatch()
	const species = types.map((t, index) => <div key={`s-${id}-${index}`}><span>{t}</span></div>)
	return <div className="Pokemon">
		<Delete onClick={() => {dispatch(removeFromPokedex(id))}} className="close" />
		<img src={image_url} alt=""/>
		<div className="info">
			<div className="name">{name}<span>#{id}</span></div>
			<div className="species">{species}</div>
		</div>
	</div>
}

export default Pokemon
