import MovieCard from "../components/Movie-Card"
import { useState } from "react"
import "../css/Home.css"

function Home() {
  const [searchQuery, setSearchQuery] = useState("")
  const movies = [
    { id: 1, title: "John Wick", release_date: "2020" },
    { id: 2, title: "Terminator", release_date: "1994" },
    { id: 3, title: "Legally Blonde", release_date: "2023" },
    { id: 4, title: "Aquaman", release_date: "2021" },
  ]

  function handleSearch(e) {
    e.preventDefault()
    alert(searchQuery)
  }

  return (
    <div className="home">
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          placeholder="Search for movie.."
          className="search-input"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit" className="search-button">
          Search
        </button>
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
