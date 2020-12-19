import React from 'react'
import './Pokemon.css'
import Delete from './Delete';

interface PokemonProps {
	name: string
	image_url: string
	types: string[]
	id: number
}

const Pokemon = ({name, image_url, types, id}: PokemonProps): JSX.Element => {
	const species = types.map(t => <div><span>{t}</span></div>)
	return <div className="Pokemon">
		<Delete onClick={() => {}} className="close" />
		<img src={image_url} alt=""/>
		<div className="info">
			<div className="name">{name}<span>#{id}</span></div>
			<div className="species">{species}</div>
		</div>
	</div>
}

export default Pokemon
