import React, { useEffect } from 'react'
import Pokemon from '../Components/Pokemon'
import './Pokedex.css'
import { connect, useDispatch } from 'react-redux'
import { RootState } from '../redux/reducer'
import { Pokemon as IPokemon } from '../redux/pokedex/types'
import { addToPokedex } from '../redux/pokedex/actions'

interface PokedexProps {
	pokemon: IPokemon[]
}
const Pokedex = ({pokemon}: PokedexProps): JSX.Element => {
	console.log(pokemon)
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(addToPokedex({
			name:"bulbasaur",
			image_url:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
			types:['grass', 'poison'],
			id:1
		}))
	}, [dispatch])

	return (
		<div className="Pokedex">
			{pokemon.map(p =>
				<Pokemon
					name={p.name}
					image_url={p.image_url}
					types={p.types}
					id={p.id}
					key={p.id}
				/>
			)}
		</div>
	)
}

const mapStateToProps = (store: RootState) => {
	return {
		pokemon: store.pokedexReducer.pokemon
	}
}

export default connect(mapStateToProps)(Pokedex)
