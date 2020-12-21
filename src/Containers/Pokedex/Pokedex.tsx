import React from 'react'
import Pokemon from '../../Components/Pokemon'
import './Pokedex.css'
import { connect } from 'react-redux'
import { RootState } from '../../redux/reducer'
import { Pokemon as IPokemon } from '../../redux/pokedex/types'

interface PokedexProps {
	pokemon: IPokemon[]
}
const Pokedex = ({pokemon}: PokedexProps): JSX.Element => {
	return (
		<div className="Pokedex">
			{pokemon.length === 0 &&
				<p>Você ainda não possui nenhum pokemon em sua pokedex, experimente a opção de favoritar após a busca!</p>
			}
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
