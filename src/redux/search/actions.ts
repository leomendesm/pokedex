import { SearchActionTypes, SearchFailAction, SearchSuccessAction } from './types'
import { ThunkAction } from 'redux-thunk'
import { RootState } from '../reducer'
import { AnyAction } from 'redux'
import axios from 'axios'
import { API_URL } from '../../utils/constants'
import { Pokemon } from '../pokedex/types'

export const thunkSearchAction = (name: string): ThunkAction<void, RootState, unknown, AnyAction> => {
	return async dispatch => {
		dispatch({
			type: SearchActionTypes.FETCH_SEARCH,
		})
		try {
			const result = await axios.get(`${API_URL}/pokemon/${name}`)
			const pokemon = {
				name: result.data.name,
				id: result.data.id,
				image_url: result.data.sprites.other["official-artwork"]["front_default"],
				types: result.data.types.map((t: { type: { name: string } }) => t.type.name)
			}
			return dispatch(searchSuccessAction(pokemon))
		} catch (e) {
			if(e.response) {
				return dispatch(searchFailAction("Nenhum pokemon encontrado"))
			}
			else{
				return dispatch(searchFailAction("Não foi possível fazer a busca."))
			}
		}
	}
}

export const searchSuccessAction = (pokemon: Pokemon): SearchSuccessAction => {
	return {
		type: SearchActionTypes.FETCH_SEARCH_SUCCESS,
		payload: pokemon
	}
}

export const searchFailAction = (error: string): SearchFailAction => {
	return {
		type: SearchActionTypes.FETCH_SEARCH_FAIL,
		payload: error
	}
}
