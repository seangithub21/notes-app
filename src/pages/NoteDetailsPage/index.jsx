import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Box, Typography } from "@mui/material";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";
import KeyboardArrowLeftOutlinedIcon from "@mui/icons-material/KeyboardArrowLeftOutlined";

import { setNoteDetails } from "features/noteDetails/noteDetailsSlice";

import Button from "components/common/Button";
import EditNoteForm from "./components/EditNoteForm";

import getStyles from "./styles";

const NoteDetailsPage = () => {
  const classes = getStyles();
  const [modalOpen, setModalOpen] = useState("");
  const { notesList, noteDetails } = useSelector((state) => state);
  const dispatch = useDispatch();
  const { noteId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const current = !!notesList.notesList.length
      ? notesList.notesList.find((note) => note.id === noteId)
      : {};
    dispatch(setNoteDetails(current));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleCloseModal = () => setModalOpen("");

  const handleEdit = () => setModalOpen("editNote");

  const handleReturn = () => navigate(-1);

  return (
    <Box sx={classes.container}>
      <Box sx={classes.header}>
        <Button icon onClick={handleReturn}>
          <KeyboardArrowLeftOutlinedIcon sx={classes.returnButton} />
        </Button>
        <Typography variant="h1" sx={classes.title}>
          Note details
        </Typography>
        <Button icon onClick={handleEdit}>
          <ModeEditOutlineOutlinedIcon sx={classes.edit} />
        </Button>
      </Box>
      <Box sx={classes.infoBlock}>
        <Box>
          <Typography variant="h6">Title</Typography>
          <Typography>{noteDetails.noteDetails?.title}</Typography>
        </Box>
        <Box>
          <Typography variant="h6">Note</Typography>
          <Typography>{noteDetails.noteDetails?.body}</Typography>
        </Box>
      </Box>
      <EditNoteForm
        open={modalOpen === "editNote"}
        onClose={handleCloseModal}
      />
    </Box>
  );
};

export default NoteDetailsPage;
