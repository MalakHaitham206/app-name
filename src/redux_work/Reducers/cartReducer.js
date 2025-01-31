import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  showCart: false,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.items.push(action.payload);
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    toggleCartVisibility: (state, action) => {
      state.showCart = action.payload !== undefined ? action.payload : !state.showCart;
    },
  },
});

export const { addToCart, removeFromCart, toggleCartVisibility } = cartSlice.actions;
export default cartSlice.reducer;