const BASE_URL = "https://api.themoviedb.org/3"
const TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMjQ0NzlkMzc4ZjI2ZGU2YzQ4OTc4MTM1YTNhYjY0YyIsIm5iZiI6MTc3NTYyNDIyNC4wMTgsInN1YiI6IjY5ZDVlMDIwODliZTc2N2I3Y2Y4YTlkOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2A2ICvL0n6uGUIMthbw6-gdkdirO_2AVsl77RpWYUqc"
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