export interface Pokemon {
	name: string
	image_url: string
	types: string[]
	id: number
}

export interface Pokedex {
	pokemon: Pokemon[]
}

export enum PokedexActionTypes {
	ADD_TO_POKEDEX = "ADD_TO_POKEDEX",
	REMOVE_FROM_POKEDEX = "REMOVE_FROM_POKEDEX",
}

export interface AddToPokedexAction {
	type: PokedexActionTypes.ADD_TO_POKEDEX,
	payload: Pokemon
}

export interface RemoveFromPokedexAction {
	type: PokedexActionTypes.REMOVE_FROM_POKEDEX,
	payload: {
		id: number
	}
}
