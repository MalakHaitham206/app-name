import { createAsyncThunk } from '@reduxjs/toolkit';

export const addToCart = createAsyncThunk(
  'cart/addToCart',
  async (movie, { rejectWithValue }) => {
    try {
      return movie;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const removeFromCart = createAsyncThunk(
  'cart/removeFromCart',
  async (movieId, { rejectWithValue }) => {
    try {
      return movieId;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const toggleCartVisibility = () => ({
    type: 'TOGGLE_CART_VISIBILITY',
  });