import { Search, SearchAction, SearchActionTypes, SearchFailAction, SearchSuccessAction } from './types'

export const initialState: Search = {
	error: '',
	hasError: false,
	isFetching: false,
	data: undefined
}
const searchReducer = (state:Search = initialState, action?: SearchAction | SearchSuccessAction | SearchFailAction) => {
	if(!action) {
		return state
	}
	switch (action.type) {
		case SearchActionTypes.FETCH_SEARCH:
			return {
				isFetching: true,
				hasError: false,
				error: '',
				data: undefined
			}
		case SearchActionTypes.FETCH_SEARCH_SUCCESS:
			return {
				isFetching: false,
				hasError: false,
				error: '',
				data: action.payload
			}
		case SearchActionTypes.FETCH_SEARCH_FAIL:
			return {
				isFetching: false,
				hasError: true,
				error: action.payload,
				data: undefined
			}
		default:
			return state
	}
}

export default searchReducer
