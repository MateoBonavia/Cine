import axios from "axios";

const APIKEY = "c8c07f4c8c58ed0c846a4a7ce2798a1c";

export function getRandomMovies() {
  try {
    return async function (dispatch) {
      await axios
        .get(`https://api.themoviedb.org/3/discover/movie?api_key=${APIKEY}`)
        .then((res) => {
          dispatch({
            type: "GET_RANDOM_MOVIES",
            payload: res.data,
          });
        });
    };
  } catch (e) {
    console.log(e);
  }
}

export function getMovie(movie) {
  try {
    let id = [];
    id.push(movie.map((e) => e.id));
    let promises = [];
    promises.push(
      id[0].map((e) =>
        axios.get(`https://api.themoviedb.org/3/movie/${e}?api_key=${APIKEY}`)
      )
    );
    return async function (dispatch) {
      await Promise.all(promises[0]).then((res) => {
        dispatch({
          type: "GET_MOVIE",
          payload: res,
        });
      });
    };
  } catch (e) {
    console.log(e);
  }
}

export function orderRating(payload) {
  return {
    type: "ORDER_RATING",
    payload,
  };
}

export function getMovieDetail(id) {
  try {
    return async function (dispatch) {
      await axios
        .get(`https://api.themoviedb.org/3/movie/${id}?api_key=${APIKEY}`)
        .then((res) => {
          dispatch({
            type: "GET_MOVIE_DETAIL",
            payload: res.data,
          });
        });
    };
  } catch (e) {
    console.log(e);
  }
}

export function clearDetails() {
  return {
    type: "CLEAR_DETAILS",
    payload: [],
  };
}
