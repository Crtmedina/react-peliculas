import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { getMovieimg } from "../utils/getMovieimg.";
import { get } from "../data/httpClient";
import "../pages/MovieDetails.css";


export function MovieDetails() {
    
    const {movieId} = useParams();
    const [movie, setMovie ] = useState([]);
    const [generos, setGeneros ] = useState([]);

    useEffect(()=>{
        get("/movie/"+movieId).then((data)=>{
            setMovie(data);
            setGeneros(data.genres[0])
            console.log(data);
        });
    },[movieId])

    const imageUrl = getMovieimg(movie.poster_path,500);

    return (
       <div className="detailsContainer">
            <img
                className="col movieImage"
                src={imageUrl} 
                alt={movie.title}
            />
            <div className="col movieDetails">
                <p className="title">
                    <strong>Título: </strong>
                    {movie.title}
                </p>
                <p>
                    <strong>Género: </strong>
                    {generos.name}
                </p>
                <p>
                    <strong>Descripcion: </strong>
                    {movie.overview}
                </p>
            </div>
       </div>
    )
}