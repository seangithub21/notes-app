const { createSlice } = require("@reduxjs/toolkit");

const notesSearchSlice = createSlice({
  name: "notesSearch",
  initialState: {
    notesSearchList: [],
    searchQuery: "",
  },
  reducers: {
    setNotesSearchList: (state, action) => {
      state.notesSearchList = action.payload;
    },
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
  },
});

export const { setNotesSearchList, setSearchQuery } = notesSearchSlice.actions;

export default notesSearchSlice.reducer;
