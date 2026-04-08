import { useParams } from "react-router-dom"
import { get } from "../data/httpclient"
import { useEffect, useState } from "react"
import { getMovieImg } from "../utils/getMovieImg"
import "../pages/MovieDetails.css"
export function MovieDetails(){
  const {movieId} = useParams();
  const [movie, setMovie] = useState([]);
  useEffect(()=>{
    get("/movie/"+movieId).then((data)=>{
      setMovie(data)
    })
  }, [movieId])
  const imageUrl = getMovieImg(movie.poster_path,500)
  return(<div className="detailsContainer">

    {/* BACKDROP */}
    <div
      className="backdrop"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`
      }}
    ></div>

    <div className="detailsContent">
      
      {/* POSTER */}
      <img
        src={imageUrl}
        alt={movie.title}
        className="movieImg"
      />

      {/* INFO */}
      <div className="movieDetails">
        <h1>{movie.title}</h1>

        <p className="genres">
          {movie.genres?.map(g => (
            <span key={g.id} className="genreTag">
              {g.name}
            </span>
          ))}
        </p>

        <p className="description">{movie.overview}</p>
      </div>

    </div>
  </div>)
}