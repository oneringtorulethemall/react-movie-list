import React, { useState, useCallback } from 'react';

// note: T can be anything...single types (int, string, float) or
//       more complex types. It is up to the caller to cast/interpret
//       the data in callback method.
interface CallbackOneParm<T, T1 = void> {
    (param1: T): T1;
}

const defaultHeaders = {
    'Content-Type': 'application/json'
};

const useHttp = () => {

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const sendRequest = useCallback(async (requestConfig: any, callback: CallbackOneParm<any> | null) => {
        try {
            debugger;
            const response = await fetch(requestConfig.url, {
                method: requestConfig.method || 'GET',
                headers: requestConfig.headers || defaultHeaders,
                body: requestConfig.body ? JSON.stringify(requestConfig.body) : null
            });
            if (!response.ok) throw new Error(`Request failed for ${requestConfig.url}`);
            const data = await response.json();
            setLoading(false);
            setError(null);
            if (callback) {
                callback(data);
            }
        }
        catch (err: any) {
            setLoading(false);
            setError(err);
        }
    }, []);

    return {
        loading,
        error,
        sendRequest
    }

};

export default useHttp;