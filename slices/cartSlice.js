import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addtoCart: (state, action) => {
      state.items = [ ...state.items, action.payload ];
    },
    removefromCart: (state, action) => {
      let newCart = [ ...state.items ];
      let itemIndex = state.items.findIndex((item) => item.id === action.payload.id);
      if (itemIndex >= 0) {
        newCart.splice(itemIndex, 1);
      } else {
        console.warn(`Cant remove product (id: ${action.payload.id}) as its not in cart!`);
      }
      state.items = newCart;
    },
    emptyCart: (state) => {
      state.items = [];
    },
  },
});

// Action creators are generated for each case reducer function
export const { addtoCart, removefromCart, emptyCart } = CartSlice.actions;

export const selectCartItems = (state) => state.cart.items;

export const selectCartTotal = (state) => state.cart.items.reduce((total, item) => (total = total + item.price), 0);

export const selectItemsById = (state, id,restroname) => state.cart.items.filter((item) => item.id == id && item.restroname == restroname);

export default CartSlice.reducer;
