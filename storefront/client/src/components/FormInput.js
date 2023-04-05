import TextField from '@mui/material/TextField';

const FormInput = (props) => {
    const {label,value, setValue} = props;
    return (
        <TextField sx={{m: 1}} id="outlined-basic" label={label} variant="outlined" value={value} onChange={(event) => setValue(event.target.value)}/>
     );
}

export default FormInput;