
export const addToCart = (movie) => {
    return async (dispatch) => {
      try {
        dispatch({
          type: 'cart/addToCart',
          payload: movie,
        });
      } catch (error) {
        console.error("Error adding to cart:", error);
      }
    };
  };
  
  export const removeFromCart = (movieId) => {
    return async (dispatch) => {
      try {
        dispatch({
          type: 'cart/removeFromCart',
          payload: movieId,
        });
      } catch (error) {
        console.error("Error removing from cart:", error);
      }
    };
  };