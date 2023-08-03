import axios from 'axios';
import React, { useEffect, useMemo, useState } from 'react'

const url = "https://jsonplaceholder.typicode.com/comments";

const UseMemo = () => {
    const [info, setInfo] = useState([]);
    const [toggle, setToggle] = useState(false);

    const fetchData = async () => {
        const { data } = await axios.get(url);
        setInfo(data);
    }

    useEffect(() => {
        fetchData();
    }, []);

    const findLongestName = (data) =>{
        if(!data) return null;
        let longestName = "";
        for(let i =0; i<data.length; i++){
            let currentName = data[i].name;
            if(currentName.length > longestName.length){
                longestName = currentName;
            }
        }
        console.log("Longest name completed");
        return longestName;
    }

    const getLongestName = useMemo(()=> findLongestName(info), [info]);
    //ab ye function tbhi chlega jb info data m koi changes honge naki ki kisi aur state m..So ye kisi aur k state k change hone pr waps function run ni krega blki iske andr store value waps returnn kr dega..Jismo memoisation khte h...

    //Agr useMemo use ni krte to hr kisi k state change hone pr ye component waps render hota aur waps longestName find krta..joki performance ko down krti h... 

    //Jese hum isi example m dekh rhe ki hr br toggle state change hone pr longestName wala function waps run hota tha...but useMemo use krne pe vo bs apni dependencies ko dekhta...Agr dependencies m koi changes hua tbhi function run hoga ni to ni hoga
    return (
        <>
            <h3>{getLongestName}</h3>
            <button onClick={()=>setToggle(!toggle)}>Toggle</button>
            {toggle && <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi obcaecati voluptatem sit.</p>}
        </>
    )
}

export default UseMemo
