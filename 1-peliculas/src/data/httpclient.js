const BASE_URL = "https://api.themoviedb.org/3"
const TOKEN = import.meta.env.VITE_TMDB_TOKEN

export function get(path){
  return fetch(`${BASE_URL}${path}`,{
    headers: {
      Authorization: `Bearer ${TOKEN}`
    }
  })
  .then(response =>{
    if(!response.ok){
      throw new Error("Error de peticion")
    }
    return response.json()
  })
}