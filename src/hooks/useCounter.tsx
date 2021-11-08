import React, { useEffect, useState } from 'react';

const useCounter = (props: any) => {
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            console.log('setting counter: value is ' + counter);
            // debugger;
            setCounter(counter + props);
        }, 1000);
        return () => {
            console.log('clearing timer')
            clearInterval(interval);
        }
    }, [counter]);

    return (counter);

};


export default useCounter;