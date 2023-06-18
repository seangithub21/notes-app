const getStyles = () => ({
  container: {
    display: "flex",
    flexDirection: "column",
    gap: "2rem",
    width: "100%",
  },
  title: {
    fontSize: "clamp(3rem, 8vw, 5rem)",
  },
  header: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "1rem",
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    borderRadius: "1.2rem",
    padding: "1.2rem 1.6rem",
    boxShadow: "0 1rem 1.5rem rgb(0 0 0 / 20%)",
    backdropFilter: "blur(3.3rem)",
    backgroundBlendMode: "overlay",
  },
});

export const getNotesListStyles = () => ({
  container: {
    display: "flex",
    flexDirection: "column",
    gap: ".5rem",
    height: "calc(100vh - 25rem)",
    overflow: "auto",
    width: "100%",
  },
});

export const getNoteStyles = ({ theme }) => ({
  container: {
    width: "100%",
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    borderRadius: "1.2rem",
    padding: "1.2rem 1.6rem",
    backdropFilter: "blur(3.3rem)",
    backgroundBlendMode: "overlay",
    cursor: "pointer",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  infoPreview: {
    width: "calc(100% - 5rem)",
  },
  body: {
    textOverflow: "ellipsis",
    overflow: "hidden",
    whiteSpace: "nowrap",
  },
  date: {
    fontSize: "1.2rem",
    color: theme.palette.grey[600],
  },
});

export const getAddNoteFormStyles = () => ({
  container: {
    display: "flex",
    flexDirection: "column",
    gap: "2rem",
    width: "60rem",
    maxWidth: "100%",
  },
  fieldsContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "2rem",
  },
});

export default getStyles;
