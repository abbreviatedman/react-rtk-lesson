import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const recipesSlice = createSlice({
  name: "recipes",
  initialState,
  reducers: {
    addRecipe(state, action) {
      state.push(action.payload);
    },

    updateRecipe(state, action) {
      const index = state.findIndex(
        (recipe) => recipe.id === action.payload.id
      );
      if (index !== -1) {
        state[index] = action.payload;
      }
    },

    deleteRecipe(state, action) {
      return state.filter((recipe) => recipe.id !== action.payload.id);
    },
  },
});

export const { addRecipe, updateRecipe, deleteRecipe } = recipesSlice.actions;
export default recipesSlice.reducer;
