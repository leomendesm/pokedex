import React from 'react'
import Pokemon from '../Components/Pokemon';
import './Pokedex.css'

const Pokedex = (): JSX.Element => (<div className="Pokedex">
	<Pokemon
		name="bulbasaur"
		image_url="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"
		types={['grass', 'poison']}
		id={1}
	/>
	<Pokemon
		name="bulbasaur"
		image_url="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"
		types={['grass', 'poison']}
		id={2}
	/>
	<Pokemon
		name="bulbasaur"
		image_url="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"
		types={['grass', 'poison']}
		id={3}
	/>
</div>)

export default Pokedex
