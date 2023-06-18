const { createSlice } = require("@reduxjs/toolkit");

const notesDetailsSlice = createSlice({
  name: "noteDetails",
  initialState: {
    noteDetails: {},
  },
  reducers: {
    setNoteDetails: (state, action) => {
      state.noteDetails = action.payload;
    },
  },
});

export const { setNoteDetails } = notesDetailsSlice.actions;

export default notesDetailsSlice.reducer;
