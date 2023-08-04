import axios from 'axios';
import React, { useEffect, useState } from 'react'

const url = "https://jsonplaceholder.typicode.com/comments";
const UseEffect = () => {
    const [info, setInfo] = useState([])

    const [query, setQuery] = useState("");
    const fetchData = async () => {
        const { data } = await axios.get(url);
        setInfo(data);
    }

    useEffect(() => {
        fetchData();
    }, [])

    return (
        <>

            <input type="search" value={query} onChange={e => setQuery(e.target.value)} placeholder='Search by name' />

            {
                info.filter((value, ind) => {
                    if (query === "") {
                        return info;
                    } else if (value.name.toLowerCase().includes(query.toLowerCase())) {
                        return info;
                    }
                }).map((value, ind) => {
                    return <div key={value.id}>
                        <p >{value.name}</p>
                    </div>
                })
            }
        </>
    )
}

export default UseEffect
