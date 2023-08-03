import React, { useEffect, useLayoutEffect, useRef } from 'react'

const UseLayoutEffect = () => {
    const inputRef = useRef(null);

    useLayoutEffect(() => {
        console.log(inputRef.current.value)
    }, [])

    useEffect(() => {
        inputRef.current.value = "PEDRO";
    }, [])
    return (
        <div>
            <input type="text" value="Ayush" ref={inputRef} />
        </div>
    )
}

export default UseLayoutEffect
