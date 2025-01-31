export const ADD_TO_FAVORITES = 'ADD_TO_FAVORITES';
export const REMOVE_FROM_FAVORITES = 'REMOVE_FROM_FAVORITES';
export const SHOW_ALL_MOVIES = 'SHOW_ALL_MOVIES';
export const SHOW_FAVORITES = 'SHOW_FAVORITES';

export const addToFavorites = (movie) => ({
  type: ADD_TO_FAVORITES,
  payload: movie,
});

export const removeFromFavorites = (movieId) => ({
  type: REMOVE_FROM_FAVORITES,
  payload: movieId,
});

export const showAllMovies = () => ({
  type: SHOW_ALL_MOVIES,
});

export const showFavorites = () => ({
  type: SHOW_FAVORITES,
});