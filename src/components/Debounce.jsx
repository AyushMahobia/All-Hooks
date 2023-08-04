import React, { useEffect, useState } from 'react'

export const useDebounce = (inputValue, delay = 500) => {
    const [debounceValue, setDebounceValue] = useState(inputValue);
    useEffect(() => {
        const timer = setTimeout(() => setDebounceValue(inputValue), delay);

        return () => {
            clearTimeout(timer);
        }
    }, [inputValue, delay])

    return debounceValue
}


