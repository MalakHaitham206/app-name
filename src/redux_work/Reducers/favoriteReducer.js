import { ADD_TO_FAVORITES, REMOVE_FROM_FAVORITES, SHOW_ALL_MOVIES, SHOW_FAVORITES } from '../Actions/favorite_action';

const initialState = {
  movies: [],
  favorites: [],
  showFavorites: false,
};

const favoriteReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_FAVORITES:
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      };
    case REMOVE_FROM_FAVORITES:
      return {
        ...state,
        favorites: state.favorites.filter(movie => movie.id !== action.payload),
      };
    case SHOW_ALL_MOVIES:
      return {
        ...state,
        showFavorites: false,
      };
    case SHOW_FAVORITES:
      return {
        ...state,
        showFavorites: true,
      };
      
    default:
      return state;
  }
};

export default favoriteReducer;