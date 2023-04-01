import Button from '@mui/material/Button';

const FormButton = (props) => {
    const {buttonText} = props;
    return (
        <Button variant="contained">{buttonText}</Button>
      );
}

export default FormButton;