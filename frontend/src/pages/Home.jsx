import MovieCard from "../components/Movie-Card"
import { useState } from "react"

function Home() {
  const [searchQuery, setSearchQuery] = useState("")
  const movies = [
    { id: 1, title: "John Wick", release_date: "2020" },
    { id: 1, title: "Terminator", release_date: "1994" },
    { id: 1, title: "Legally Blonde", release_date: "2023" },
    { id: 1, title: "Aquaman", release_date: "2021" },
  ]

  function handleSearch() {}

  return (
    <div className="home">
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          placeholder="Search for movie.."
          className="search-input"
        />
        <button type="submit" className="search-button"></button>
      </form>
      <div className="movie-grid">
        {movies.map((movie) => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </div>
    </div>
  )
}

export default Home
