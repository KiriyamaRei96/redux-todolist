import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchInput: "",
  searchStatus: "All",
  searchPriority: [],
};
const filterReducer = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setSearch: (state, actions) => {
      state.searchInput = actions.payload;
    },
    searchStatus: (state, actions) => {
      state.searchStatus = actions.payload;
    },
    searchPriority: (state, actions) => {
      state.searchPriority = actions.payload;
    },
  },
});
export const { setSearch, searchStatus, searchPriority } =
  filterReducer.actions;

export default filterReducer;
