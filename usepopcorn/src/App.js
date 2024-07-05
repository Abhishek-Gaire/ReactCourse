import { useState, useEffect } from "react";
import Navbar from "./components/navBar";
import MainComponent, { Box, MovieDetails,MovieList, WatchedMoviesList, WatchedSummary } from "./components/mainContent";
import { Logo, Search, NumResults } from "./components/navBar"


const KEY = "35d56434";

export default function App() {
  const [movies, setMovies] = useState([]);
  const [watched, setWatched] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [query, setQuery] = useState("");
  const [selectedId, setSelectedId] = useState(null)

  function handleSelectMovie(id){
    setSelectedId(id === selectedId ? null :id)
  }
  function handleCloseMovie(){
    setSelectedId(null)
  }

  function handleAddWatched(movie){
    setWatched(watched => [...watched,movie]);
  }
  function handleDeleteWatched(id){
    setWatched(watched => watched.filter(movie => movie.imdbID !== id))
  }
  
  useEffect(function () {
    const controller = new AbortController();
    const fetchData = async () => {
      try {
        setIsLoading(true);
        setError("");
        const result = await fetch(`https://www.omdbapi.com/?apikey=${KEY}&s=${query}`,{signal: controller.signal});

        if (!result.ok) throw new Error("Something went wrong with fetching movies");

        const data = await result.json();
        if (data.Response === "False") throw new Error("Movie Not Found")
        setMovies(data.Search);
        setError("");
      } catch (err) {
        if(err.name !== "AbortError"){
          setError(err.message);
        }
      } finally {
        setIsLoading(false)
      }
    }
    if (query.length < 3) {
      setMovies([]);
      setError("");
      return;
    }
    handleCloseMovie();
    fetchData();

    return function(){
      controller.abort();
    }
  }, [query])

  return (
    <>
      <Navbar>
        <Logo />
        <Search query={query} setQuery={setQuery} />
        <NumResults movies={movies} />
      </Navbar>
      <MainComponent>
        <Box >
          {isLoading && <Loader />}
          {!isLoading && !error && <MovieList onSelection={handleSelectMovie} movies={movies} />}
          {error && <ErrorMessage message={error} />}
        </Box>
        <Box>
          {selectedId ? 
            <MovieDetails onCloseMovie={handleCloseMovie} selectedId={selectedId} onAddWatched={handleAddWatched} watched={watched}/> : 
          <>
            <WatchedSummary watched={watched} />
            <WatchedMoviesList onRemove={handleDeleteWatched} watched={watched} />
          </>
          }
        </Box>
      </MainComponent>
    </>
  );
}
export function Loader() {
  return <p className="loader">Loading...</p>
}

function ErrorMessage({ message }) {
  return <p className="error">
    <span>❌</span>{message}</p>
}