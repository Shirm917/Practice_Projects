import TextField from '@mui/material/TextField';

const FormInput = (props) => {
    const {label} = props;
    return (
        <TextField sx={{m: 1}} id="outlined-basic" label={label} variant="outlined" />
     );
}

export default FormInput;