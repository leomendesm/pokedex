import { Pokemon } from '../pokedex/types'

export interface Search {
	isFetching: boolean
	hasError: boolean
	error: string
	data?: Pokemon
}

export enum SearchActionTypes {
	FETCH_SEARCH = "FETCH_SEARCH",
	FETCH_SEARCH_SUCCESS = "FETCH_SEARCH_SUCCESS",
	FETCH_SEARCH_FAIL = "FETCH_SEARCH_FAIL",
}

export interface SearchAction {
	type: SearchActionTypes.FETCH_SEARCH,
}

export interface SearchSuccessAction {
	type: SearchActionTypes.FETCH_SEARCH_SUCCESS,
	payload: Pokemon
}

export interface SearchFailAction {
	type: SearchActionTypes.FETCH_SEARCH_FAIL,
	payload: string
}
