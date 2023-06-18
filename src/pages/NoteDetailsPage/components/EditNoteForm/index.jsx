import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Field, Formik } from "formik";
import { Box, Typography } from "@mui/material";

import { editNote } from "features/notes/notesSlice";
import { setNoteDetails } from "features/noteDetails/noteDetailsSlice";

import Modal from "components/common/Modal";
import Input from "components/common/Input";
import Button from "components/common/Button";

import { getEditNoteFormStyles } from "pages/NoteDetailsPage/styles";

const initialValues = { title: "", note: "" };

const EditNoteForm = (props) => {
  const classes = getEditNoteFormStyles();
  const { noteDetails, notesList } = useSelector((state) => state);
  const dispatch = useDispatch();
  const { noteId } = useParams();

  useEffect(() => {
    const updatedNoteDetails = notesList.notesList.find(
      (note) => note.id === noteId
    );
    dispatch(setNoteDetails(updatedNoteDetails));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [notesList.notesList]);

  const handleSubmit = (data) => {
    const updatedList = notesList.notesList.map((note) => {
      if (note.id !== noteId) return note;
      return {
        ...noteDetails.noteDetails,
        title: data.title,
        body: data.note,
        dateModified: new Date().toString(),
      };
    });
    dispatch(editNote(updatedList));
    props.onClose();
  };

  return (
    <Modal {...props} withCloseIcon>
      <Formik
        initialValues={initialValues}
        enableReinitialize
        onSubmit={handleSubmit}
      >
        {({ handleSubmit }) => {
          return (
            <form onSubmit={handleSubmit}>
              <Box sx={classes.container}>
                <Typography variant="h6">Edit</Typography>
                <Box sx={classes.fieldsContainer}>
                  <Field name="title">
                    {(props) => <Input {...props} label="Title" fullWidth />}
                  </Field>
                  <Field name="note">
                    {(props) => (
                      <Input
                        {...props}
                        multiline
                        rows={4}
                        label="Note"
                        fullWidth
                      />
                    )}
                  </Field>
                </Box>
                <Button type="submit">Save</Button>
              </Box>
            </form>
          );
        }}
      </Formik>
    </Modal>
  );
};

export default EditNoteForm;
