import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { HackerNewsStory } from "../types";

const initialState: HackerNewsStory[] = [];

const hackerNewsSlice = createSlice({
  name: "hackerNews",
  initialState,
  reducers: {
    addStory: (state, action: PayloadAction<HackerNewsStory>) => {
      state.push(action.payload);
    },
    deleteStory: (state, action: PayloadAction<string>) => {
      return state.filter((story) => story.title !== action.payload);
    },
  },
});

export const { addStory, deleteStory } = hackerNewsSlice.actions;

export default hackerNewsSlice.reducer;
