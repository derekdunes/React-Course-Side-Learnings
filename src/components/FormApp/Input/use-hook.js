import {useState} from 'react';

const useHook = (checkValidity) => {

    const [enteredValue, setEnteredValue] = useState('');
    const [isTouched, setIsTouched] = useState(false);

    let isValid = checkValidity(enteredValue); 
    const hasError = !isValid && isTouched;

    const ChangeHandler = (event) => {
        //console.log(event.target.value);
        setEnteredValue(event.target.value);
    }
    
    const BlurHandler = (event) => {
        //console.log('is setting');
        setIsTouched(true);
    }

    const resetValue = () => {
        setEnteredValue('');
        setIsTouched(false);
    }

    return {
        value: enteredValue,
        isValid: isValid,
        hasError,
        ChangeHandler,
        BlurHandler,
        reset: resetValue
    }

}

export default useHook;