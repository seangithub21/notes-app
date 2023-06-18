const getStyles = () => ({
  container: {
    display: "flex",
    flexDirection: "column",
    gap: "2rem",
  },
  returnButton: {
    fontSize: "clamp(3rem, 8vw, 5rem)",
  },
  title: {
    fontSize: "clamp(3rem, 8vw, 5rem)",
  },
  header: {
    display: "flex",
    alignItems: "center",
    gap: "2rem",
  },
  edit: {
    fontSize: "clamp(2rem, 5vw, 3rem)",
  },
  infoBlock: {
    width: "100%",
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    borderRadius: "1.2rem",
    padding: "1.2rem 1.6rem",
    backdropFilter: "blur(3.3rem)",
    backgroundBlendMode: "overlay",
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
  },
});

export const getEditNoteFormStyles = () => ({
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
