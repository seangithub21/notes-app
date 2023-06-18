import { IconButton, Button as MuiButton } from "@mui/material";

const Button = ({ sx, icon, ...props }) => {
  return !icon ? (
    <MuiButton
      variant="text"
      sx={{ borderRadius: "0.8rem", ...sx }}
      {...props}
    />
  ) : (
    <IconButton {...props} />
  );
};

export default Button;
