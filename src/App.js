
import './App.css';
import SearchIcon from './search.svg';
import { useEffect, useState } from 'react';
import MovieCard from './MovieCard';
const API_URL = 'http://www.omdbapi.com?apikey=55e2b41d';
const movie1 = {
  "Title": "The Conjuring 2",
  "Year": "2016",
  "imdbID": "tt3065204",
  "Type": "movie",
  "Poster": "https://m.media-amazon.com/images/M/MV5BZjU5OWVlN2EtODNlYy00MjhhLWI0MDUtMTA3MmQ5MGMwYTZmXkEyXkFqcGdeQXVyNjE5MTM4MzY@._V1_SX300.jpg"
}
const App = () => {
  const [movies,setMovies] = useState()
  const[searchTerm,setSearchTerm] = useState('')
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data =  await response.json();
    setMovies(data.Search);
    }
  useEffect(() => {
   searchMovies('conjuring');
  }, []);
  return (
   
       <div className='App'>
             <h1>MovieLand</h1>
             <div className='search'>
              <input placeholder="Search for Movies"
               value={searchTerm}
               onChange={(e)=>setSearchTerm(e.target.value)}/>
               <img src={SearchIcon} 
               alt="search"
               onClick={()=> searchMovies(searchTerm)} />
             </div>
             {
              movies?.length >0
              ?(
                <div className='container'>
              {movies.map((movie)=>(
                 <MovieCard movie={movie}/>
              ))}
             </div>
              ):(
               <div className='empty'>
                  <h2>No movies found</h2>
               </div>
              )
             }
             
       </div>
          
  );
}

export default App;
