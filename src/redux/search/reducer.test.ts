import searchReducer, { initialState }  from './reducer'
import { SearchActionTypes } from './types'


describe('search reducer', () => {
	it('should return the initial state', () => {
		expect(searchReducer(undefined)).toEqual(initialState)
	})

	it('should handle FETCH_SEARCH', () => {
		const result = {
			isFetching: true,
			hasError: false,
			error: '',
			data: undefined
		}
		expect(
			searchReducer(initialState, {
				type: SearchActionTypes.FETCH_SEARCH,
			})
		).toEqual(result)
	})

	it('should handle FETCH_SEARCH_SUCCESS', () => {
		const result = {
			isFetching: false,
			hasError: false,
			error: '',
			data: {
				id: 1,
				image_url: "test",
				name: "test2",
				types: ["test3", "test4"]
			}
		}
		expect(
			searchReducer(initialState, {
				type: SearchActionTypes.FETCH_SEARCH_SUCCESS,
				payload: {
					id: 1,
					image_url: "test",
					name: "test2",
					types: ["test3", "test4"]
				}
			})
		).toEqual(result)
	})
	it('should handle FETCH_SEARCH_FAIL', () => {
		const result = {
			isFetching: false,
			hasError: true,
			error: 'error test',
			data: undefined
		}
		expect(
			searchReducer(initialState, {
				type: SearchActionTypes.FETCH_SEARCH_FAIL,
				payload: 'error test'
			})
		).toEqual(result)
	})
})
