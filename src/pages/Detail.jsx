import React, { useEffect } from "react";
import { FaStar } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { clearDetails, getMovieDetail } from "../store/actions";
import style from "../styles/detail.module.css";

const Detail = () => {
  const dispatch = useDispatch();
  let params = useParams();
  const urlImg = "https://image.tmdb.org/t/p/w500";

  useEffect(() => {
    dispatch(getMovieDetail(params.id));
  }, []);

  let movie = useSelector((state) => state.movieDetail);

  useEffect(() => {
    return () => {
      dispatch(clearDetails());
    };
  }, []);

  if (!movie) {
    return "Loading...";
  } else {
    return (
      <div className={style.generalContainer}>
        <div className={style.container}>
          <div className={style.principalInfo}>
            <div className={style.imgContainer}>
              <img
                src={`${urlImg}${movie.backdrop_path}`}
                className={style.bannerImg}
              />
            </div>
            <div className={style.info}>
              <h1 className={style.title}>{movie.title}</h1>
              <div className={style.overview}>
                <h3>Overview</h3>
                <p>{movie.overview}</p>
              </div>
            </div>
          </div>
          <div className={style.generalInfo}>
            <div>
              <h3>Genres</h3>
              {movie.genres?.map((e, i) => {
                return <p key={i}>{e.name}</p>;
              })}
            </div>

            <hr color="#292929" />

            <div>
              <h3>Language</h3>
              <p>{movie.original_language}</p>
            </div>

            <hr color="#292929" />

            <div className={style.popularity}>
              <h3>Popularity</h3>
              <p>{movie.popularity}</p>
            </div>

            <hr color="#292929" />

            <div>
              <h3>Producing companies</h3>
              {movie.production_companies?.map((e, i) => {
                return <p key={movie.id * i}>{e.name}</p>;
              })}
            </div>

            <hr color="#292929" />

            <div>
              <h3>Release date</h3>
              <p>{movie.release_date}</p>
            </div>

            <hr color="#292929" />

            <div>
              <h3>Calification</h3>
              <p className={style.calification}>
                <div className={style.star}>
                  <FaStar size={20} />
                </div>
                <div className={style.numberCalification}>
                  {movie.vote_average}
                </div>
              </p>
            </div>
            <hr color="#292929" />
          </div>
          <div className={style.homepageContainer}>
            <a
              href={movie.homepage}
              target="_blank"
              rel="noopener noreferrer"
              className={style.homepage}
            >
              Official website
            </a>
          </div>
        </div>
      </div>
    );
  }
};

export default Detail;
