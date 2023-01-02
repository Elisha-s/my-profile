import CircularProgress from "@mui/material/CircularProgress";
import React,{useEffect, FC} from "react";
// import Movie from "./Movie"
import "./style.css"
const Movie = require('./Movie/index.tsx')

const series = ['avengers','fast and furious', 'iron man', 'harry potter']

type Props = {
    movies:any 
    setMovies : any
    setTempMovies : any
}

type TypeMovie = {
    imdbID : string
    image : string
    title: string
    year : string
}

const Movies : FC<{props : Props}> = ({props}) => 
{
    
    // useEffect(()=> {
    //     async function getData()
    //     {
    //         let api = await fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=2facc454`)
    //         api = await api.json();
    //         console.log(api);
    //     }
    // getData();},[])
    
    useEffect(()=> {
        const promises = series.map(async series => {
            const res = await fetch(`http://www.omdbapi.com/?s=${encodeURIComponent(series)}&apikey=2facc454&page=1`);
            return await res.json();
        })

        Promise.all(promises).then((movies : any)=> {

            const updatedMovies: TypeMovie[] = movies.map((movie:any) => movie.Search).flat(2).map((movie:any)=>(
                {
                    title: movie.Title,
                    year: movie.Year,
                    image: movie.Poster,
                    imdb: movie.imdbID
                }
            ))

            props.setMovies(updatedMovies)

            props.setMovies(movies.map((movie : any)=> movie.Search))
            props.setTempMovies(movies.map((movie : any)=> movie.Search))
            
        }
        )})
    
    if(props.movies.length === 0)
    {
        return <div className="loader"><CircularProgress /></div>
    }
    return (
        <div className="movies">
            {props.movies.map((movie: TypeMovie)=>{
                return <Movie props = {{ 
                key: movie.imdbID,
                title : movie.title,
                year : movie.year,
                image : movie.image }} />
            })}
        </div>
    );
}

export default Movies;
 
