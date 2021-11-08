import React, { useState } from 'react';


const useInput = (props: any) => {

    const { validateValue } = props;

    const [enteredValue, setEnteredValue] = useState('');
    const [isTouched, setIsTouched] = useState(false);

    const valueIsValid = (validateValue != null ? validateValue(enteredValue) as boolean : true);
    const hasError = !valueIsValid && isTouched;

    const valueChangedEventHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEnteredValue(event.target.value);
    }

    const valueBlurEventHandler = (event: React.FormEvent<HTMLInputElement>) => {
        setIsTouched(true);
    }

    const reset = () => {
        setEnteredValue('');
        setIsTouched(false);
    }

    return {
        value: enteredValue,
        isValid: valueIsValid,
        touched: isTouched,
        hasError,
        valueChangedEventHandler,
        valueBlurEventHandler,
        reset,
    }

}

export default useInput;