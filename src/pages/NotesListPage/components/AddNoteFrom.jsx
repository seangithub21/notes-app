import { useDispatch } from "react-redux";
import { Field, Formik } from "formik";
import { v4 as uuidv4 } from "uuid";
import { Box, Typography } from "@mui/material";

import { addNote } from "features/notes/notesSlice";

import Modal from "components/common/Modal";
import Input from "components/common/Input";
import Button from "components/common/Button";

import { getAddNoteFormStyles } from "../styles";

const initialValues = { title: "", note: "" };

const AddNoteFrom = (props) => {
  const classes = getAddNoteFormStyles();
  const dispatch = useDispatch();

  const handleSubmit = (data) => {
    const dataSet = {
      id: uuidv4(),
      title: data.title,
      body: data.note,
      dateCreated: new Date().toString(),
      dateModified: new Date().toString(),
    };
    dispatch(addNote(dataSet));
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
                <Typography variant="h6">Add a note</Typography>
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
                <Button type="submit">Add</Button>
              </Box>
            </form>
          );
        }}
      </Formik>
    </Modal>
  );
};

export default AddNoteFrom;
