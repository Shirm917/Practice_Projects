import TextField from "@mui/material/TextField";

const FormInput = (props) => {
  const { id, label, value, setValue, type, pattern } = props;
  return (
    <TextField
      sx={{ m: 1 }}
      id={id}
      label={label}
      variant="outlined"
      required
      pattern={pattern}
      type={type}
      value={value}
      onChange={(event) => setValue(event.target.value)}
    />
  );
};

export default FormInput;
