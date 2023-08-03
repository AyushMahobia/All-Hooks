import React, { useReducer } from 'react'

const reducer = (state, action) => {
    switch (action.type) {
        case "INCREMENT":
            return { count: state.count + 1, showText: state.showText }
            break;
        case "DECREMENT":
            return (state.count <= 0 ? { count: state.count, showText: state.showText } : { count: state.count - 1, showText: state.showText })
            break;
        case "TOGGLETEXT":
            return { count: state.count, showText: !state.showText }
            break;

        default:
            return { count: state.count, showText: state.showText }
            break;
    }
}

const UseReducer = () => {
    const [state, dispatch] = useReducer(reducer, { count: 0, showText: true })


    return (
        <>
            <div className="card">
                <button onClick={() => { dispatch({ type: "INCREMENT" }) }}>
                    Count INCREMENT
                </button>
                <br />
                <br />
                <button onClick={() => { dispatch({ type: "DECREMENT" }) }}>
                    Count DECREMENT
                </button>
                <br />
                <br />
                <button onClick={() => { dispatch({ type: "TOGGLETEXT" }) }}>
                    Toggle Text
                </button>
                <h2>{state.count}</h2>
                {state.showText && <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae accusantium eveniet autem!</p>}
            </div>
        </>
    )
}

export default UseReducer
