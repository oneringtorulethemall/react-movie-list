import React, { HTMLInputTypeAttribute, useDebugValue, useEffect, useState } from 'react';

import useInput from '../../hooks/useInput';

import classes from './forms.module.css';

const SimpleInput = (props: any) => {

  //const nameInputRef = useRef<HTMLInputElement | null>(null);
  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    touched: nameTouched,
    hasError: nameHasError,
    valueChangedEventHandler: nameChangedHandler,
    valueBlurEventHandler: nameBlurHandler,
    reset: resetNameInput
  } = useInput({ validateValue: (value: string) => { return value.trim() !== '' } })


  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    touched: emailTouched,
    hasError: emailHasError,
    valueChangedEventHandler: emailChangedHandler,
    valueBlurEventHandler: emailBlurHandler,
    reset: resetEmailInput
  } = useInput({
    validateValue: (value: string) => {
      let isEmailValid = true;
      if (value.search("@") < 0)
        isEmailValid = false;
      if (value.search(".") < 0)
        isEmailValid = false;
      if (!value.endsWith("com") &&
        !value.endsWith("net") &&
        !value.endsWith("org"))
        isEmailValid = false;
      return isEmailValid;
    }
  })

  const formIsValid = (enteredNameIsValid && enteredEmailIsValid)

  const formSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    alert('value to send is: ' + enteredName + '\n' + enteredEmail);
    resetNameInput();
    resetEmailInput();
    //var valueFromRef = nameInputRef.current?.value;
    //alert('value retrieved from Reference: ' + valueFromRef);
  }

  let inputClassesForName = classes['form-control'];
  if (!enteredNameIsValid && nameTouched)
    inputClassesForName += ' ' + classes['invalid'];
  let inputClassesForEmail = classes['form-control'];
  if (!enteredEmailIsValid && emailTouched)
    inputClassesForEmail += ' ' + classes['invalid'];

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={inputClassesForName}>
        <label htmlFor='name'>Your Name</label>
        <input
          type='text'
          id='name'
          onChange={nameChangedHandler}
          onBlur={nameBlurHandler}
          value={enteredName}
        />
        {(!enteredNameIsValid && nameTouched) && <p className={classes['error-text']}>Name is required.</p>}
      </div>
      <div className={inputClassesForEmail}>
        <label htmlFor='email'>Email</label>
        <input
          type='email'
          id='email'
          onChange={emailChangedHandler}
          onBlur={emailBlurHandler}
          value={enteredEmail}
        />
        {(!enteredEmailIsValid && emailTouched) && <p className={classes['error-text']}>Email is required.</p>}
      </div>
      <div className={classes['form-actions']}>
        <button
          disabled={!formIsValid}>
          Submit
        </button>
      </div>
    </form>
  );
};

export default SimpleInput;
