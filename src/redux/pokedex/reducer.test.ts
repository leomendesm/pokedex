import { initialState, pokedexReducer } from './reducer';
import { PokedexActionTypes, Pokemon } from './types'

const pokemon: Pokemon = {
	image_url: 'http://example.com/',
	types: ['test', 'test2'],
	id: 1,
	name: 'Bulbasaur'
}

describe('reducer', () => {
	it('should return the initial state', () => {
		expect(pokedexReducer(undefined)).toEqual(initialState)
	})

	it('should handle ADD_TO_POKEDEX', () => {
		expect(
			pokedexReducer({pokemon: []}, {
				type: PokedexActionTypes.ADD_TO_POKEDEX,
				payload: pokemon
			})
		).toEqual({pokemon: [pokemon]})
	})
	it('should handle REMOVE_FROM_POKEDEX', () => {
		expect(
			pokedexReducer({pokemon: [pokemon]}, {
				type: PokedexActionTypes.REMOVE_FROM_POKEDEX,
				payload: {id: 1}
			})
		).toEqual({pokemon: []})
	})
})
