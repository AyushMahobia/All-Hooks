import { useState } from "react";
let arr = ["play cricket", "play video game", "read book"];
let show = [false, false, false];
// console.log(arr)
export default function MockTest() {
    const [work, setWork] = useState(arr);
    const [check, setCheck] = useState(false);
    const [currInd, setCurrInd] = useState();

    const handleClick = (e) => {
        const deleteitem = e.target.value;
        const deleteItem = work.filter((value) => deleteitem !== value);
        setWork(deleteItem);
    };

    const handleCeckBox = (e, index) => {
        setCheck(!check)
        setCurrInd(index)
        // console.log(check)
    }
    return (
        <>
            <ul>
                {work.map((item, ind) => {
                    return (
                        <li key={item}>
                            <input type="checkbox" value={ind} onChange={(e) => handleCeckBox(e, ind)} />
                            {item}{" "}
                            {
                                (check && currInd === ind) && <button type="button" value={item} onClick={handleClick}>
                                    X
                                </button>
                            }
                        </li>
                    );
                })}
            </ul>
        </>
    );
}
