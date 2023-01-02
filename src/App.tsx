import React, {useState,FC} from "react"
import './App.css';
const Header = require('./components/Header/Header.tsx')
// import {Movies} from './components/Movies/index'
const Movies = require('./components/Movies/index.tsx')

type TypeMovie = {
	imdbID : string
	title: string
	image:string 
	year: string 
}

const App : FC = () => {

	const[movies,setMovies] = useState<TypeMovie[]>([]);
	const[tempMovies, setTempMovies] = useState<TypeMovie[]>([]);
	return (
		<div className="App">
				<Header movies={movies} setMovies={setTempMovies}/>
				<Movies props = {{movies:{tempMovies}, setMovies:{setMovies}, setTempMovies:{setTempMovies}}}/>
		</div>
	);
}

export default App
