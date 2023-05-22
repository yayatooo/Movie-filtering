import { useEffect, useState } from "react";
import "./App.css";
import ListMovie from "./ListMovie";
import Filter from "./Filter";

function App() {
  const [popular, setPopular] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [genre, setGenre] = useState(0);

  useEffect(() => {
    getDataMovies();
  }, []);

  const getDataMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=ef65aa906a87dcb09cedda528d05b253&language=en-US&page=1"
    );
    const movies = await data.json();
    setPopular(movies.results);
    setFiltered(movies.results);

    console.log(popular);
  };

  return (
    <>
      <h1>My Film</h1>

      <Filter
        setFiltered={setFiltered}
        popular={popular}
        genre={genre}
        setGenre={setGenre}
      />

      <div className="container-movie">
        {filtered.map((movie) => {
          return <ListMovie movie={movie} key={movie.id} />;
        })}
      </div>
    </>
  );
}

export default App;
