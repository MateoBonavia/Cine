import {
  GET_RANDOM_MOVIES,
  GET_MOVIE,
  ORDER_RATING,
  GET_MOVIE_DETAIL,
  CLEAR_DETAILS,
} from "./constantes";

const initialState = {
  randomMovies: [],
  moviesDefault: [],
  movieDetail: [],
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_RANDOM_MOVIES:
      return {
        ...state,
        randomMovies: action.payload.results,
        moviesDefault: action.payload.results,
      };

    case GET_MOVIE:
      return {
        ...state,
        randomMovies: action.payload.map((e) => e.data),
      };

    case ORDER_RATING:
      console.log(action);
      if (action.payload === -1) {
        console.log("Entre a -1");
        return {
          ...state,
          randomMovies: state.moviesDefault,
        };
      }
      const orderedMovies = state.randomMovies.filter(
        (e) =>
          e.vote_average <= action.payload + 2 &&
          e.vote_average >= action.payload
      );
      console.log(orderedMovies);
      return {
        ...state,
        randomMovies: orderedMovies,
      };

    case GET_MOVIE_DETAIL:
      return {
        ...state,
        movieDetail: action.payload,
      };

    case CLEAR_DETAILS:
      return {
        ...state,
        movieDetail: action.payload,
      };

    default:
      return {
        ...state,
        movieDetail: action.payload,
      };
  }
}
