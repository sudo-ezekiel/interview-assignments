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
    deleteStory: (state, action: PayloadAction<number>) => {
      return state.filter((story) => story.story_id !== action.payload);
    },
  },
});

export const { addStory, deleteStory } = hackerNewsSlice.actions;

export default hackerNewsSlice.reducer;
