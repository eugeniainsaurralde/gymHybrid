import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  total: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addCartItem: (state, actions) => {
      const index = state.items.findIndex(
        (item) => item.id === actions.payload.id
      );
      if (index === -1) {
        state.items = [...state.items, { ...actions.payload, quantity: 1 }];
      } else {
        state.items[index].quantity = state.items[index].quantity + 1;
      }
      state.total = state.items.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
      );
    },
    deleteCartItem: (state, actions) => {
      state.items = state.items.filter((items) => items.id !== actions.payload);
      state.total = state.items.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
      );
    },
  },
});

export const { addCartItem, deleteCartItem } = cartSlice.actions;
export default cartSlice.reducer;
