import React from "react";
import mymovies from "./mymovies"
import MovieCard from "./components/MovieCard"

function App() {
  return (
    <div>
      <h1>ViaKarro</h1>
      <MovieCard
        title={mymovies[1].title} />
    </div>
  );
}

export default App;
