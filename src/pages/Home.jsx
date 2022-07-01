import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CalificationFilter from "../Components/CalificationFilter";
import SearchBar from "../Components/SearchBar";
import { getRandomMovies } from "../store/actions";
import style from "../styles/home.module.css";
import { FaStar, FaCalendarDay } from "react-icons/fa";
import GoTop from "../Components/GoTop";

const Home = () => {
  let dispatch = useDispatch();

  const urlImg = "https://image.tmdb.org/t/p/w500";

  useEffect(() => {
    dispatch(getRandomMovies());
  }, [dispatch]);

  const randomMovies = useSelector((state) => state.randomMovies);

  return (
    <div className={style.container}>
      <div>
        <div className={style.navBar}>
          <div className={style.navBarContainer}>
            <h2 className={style.navBarTitle}>Find your favorite movies</h2>
            <div>
              <SearchBar randomMovies={randomMovies} />
            </div>
            <div>
              <CalificationFilter />
            </div>
          </div>
        </div>
        <div className={style.movieContainer}>
          {randomMovies.map((movie, i) => {
            let img = `${urlImg}${movie.backdrop_path}`;
            return (
              <div key={movie.id} className={style.movies}>
                <Link to={`/${movie.id}`} className={style.link}>
                  <img
                    src={img}
                    alt=""
                    key={i}
                    className={style.movieImg}
                  ></img>
                  <h1
                    key={Math.random() * Math.random()}
                    className={style.movieTitle}
                  >
                    {movie.original_title}
                  </h1>
                  <br />
                  <span className={style.movieData}>
                    <div className={style.calificationMovie}>
                      <FaStar size={15} className={style.star} />
                      {movie.vote_average}
                    </div>
                    <div className={style.movieRelease}>
                      <FaCalendarDay size={15} className={style.calendar} />
                      {movie.release_date}
                    </div>
                  </span>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
      <GoTop />
    </div>
  );
};

export default Home;
