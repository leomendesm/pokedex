import configureStore from 'redux-mock-store'
import { thunkSearchAction } from './actions'
import thunk from 'redux-thunk'
import { SearchActionTypes } from './types'
import axios from 'axios';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

const middlewares = [thunk]
const mockStore = configureStore(middlewares)


it('should dispatch fetching action',  () => {
	const initialState = {}
	const store = mockStore(initialState)

// @ts-ignore
	store.dispatch(thunkSearchAction("test"))

	const actions = store.getActions()
	const expectedPayload = { type: SearchActionTypes.FETCH_SEARCH }
	expect(actions[0]).toEqual(expectedPayload)

})

it('should dispatch a error when fetching an unknown pokemon', async () => {
	const initialState = {}
	const store = mockStore(initialState)

	mockedAxios.get.mockRejectedValue({response: {}})

	// @ts-ignore
	return store.dispatch(thunkSearchAction("test")).then(() => {
		const actions = store.getActions()
		const expectedPayload = [
			{
				type: SearchActionTypes.FETCH_SEARCH
			},
			{
				type: SearchActionTypes.FETCH_SEARCH_FAIL,
				payload: "Nenhum pokemon encontrado"
			}
		]
		expect(actions).toEqual(expectedPayload)
	})
})

it('should dispatch a success when fetching an known pokemon', async () => {
	const initialState = {}
	const store = mockStore(initialState)

	mockedAxios.get.mockResolvedValue({data: {
			name: "bulbasaur",
			id: 1,
			sprites: {
				other: {
					"official-artwork": {
						"front_default": "test"
					}
				}
			},
			types: [{type: {name: "test"}}]
		}})

	// @ts-ignore
	return store.dispatch(thunkSearchAction("bulbasaur")).then(() => {
		const actions = store.getActions()
		const expectedPayload = [
			{
				type: SearchActionTypes.FETCH_SEARCH
			},
			{
				type: SearchActionTypes.FETCH_SEARCH_SUCCESS,
				payload: {
					name: "bulbasaur",
					id: 1,
					image_url: "test",
					types: ["test"]
				}
			}
		]
		expect(actions).toEqual(expectedPayload)
	})
})
