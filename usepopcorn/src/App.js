import { useState,useEffect } from "react";
import Navbar from "./components/navBar";
import MainComponent,{Box,MovieList,WatchedMoviesList,WatchedSummary} from "./components/mainContent";
import{Logo,Search,NumResults} from "./components/navBar"


const KEY = "35d56434"
export default function App() {
  const [movies, setMovies] = useState([]);
  const [watched,setWatched] = useState([]);
  const [isLoading,setIsLoading] = useState(false)
  const query = "matrix";
  useEffect(function(){
    const fetchData = async () => {
      setIsLoading(true);
      const result = await fetch(`https://www.omdbapi.com/?apikey=${KEY}&s=${query}`);
      const data = await result.json();
      setMovies(data.Search);
      setIsLoading(false);
    }
    fetchData();
  },[])
  return (
    <>
      <Navbar>
        <Logo/>
        <Search/>
        <NumResults movies={movies}/>
      </Navbar>
      <MainComponent>
        <Box >
          {isLoading ? <Loader/> : <MovieList movies={movies}/>}
        </Box>
        <Box>
          <WatchedSummary watched={watched}/>
          <WatchedMoviesList watched={watched}/>
        </Box>
      </MainComponent>
    </>
  );
}
function Loader(){
  return <p className="loader">Loading...</p>
}