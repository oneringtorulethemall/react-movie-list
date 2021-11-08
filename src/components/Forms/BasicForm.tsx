import React from 'react';
import useInput from '../../hooks/useInput';
import useInputReducer from '../../hooks/useInputReducer';

import classes from './forms.module.css';

const isNotEmpty = (value: string) => value.trim() !== '';
const isEmailAddress = (value: string) => {
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
};

const BasicForm = (props: any) => {

  const {
    value: firstNameValue,
    isValid: firstNameIsValid,
    touched: isFirstNameTouched,
    hasError: firstNameHasError,
    valueChangedEventHandler: firstNameChangedHandler,
    valueBlurEventHandler: firstNameBlurHandler,
    reset: resetFirstName

  } = useInput({
    validateValue: (value: string) => {
      return isNotEmpty(value);
    }
  });

  const {
    value: lastNameValue,
    isValid: lastNameIsValid,
    touched: isLastNameTouched,
    hasError: lastNameHasError,
    valueChangedEventHandler: lastNameChangedHandler,
    valueBlurEventHandler: lastNameBlurHandler,
    reset: resetLastName
  } = useInput({
    validateValue: (value: string) => {
      return isNotEmpty(value);
    }
  })

  const {
    value: emailValue,
    isValid: emailIsValid,
    touched: isEmailTouched,
    hasError: emailHasError,
    valueChangedEventHandler: emailChangedHandler,
    valueBlurEventHandler: emailBlurHandler,
    reset: resetEmail
  } = useInput({
    validateValue: (value: string) => {
      var isValid = true;
      if (!isNotEmpty(value))
        isValid = false;
      if (isValid)
        isValid = isEmailAddress(value);
      return isValid;
    }
  });


  const {
    value: phoneValue,
    isValid: phoneIsValid,
    touched: isPhoneTouched,
    hasError: phoneHasError,
    valueChangedEventHandler: phoneChangedHandler,
    valueBlurEventHandler: phoneBlurHandler,
    reset: resetPhone
  } = useInput({
    validateValue: (value: string) => {
      return value.trim() !== '';
    }
  });


  const {
    value: addressValue,
    isValid: addressIsValid,
    touched: isAddressTouched,
    hasError: addressHasError,
    valueChangedEventHandler: addressChangedHandler,
    valueBlurEventHandler: addressBlurHandler,
    reset: resetAddress
  } = useInputReducer({
    validateValue: (value: string) => {
      return value.trim() !== '' && value.substr(0, 7) == "PO Box ";
    }
  });


  const formIsValid = (firstNameIsValid && lastNameIsValid && emailIsValid && phoneIsValid && addressIsValid);

  const formSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    debugger;
    event.preventDefault();

    alert('value to send is: \n' + firstNameValue + '\n' + lastNameValue + '\n' + emailValue + '\n' + phoneValue + '\n' + addressValue);
    resetAll();
    //var valueFromRef = nameInputRef.current?.value;
    //alert('value retrieved from Reference: ' + valueFromRef);
  }


  const resetAll = () => {
    resetFirstName();
    resetLastName();
    resetEmail();
    resetPhone();
    resetAddress();
  }

  const firstNameClasses = classes['form-control'] + ` ${firstNameHasError ? classes['invalid'] : ''}`;
  const lastNameClasses = classes['form-control'] + ` ${lastNameHasError ? classes['invalid'] : ''}`;
  const emailClasses = classes['form-control'] + ` ${emailHasError ? 'invalid' : ''}`;
  const phoneClasses = classes['form-control'] + ` ${phoneHasError ? 'invalid' : ''}`;
  const addressClasses = classes['form-control'] + ` ${addressHasError ? 'invalid' : ''}`;

  debugger;
  return (
    <form onSubmit={formSubmitHandler}>
      <div className={classes['control-group']}>
        <div className={firstNameClasses}>
          <label htmlFor='firstname'>First Name</label>
          <input
            type='text'
            id='firstname'
            onChange={firstNameChangedHandler}
            onBlur={firstNameBlurHandler}
            value={firstNameValue}
          />
          {(!firstNameIsValid && isFirstNameTouched) && <p className={classes['error-text']}>First name is required</p>}
        </div>
        &nbsp;
        <div className={lastNameClasses}>
          <label htmlFor='lastname'>Last Name</label>
          <input
            type='text'
            id='lastname'
            onChange={lastNameChangedHandler}
            onBlur={lastNameBlurHandler}
            value={lastNameValue}
          />
          {!lastNameIsValid && isLastNameTouched && <p className={classes['error-text']}>Last name is required.</p>}
        </div>
      </div>
      <div className={emailClasses}>
        <label htmlFor='emailAddress'>E-Mail Address</label>
        <input
          type='text'
          id='emailAddress'
          onChange={emailChangedHandler}
          onBlur={emailBlurHandler}
          value={emailValue}
        />
        {!emailIsValid && isEmailTouched && <p className={classes['error-text']}>Email is required.</p>}
      </div>
      <div className={phoneClasses}>
        <label htmlFor='phoneNumber'>Phone #</label>
        <input
          type='tel'
          id='phoneNumber'
          onChange={phoneChangedHandler}
          onBlur={phoneBlurHandler}
          value={phoneValue}
        />
        {!phoneIsValid && isPhoneTouched && <p className={classes['error-text']}>Phone is required.</p>}
      </div>
      <div className={addressClasses}>
        <label htmlFor='address'>Address</label>
        <input
          type='input'
          id='address'
          onChange={addressChangedHandler}
          onBlur={addressBlurHandler}
          value={addressValue}
        />
        {!addressIsValid && isAddressTouched && <p className={classes['error-text']}>Address is required.</p>}
      </div>
      <div className={classes['form-actions']}>
        <button
          disabled={!formIsValid}
        >Submit</button>
        &nbsp;
        <button
          type='button'
          onClick={resetAll}>
          Reset
        </button>
      </div>
    </form>
  );
};

export default BasicForm;
