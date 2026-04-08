import placeholder from "../img/placeholder.png"
export function getMovieImg(path, width){
 // const imageUrl= 
 // "https://image.tmdb.org/t/p/w300"+movie.poster_path;
return path? `https://image.tmdb.org/t/p/w${width}${path}`:placeholder
}