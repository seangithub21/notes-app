import { Box, Modal as MuiModal, useTheme } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

import getStyles from "./styles";

const Modal = ({ children, sx, withCloseIcon, ...props }) => {
  const theme = useTheme();
  const classes = getStyles({ theme });

  return (
    <MuiModal {...props}>
      <Box sx={{ ...classes.container, ...sx }}>
        <Box sx={{ textAlign: "right" }}>
          {withCloseIcon && (
            <CloseIcon onClick={props.onClose} sx={classes.cross} />
          )}
        </Box>
        {children}
      </Box>
    </MuiModal>
  );
};

export default Modal;
