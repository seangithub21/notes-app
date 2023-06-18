import { configureStore } from "@reduxjs/toolkit";

import notesReducer from "features/notes/notesSlice";
import noteDetailsReducer from "features/noteDetails/noteDetailsSlice";
import notesSearchReducer from "features/notesSearch/notesSearchSlice";

const store = configureStore({
  reducer: {
    notesList: notesReducer,
    noteDetails: noteDetailsReducer,
    notesSearchList: notesSearchReducer,
  },
});

export default store;
