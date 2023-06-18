import { useState } from "react";
import { Box, Typography } from "@mui/material";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";

import Button from "components/common/Button";
import NotesList from "./components/NotesList";
import AddNoteFrom from "./components/AddNoteFrom";
import Search from "./components/Search";
import Sort from "./components/Sort";

import getStyles from "./styles";

const NotesListPage = () => {
  const classes = getStyles();
  const [modalOpen, setModalOpen] = useState("");

  const handleCloseModal = () => setModalOpen("");

  const handleAddNote = () => setModalOpen("addNote");

  return (
    <Box sx={classes.container}>
      <Typography variant="h1" sx={classes.title}>
        My notes
      </Typography>
      <Box sx={classes.header}>
        <Search />
        <Sort />
        <Box>
          <Button icon onClick={handleAddNote}>
            <AddCircleOutlineOutlinedIcon sx={{ fontSize: "4rem" }} />
          </Button>
        </Box>
      </Box>
      <NotesList />
      <AddNoteFrom open={modalOpen === "addNote"} onClose={handleCloseModal} />
    </Box>
  );
};

export default NotesListPage;
