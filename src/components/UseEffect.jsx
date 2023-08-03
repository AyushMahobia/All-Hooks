import axios from 'axios';
import React, { useEffect, useState } from 'react'

const url = "https://jsonplaceholder.typicode.com/comments";
const UseEffect = () => {
    const [info, setInfo] = useState([])
    const fetchData = async () => {
        const { data } = await axios.get(url);
        setInfo(data);
    }

    useEffect(() => {
        fetchData();
    }, [])

    return (
        <>
            {info ? info.map((value, ind) => {
                return <div key={value.id}>
                    <p >{value.name}</p>
                </div>
            }) : <h1>Data is not fetched</h1>}
        </>
    )
}

export default UseEffect
