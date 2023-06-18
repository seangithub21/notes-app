const { createSlice } = require("@reduxjs/toolkit");

const notesSlice = createSlice({
  name: "notes",
  initialState: {
    notesList: [],
    sortQuery: "",
    sortedList: [],
  },
  reducers: {
    setNotesList: (state, action) => {
      state.notesList = action.payload;
    },
    addNote: (state, action) => {
      state.notesList.push(action.payload);
    },
    editNote: (state, action) => {
      state.notesList = action.payload;
    },
    deleteNote: (state, action) => {
      state.notesList = action.payload;
    },
    setSortQuery: (state, action) => {
      state.sortQuery = action.payload;
    },
    setSortedList: (state, action) => {
      state.sortedList = action.payload;
    },
  },
});

export const {
  setNotesList,
  addNote,
  editNote,
  deleteNote,
  setSortQuery,
  setSortedList,
} = notesSlice.actions;

export default notesSlice.reducer;
