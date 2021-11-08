import React, { useRef, useEffect } from 'react';


const usePrevious = (data: any) => {
    const ref = useRef();
    useEffect(() => {
        ref.current = data;
    }, [data])
    return ref.current;
};

export default usePrevious;