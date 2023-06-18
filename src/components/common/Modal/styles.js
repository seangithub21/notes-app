const getStyles = ({ theme }) => {
  return {
    container: {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      minWidth: "30rem",
      maxWidth: "90%",
      boxShadow: "rgb(38, 57, 77) 0rem 2rem 3rem -1rem;",
      p: "3rem 2rem",
      backgroundColor: "rgba(255, 255, 255, .7)",
      borderRadius: "1.2rem",
      backdropFilter: "blur(3.3rem)",
      backgroundBlendMode: "overlay",
    },
    cross: {
      color: theme.palette.grey[800],
      cursor: "pointer",
      fontSize: "2.5rem",
    },
  };
};

export default getStyles;
