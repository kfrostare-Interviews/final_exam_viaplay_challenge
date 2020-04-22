import React from 'react'

function Movie() {
  return (
    <div className="image">
        <img className="movieImage" src={props.img} alt="avatar_img" />
    </div>
  )
}

export default Movie
