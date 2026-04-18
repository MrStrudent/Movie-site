import { useEffect, useState } from "react"
import { get } from "../data/httpclient"
import { MovieCard } from "./MovieCard";
import "./ContextCard.css"
export function ContextCard(){
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(()=>{
    const timeoutId = setTimeout(() => {
      const searchPath = search.trim() ? `/search/movie?query=${encodeURIComponent(search)}` : "/discover/movie";
      get(searchPath).then((data)=>{
        if(data && data.results) {
          setMovies(data.results);
        }
      })
    }, 500); // 500ms debounce
    return () => clearTimeout(timeoutId);
  }, [search]);

  return(
    <div className="layout-container">
      <div className="search-container">
        <input 
          type="text" 
          placeholder="🔍 Buscar películas..." 
          className="search-input"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <ul className="container">
        {movies.map((movie)=>(
          <MovieCard key={movie.id} movie={movie}/>
        ))}
      </ul>
    </div>
  )
}