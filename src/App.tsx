import React from 'react'
import Pokedex from './Containers/Pokedex'
import SearchForm from './Containers/SearchForm'
import SearchResult from './Containers/SearchResults'
import './App.css'

function App() {
  return (
    <div className="App">
			<SearchForm />
			<main>
				<div>
					<h3 className="section-title">Pokemon encontrado:</h3>
					<SearchResult />
				</div>
				<div>
					<h3 className="section-title">Sua pokedex</h3>
					<Pokedex />
				</div>
			</main>
    </div>
  )
}

export default App
