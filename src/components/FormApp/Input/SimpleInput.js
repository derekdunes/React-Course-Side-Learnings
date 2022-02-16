import useInput from '../Hooks/use-input';

const SimpleInput = (props) => {

    const {value: enteredName, isValid: enteredNameIsValid, hasError: nameInputHasError, valueChangeHandler: nameChangedHandler, inputBlurHandler: nameBlurHandler, reset: resetNameInput } = useInput(value => (value.trim() !== '' && value.length > 4));
    const {value: enteredEmail, isValid: enteredEmailIsValid, hasError: emailInputHasError, valueChangeHandler: emailChangedHandler, inputBlurHandler: emailBlurHandler, reset: resetEmailInput } = useInput(value => (value.includes('@') && value.includes('.')));   
    
    let formIsValid = false;

    if(enteredNameIsValid && enteredEmailIsValid){
      console.log("Form is " + formIsValid);
        formIsValid = true;
        console.log("Form is " + formIsValid +  " new");
    }

    const formSubmissionHandler = event => {
        event.preventDefault();

        if(!enteredNameIsValid || !enteredEmailIsValid){
            return;
        }

        console.log(enteredName);

        resetNameInput();
        resetEmailInput();
    };

    const nameInputClasses = nameInputHasError ? 'form-control invalid' : 'form-control';
    const emailInputClasses = emailInputHasError ? 'form-control invalid' : 'form-control';

    return (
      <form onSubmit={formSubmissionHandler}>
        <div className={nameInputClasses}>
          <label htmlFor='name'>Your Name</label>
          <input 
            type='text' 
            id='name' 
            onChange={nameChangedHandler}
            onBlur={nameBlurHandler}
            value={enteredName}/>
            {nameInputHasError && <p className="error-text">Name must not be Empty</p>}
        </div>
        <div className={emailInputClasses}>
          <label htmlFor='email'>Your Email</label>
          <input 
            type='email' 
            id='email' 
            onChange={emailChangedHandler}
            onBlur={emailBlurHandler}
            value={enteredEmail}/>
            {emailInputHasError && <p className="error-text">Email must not be Empty</p>}
        </div>
        <div className="form-actions">
          <button disabled={!formIsValid}>Submit</button>
        </div>
      </form>
    );
  };
  
  export default SimpleInput;