import { useDispatch, useSelector } from "react-redux";
import { format } from "date-fns";
import { Box, Tooltip, Typography, useTheme } from "@mui/material";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";

import { deleteNote } from "features/notes/notesSlice";

import Button from "components/common/Button";

import { getNoteStyles } from "../styles";

const Note = ({ note, openNoteDetails }) => {
  const theme = useTheme();
  const classes = getNoteStyles({ theme });
  const { notesList } = useSelector((state) => state);
  const dispatch = useDispatch();

  const handleDeleteNote = (noteId) => {
    const updatedList = !!notesList.notesList?.length
      ? notesList.notesList.filter(({ id }) => id !== noteId)
      : [];
    dispatch(deleteNote(updatedList));
  };

  return (
    <Box sx={classes.container}>
      <Box sx={classes.infoPreview} onClick={openNoteDetails}>
        <Typography variant="h6">{note.title}</Typography>
        <Typography sx={classes.body}>{note.body}</Typography>
        <Typography sx={classes.date}>
          Created: {format(new Date(note.dateCreated), "P pp")}
        </Typography>
        <Typography sx={classes.date}>
          Modified: {format(new Date(note.dateModified), "P pp")}
        </Typography>
      </Box>
      <Tooltip title="Delete">
        <Box>
          <Button icon onClick={() => handleDeleteNote(note.id)}>
            <CloseOutlinedIcon />
          </Button>
        </Box>
      </Tooltip>
    </Box>
  );
};

export default Note;
