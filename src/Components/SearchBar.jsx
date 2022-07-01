import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getMovie, getRandomMovies } from "../store/actions";
import style from "../styles/searchBar.module.css";

const SearchBar = ({ randomMovies }) => {
  let [name, setName] = useState("");
  let dispatch = useDispatch();

  const handleInputChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleReset(e);
    if (!name) return;
    let movie = randomMovies.filter((e) => e.title.includes(name));
    dispatch(getMovie(movie));
    setName("");
  };

  const handleReset = (e) => {
    e.preventDefault();
    dispatch(getRandomMovies());
  };

  return (
    <div className={style.container}>
      <input
        type="text"
        placeholder="🔎 Search..."
        onChange={(e) => handleInputChange(e)}
        value={name}
        className={style.input}
      />
      <button onClick={(e) => handleSubmit(e)} className={style.search}>
        Search
      </button>
      <button onClick={(e) => handleReset(e)} className={style.reset}>
        Reset
      </button>
    </div>
  );
};

export default SearchBar;
