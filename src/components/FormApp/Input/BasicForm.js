import useHook from './use-hook';

const BasicForm = (props) => {
  
  const {value: enteredName, isValid: isNameValid, hasError: nameInputHasError, ChangeHandler: nameChangeHandler, BlurHandler: nameBlurHandler, reset: resetName} = useHook((name) => (name.length > 5 && name.trim() !== ''));
  const {value: enteredName2, isValid: isName2Valid, hasError: name2InputHasError, ChangeHandler: name2ChangeHandler, BlurHandler: name2BlurHandler, reset: resetName2} = useHook((name2) => (name2.length > 5 && name2.trim() !== ''));
  const {value: enteredEmail, isValid: isEmailValid, hasError: emailInputHasError, ChangeHandler: emailChangeHandler, BlurHandler: emailBlurHandler, reset: resetEmail} = useHook((email) => (email.includes('@') && email.includes('.')));

  let isFormValid = false;

  if(isNameValid && isName2Valid & isEmailValid) {
    isFormValid = true;
  }

  const formSubmitHandler = (event) => {
    event.preventDefault();

    //get the values
    if(!isNameValid && !isName2Valid && !isEmailValid){
      console.log('not passed');
      return;
    }

    resetName();
    resetName2();
    resetEmail();
    console.log('passed');
    //validate the values if the values are invalid return to the form
    //if valid reset the values
  }

    const nameClasses = nameInputHasError ? 'form-control invalid' : 'form-control';
    const name2Classes = name2InputHasError ? 'form-control invalid' : 'form-control';
    const emailClasses = emailInputHasError ? 'form-control invalid' : 'form-control';

    return (
      <form onSubmit={formSubmitHandler}>
        <div className='control-group'>
          <div className={nameClasses}>
            <label htmlFor='name'>First Name</label>
            <input 
              type='text' 
              id='first_name' 
              onChange={nameChangeHandler}
              onBlur={nameBlurHandler} 
              value={enteredName} />
              {nameInputHasError && <p className="error-text">Please provide a valid First Name</p>}
          </div>
          <div className={name2Classes}>
            <label htmlFor='name'>Last Name</label>
            <input 
                type='text' 
                id='last_name'
                onChange={name2ChangeHandler}
                onBlur={name2BlurHandler} 
                value={enteredName2} 
              />
              {name2InputHasError && <p className="error-text">Please provide a valid Last Name</p>}
          </div>
        </div>
        <div className={emailClasses}>
          <label htmlFor='name'>E-Mail Address</label>
          <input 
              type='text' 
              id='email'
              onChange={emailChangeHandler}
              onBlur={emailBlurHandler} 
              value={enteredEmail} 
            />
            {emailInputHasError && <p className="error-text">Please provide a valid Email</p>}
        </div>
        <div className='form-actions'>
          <button type="submit" disabled={!isFormValid}>Submit</button>
        </div>
      </form>
    );
  };
  
  export default BasicForm;
  