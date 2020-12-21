import { AddToPokedexAction, Pokedex, PokedexActionTypes, RemoveFromPokedexAction } from './types'

export const initialState: Pokedex = {
	pokemon: []
}

export const pokedexReducer = (state= initialState, action?: AddToPokedexAction | RemoveFromPokedexAction) => {
	if(!action) {
		return state
	}
	switch (action.type) {
		case PokedexActionTypes.ADD_TO_POKEDEX:
			let alreadyExists = false
			state.pokemon.forEach(p => { if(p.id === action.payload.id) alreadyExists = true})
			if(alreadyExists) {
				return state
			}
			return {
				pokemon: [...state.pokemon, action.payload]
			}

		case PokedexActionTypes.REMOVE_FROM_POKEDEX:
			return {
				pokemon: state.pokemon.filter(p => p.id !== action.payload.id)
			}

		default:
			return state
	}
}
