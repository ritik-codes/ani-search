import { useEffect, useState } from 'react'
import './App.css'
import './Card.css'
import Card from './Card'

const API = "https://api.jikan.moe/v4";

function App() {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("")
  const [updateName, setUpdateName] = useState("");

  const handleSearch = async(title) => {
    const response = await fetch(`${API}/anime?q=${title}&sfw=true`);
    const data = await response.json();
    setMovies(data.data);
    //console.log(data.data);
    setUpdateName(title);
  }

  const topAiring = async() => {
    const response = await fetch(`${API}/top/anime?sfw=true&limit=12`)
    const data = await response.json();
    setMovies(data.data);
    setUpdateName("");
  }

  useEffect(()=>{topAiring()}, [search == ""])

  return (
      <div className='app'>
        <h2>ANIME SEARCH APP</h2>
        <div className='main'>
          <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} className='search'/>
          <button type='submit' onClick={() => handleSearch(search)}>🔎</button>
        </div>
        <h4 style={{marginBottom: "2em"}}>Made with ♥ by Ritik Suryavanshi</h4>
        {
          updateName == ""
          ?(
            <div className='top'>
              <h2>Top Animes</h2>
            </div>           
          ):(
            <div className='top'>
              <h2>Top Results for "{updateName}"</h2>
            </div>
          )
        }
        
        {
                movies.length > 0
                ? (
                    <div className="container">
                      {movies.map((movie, index) => (
                          <Card movie={movie} key={index}/>
                      ))
                      }
                    </div>
                ):movies?.length == 0
                ? (
                    <div className="container">
                      {movies.map((movie, index) => (
                          <Card movie={movie} key={index}/>
                      ))
                      }
                    </div>
                ):(
                    <div className="empty">
                        <h2>No movies found</h2>
                    </div>
                )
            }
      </div>
 
  )
}

export default App
