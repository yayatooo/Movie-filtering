import React, { useEffect } from "react";

const Filter = ({ setFiltered, popular, genre, setGenre }) => {
  useEffect(() => {
    if (setFiltered === 0) {
      setFiltered(popular);
      return;
    }
    const filtered = popular.filter((movies) =>
      movies.genre_ids.includes(genre)
    );
    setFiltered(filtered);
  }, [genre]);

  return (
    <div className="btn-categories">
      <button
        className={genre === 0 ? "active" : ""}
        onClick={() => setGenre(0)}
      >
        All
      </button>
      <button
        className={genre === 28 ? "active" : ""}
        onClick={() => setGenre(28)}
      >
        Action
      </button>
      <button
        className={genre === 12 ? "active" : ""}
        onClick={() => setGenre(12)}
      >
        Adventure
      </button>
      <button
        className={genre === 35 ? "active" : ""}
        onClick={() => setGenre(35)}
      >
        Animation
      </button>
    </div>
  );
};

export default Filter;
