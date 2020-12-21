import React from 'react'
import { RootState } from '../../redux/reducer'
import Pokemon from '../../Components/Pokemon'
import { connect } from 'react-redux'
import { Search } from '../../redux/search/types'
import ReactLoading from 'react-loading'
import './SearchResults.css'

interface SearchResultProps {
	search: Search
}

const SearchResult = ({search}: SearchResultProps) => {
	if(search.hasError) {
		return <div className="SearchResult"><p>{search.error}</p></div>
	}
	if(search.isFetching) {
		return <div className="SearchResult"><ReactLoading color="#2b9880" type={'spin'} /></div>
	}
	if(!search.data) {
		return <div className="SearchResult"><p>Digite o nome do pokemon para iniciar uma busca na pokedex.</p></div>
	}
	const pokemon = search.data
	return <div className="SearchResult">
		<Pokemon name={pokemon.name} id={pokemon.id} image_url={pokemon.image_url} types={pokemon.types} favorite={true} />
	</div>
}

const mapStateToProps = (store: RootState) => {
	return {
		search: store.searchReducer
	}
}

export default connect(mapStateToProps)(SearchResult)
