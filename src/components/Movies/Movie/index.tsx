import React, {FC} from "react"
import "./style.css"

type Props = {
    imdbID?: string
    image: string
    title: string
    year: string
}

const Movie : FC<{props : Props}> = ({props}) =>
{
    return ( 
        <div className="movie">
            <h2>{props.title}</h2>
            <img src={props.image} alt = {props.title}/>
            <h3>{props.year}</h3>
        </div>
    );
}

export default Movie;