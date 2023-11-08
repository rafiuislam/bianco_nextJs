"use client";
import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
  cartItems: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setInitialCart: (state, action) => {
      // Set the initial cart items from local storage
      state.cartItems = action.payload;
    },

    addToCart: (state, action) => {
      const itemExists = state.cartItems.find(
        (item) => item.href === action.payload.href
      );
      if (itemExists) {
        itemExists.quantity++;
        toast.success(`Increased ${itemExists.name} quantity`, {
          icon: "🛒",
          style: {
            borderRadius: "10px",
            background: "#333",
            color: "#fff",
          },
          position: "bottom-right",
        });
      } else {
        state.cartItems.push({ ...action.payload, quantity: 1 });
        toast.success(`${action.payload.name} added to cart`, {
          icon: "🛒",
          style: {
            borderRadius: "10px",
            background: "#333",
            color: "#fff",
          },
          position: "bottom-right",
        });
      }
      // Insert to Local Store
      localStorage.setItem("cartItems", JSON.stringify(state));
    },

    incrementQuantity: (state, action) => {
      const item = state.cartItems.find((item) => item.href === action.payload);
      item.quantity++;
      toast.success(`Increased ${item.name} quantity`, {
        icon: "🛒",
        style: {
          borderRadius: "10px",
          background: "#333",
          color: "#fff",
        },
        position: "bottom-right",
      });
      localStorage.setItem("cartItems", JSON.stringify(state));
    },
    decrementQuantity: (state, action) => {
      const item = state.cartItems.find((item) => item.href === action.payload);
      if (item.quantity === 1) {
        const index = state.cartItems.findIndex(
          (item) => item.href === action.payload
        );
        state.cartItems.splice(index, 1);
      } else {
        item.quantity--;
      }
      toast.success(`Decreased ${item.name} quantity`, {
        icon: "🛒",
        style: {
          borderRadius: "10px",
          background: "#333",
          color: "#fff",
        },
        position: "bottom-right",
      });
      localStorage.setItem("cartItems", JSON.stringify(state));
    },
    removeFromCart: (state, action) => {
      // const removedItemName = state.cartItems[index].name;
      const index = state.cartItems.findIndex(
        (item) => item.href === action.payload
      );
      if (index !== -1) {
        const removedItemName = state.cartItems[index].name;
        state.cartItems.splice(index, 1);

        toast.success(`Removed ${removedItemName} from cart`, {
          icon: "🛒",
          style: {
            borderRadius: "10px",
            background: "#333",
            color: "#fff",
          },
          position: "bottom-right",
        });

        localStorage.setItem("cartItems", JSON.stringify(state));
      }
    },
  },
});

export const cartReducer = cartSlice.reducer;

export const {
  addToCart,
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
  setInitialCart,
  updateItemCount,
} = cartSlice.actions;
