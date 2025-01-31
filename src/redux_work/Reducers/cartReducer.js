import { createSlice } from '@reduxjs/toolkit';
import { addToCart, removeFromCart } from '../Actions/cartActions';

const initialState = {
    items: [],
    showCart: false,
  };
  
  const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
      toggleCartVisibility: (state) => {
        state.showCart = !state.showCart;
      },
    },
    extraReducers: (builder) => {
      builder
        .addCase(addToCart.fulfilled, (state, action) => {
          state.items.push(action.payload);
        })
        .addCase(removeFromCart.fulfilled, (state, action) => {
          state.items = state.items.filter(item => item.id !== action.payload);
        });
    },
  });
  
  export const { toggleCartVisibility } = cartSlice.actions;
  export default cartSlice.reducer;