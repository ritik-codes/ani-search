import React from 'react'

function Card({movie}) {
  return (
    <div className="movie">
        <div>
            {movie.aired.string} <br/>
            Rating {movie.score}
        </div>
        <div>
            <img src= 
            {movie.images.jpg.image_url !== '' ? movie.images.jpg.image_url : 'https://via.placeholder.com/400'} alt={movie.title} ></img>
        </div>

        <div>
            <span>{movie.Type}</span>
            <h3><span>{movie.title}</span></h3>
        </div>
    </div>
  )
}

export default Card