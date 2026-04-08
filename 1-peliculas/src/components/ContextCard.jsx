import { useEffect, useState } from "react"
import { get } from "../data/httpclient"
import { MovieCard } from "./MovieCard";
import "./ContextCard.css"
export function ContextCard(){
  const [movies,SetMovies] = useState([])
  useEffect(()=>{
    get("/discover/movie").then((data)=>{
      SetMovies(data.results);
        
    })
  }, []);
  return(<ul className="container">
    {movies.map((movie)=>(
      <MovieCard key={movie.id} movie={movie}/>
    ))}
  </ul>)
}