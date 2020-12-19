import { PokedexActionTypes, Pokemon } from './types';
import { addToPokedex, removeFromPokedex } from './actions';

const pokemon: Pokemon = {
	image_url: 'http://example.com/',
	types: ['test', 'test2'],
	id: 1,
	name: 'Bulbasaur'
}

describe('actions', () => {
	it('should create a action to add a pokemon to pokedex', () => {
		const expectedAction = {
			type: PokedexActionTypes.ADD_TO_POKEDEX,
			payload: pokemon
		}
		expect(addToPokedex(pokemon)).toEqual(expectedAction)
	})
	it('should create a action to remove a pokemon from pokedex', () => {
		const id = 1
		const expectedAction = {
			type: PokedexActionTypes.REMOVE_FROM_POKEDEX,
			payload: {
				id: id
			}
		}
		expect(removeFromPokedex(id)).toEqual(expectedAction)
	})
})
