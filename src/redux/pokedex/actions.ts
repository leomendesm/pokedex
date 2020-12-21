import { AddToPokedexAction, PokedexActionTypes, Pokemon, RemoveFromPokedexAction } from './types'

export function addToPokedex(pokemon: Pokemon): AddToPokedexAction {
	return {
		type: PokedexActionTypes.ADD_TO_POKEDEX,
		payload: pokemon
	}
}

export function removeFromPokedex(id: number): RemoveFromPokedexAction {
	return {
		type: PokedexActionTypes.REMOVE_FROM_POKEDEX,
		payload: {
			id
		}
	}
}
