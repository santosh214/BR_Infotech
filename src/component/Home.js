import axios from "axios"
import { useEffect,useState } from "react"

export default function Home() {
    const[data,setData]=useState([])
    useEffect(() => {
        axios.get('http://localhost:3006/people').then((response)=>{
            setData(response.data)
        })

    }, [])
    console.log("datas",data)

    return (
        <div>
            <h1>Home</h1>
            
        </div>
    )
}
