import { TextField } from "@mui/material";

const Input = ({ onChange, ...props }) => {
  const handleChange = (e) => {
    props?.form && props.form.setFieldValue(props.field.name, e.target.value);
    onChange && onChange(e.target.value);
  };

  return <TextField size="small" onChange={handleChange} {...props} />;
};

export default Input;
