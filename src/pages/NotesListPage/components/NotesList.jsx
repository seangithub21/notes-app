import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Box } from "@mui/material";
import { v4 as uuidv4 } from "uuid";

import { setNotesList } from "features/notes/notesSlice";

import Note from "./Note";

import { getNotesListStyles } from "../styles";

const notes = [
  {
    id: 1,
    todo: "Do something nice for someone I care about",
    completed: true,
    userId: 26,
    dateCreated: new Date(
      "Sun May 11 2023 15:06:16 GMT+0200 (Central European Summer Time)"
    ),
    dateModified: new Date(
      "Sun May 11 2023 15:06:16 GMT+0200 (Central European Summer Time)"
    ),
  },
  {
    id: 2,
    todo: "Memorize the fifty states and their capitals",
    completed: false,
    userId: 48,
    dateCreated: new Date(
      "Sun Apr 14 2023 15:06:16 GMT+0200 (Central European Summer Time)"
    ),
    dateModified: new Date(
      "Sun Apr 14 2023 15:06:16 GMT+0200 (Central European Summer Time)"
    ),
  },
  {
    id: 3,
    todo: "Watch a classic movie",
    completed: false,
    userId: 4,
    dateCreated: new Date(
      "Sun May 14 2022 15:06:16 GMT+0200 (Central European Summer Time)"
    ),
    dateModified: new Date(
      "Sun May 14 2022 15:06:16 GMT+0200 (Central European Summer Time)"
    ),
  },
  {
    id: 4,
    todo: "Contribute code or a monetary donation to an open-source software project",
    completed: false,
    userId: 48,
    dateCreated: new Date(
      "Sun Jan 14 2020 15:06:16 GMT+0200 (Central European Summer Time)"
    ),
    dateModified: new Date(
      "Sun Jan 14 2020 15:06:16 GMT+0200 (Central European Summer Time)"
    ),
  },
  {
    id: 5,
    todo: "Solve a Rubik's cube",
    completed: false,
    userId: 31,
    dateCreated: new Date(
      "Sun May 13 2023 11:06:16 GMT+0200 (Central European Summer Time)"
    ),
    dateModified: new Date(
      "Sun May 13 2023 11:06:16 GMT+0200 (Central European Summer Time)"
    ),
  },
  {
    id: 6,
    todo: "Bake pastries for me and neighbor",
    completed: false,
    userId: 39,
    dateCreated: new Date(
      "Sun Mar 10 2023 15:06:16 GMT+0200 (Central European Summer Time)"
    ),
    dateModified: new Date(
      "Sun Mar 10 2023 15:06:16 GMT+0200 (Central European Summer Time)"
    ),
  },
  {
    id: 7,
    todo: "Go see a Broadway production",
    completed: false,
    userId: 32,
    dateCreated: new Date(
      "Sun Feb 14 2022 15:06:16 GMT+0200 (Central European Summer Time)"
    ),
    dateModified: new Date(
      "Sun Feb 14 2022 15:06:16 GMT+0200 (Central European Summer Time)"
    ),
  },
  {
    id: 8,
    todo: "Write a thank you letter to an influential person in my life",
    completed: true,
    userId: 13,
    dateCreated: new Date(
      "Sun May 14 2019 15:06:16 GMT+0200 (Central European Summer Time)"
    ),
    dateModified: new Date(
      "Sun May 14 2019 15:06:16 GMT+0200 (Central European Summer Time)"
    ),
  },
  {
    id: 9,
    todo: "Invite some friends over for a game night",
    completed: false,
    userId: 47,
    dateCreated: new Date(
      "Sun May 14 2023 13:06:16 GMT+0200 (Central European Summer Time)"
    ),
    dateModified: new Date(
      "Sun May 14 2023 13:06:16 GMT+0200 (Central European Summer Time)"
    ),
  },
];

const NotesList = () => {
  const classes = getNotesListStyles();
  const {
    notesList: { notesList, sortedList },
    notesSearchList: { notesSearchList, searchQuery },
  } = useSelector((state) => state);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (!notesList.length) {
      const initialFakeData = notes.map((note, index) => {
        const id = uuidv4();
        return {
          id,
          title: index,
          body: note.todo,
          dateCreated: note.dateCreated.toString(),
          dateModified: note.dateModified.toString(),
        };
      });
      dispatch(setNotesList(initialFakeData));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleOpenNoteDetails = (noteId) => {
    navigate(`/${noteId}`);
  };

  return (
    <Box sx={classes.container}>
      {!!notesSearchList.length || searchQuery
        ? notesSearchList.map((note) => {
            return (
              <Note
                note={note}
                key={note.id}
                openNoteDetails={() => handleOpenNoteDetails(note.id)}
              />
            );
          })
        : !!sortedList.length
        ? sortedList.map((note) => {
            return (
              <Note
                note={note}
                key={note.id}
                openNoteDetails={() => handleOpenNoteDetails(note.id)}
              />
            );
          })
        : !!notesList?.length &&
          notesList.map((note) => {
            return (
              <Note
                note={note}
                key={note.id}
                openNoteDetails={() => handleOpenNoteDetails(note.id)}
              />
            );
          })}
    </Box>
  );
};

export default NotesList;
