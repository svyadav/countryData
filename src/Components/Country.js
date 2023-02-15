import React, { useEffect, useState } from "react"
import axios from "axios"

const Country=()=>{
    const [data,setData]=useState([])
    const [searchText, setSearchText] = useState("");
    ;let datas=[]
    const getData=async()=>{
    await axios.get('https://dog.ceo/api/breeds/list/all')
        .then((response)=>{
            // console.log(response.data.message)
            setData(response.data.message)
        }).catch((err)=>{
            console.log(err)

        })
    }

    for(const key in data){
        datas.push(`${key}: ${data[key]}`)
    }
  
    useEffect(()=>{
        getData()
    })
    return (
        <>
        <h1 style={{color:"red"}}>Your required Data</h1>
        <input type="text" onChange={(e)=>setSearchText(e.target.value)}/>
    {
        datas.filter((value)=>
        value.includes(searchText.toLowerCase())
        )
        .map((item,index)=>{
            return <h2 key={index}>
                {`${item[0].toUpperCase()}`}
            </h2>
        })
    }
        </>
    )
}

export default Country