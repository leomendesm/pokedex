import React from 'react'
import Pokedex from './Containers/Pokedex';

function App() {
  return (
    <div className="App">
      <header className="App-header">
				<h1>Pokedex</h1>
				<input type="text" />
      </header>
			<main>
				<div>
					<h3>Pokémons encontrados</h3>
				</div>
				<div>
					<h3>Sua pokedex</h3>
					<Pokedex />
				</div>
			</main>
    </div>
  )
}

export default App
