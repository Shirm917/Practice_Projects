import Button from '@mui/material/Button';

const FormButton = (props) => {
    const {buttonText,onClick} = props;
    return (
        <Button variant="contained" onClick={onClick}>{buttonText}</Button>
      );
}

export default FormButton;