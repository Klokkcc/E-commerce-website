import { useState,useEffect } from "react"
import { makeRequest } from "../makeReques"
const useFetch= (url)=>{
    const [data,setData]=useState(null)
    const [loading,setLoading]=useState(false)
    const [error,setError]=useState(false)
    
    useEffect(()=>{
        const fetchData=async ()=>{
           
            try{
                setLoading(true)
                const data1=await makeRequest.get(url);
                setData(data1.data.data)
               
            }catch(err){
                setError(true)
            }
            setLoading(false)
        }
        fetchData();
    },[url])
    return {data,loading,error}
}
export default useFetch;