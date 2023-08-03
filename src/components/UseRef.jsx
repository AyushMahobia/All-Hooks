import React, { useRef, useState } from 'react'

const UseRef = () => {
    const [text, setText] = useState("")
    const inputRef = useRef(null);

    const handleClick = () => {
        inputRef.current.focus();
    }
    const handleChange = (e)=>{
        setText(e.target.value)
    }
    const restText = ()=>{
        inputRef.current.value = "";
    }
    return (
        <>
            <div className="card">
                <h2>{text}</h2>
                <input type="text" placeholder='Write Name' ref={inputRef} onChange={handleChange} />
                <button onClick={handleClick}>
                    Change Name
                </button>
                <br />
                <br />
                <button onClick={restText}>Reset</button>
            </div>
        </>
    )
}

export default UseRef
