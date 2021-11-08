import React, { useReducer } from 'react';


const inputStateReducer = (state: any, action: any) => {
    switch (action!.type as string) {
        case "CHANGE":
            return {
                value: action.payload,
                isTouched: state.isTouched as boolean
            };
        case "BLUR":
            return { value: state.value, isTouched: true };
        case "RESET":
            return initialState;
        default:
            return state;
    }
}

const initialState = {
    value: '',
    isTouched: false
};


const useInputReducer = (props: any) => {

    const { validateValue } = props;
    const [state, dispatch] = useReducer(inputStateReducer, initialState);

    const valueIsValid: boolean = (validateValue != null ? validateValue(state.value) as boolean : true);
    const hasError: boolean = (!valueIsValid && state.isTouched as boolean);

    const valueChangedEventHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: 'CHANGE',
            payload: event.target.value
        })
    }

    const valueBlurEventHandler = (event: React.FormEvent<HTMLInputElement>) => {
        dispatch({
            type: 'BLUR',
            payload: null
        });
    }

    const reset = () => {
        dispatch({
            type: 'RESET',
            payload: null
        });
    };

    return {
        value: state.value,
        isValid: valueIsValid,
        touched: state.isTouched as boolean,
        hasError,
        valueChangedEventHandler,
        valueBlurEventHandler,
        reset
    }

}

export default useInputReducer;