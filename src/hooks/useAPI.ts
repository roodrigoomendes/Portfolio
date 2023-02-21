import { useEffect, useState } from "react";
import  axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.github.com/'
})

export function useAPI<T = unknown>(url: string){
  const [data, setData] = useState<T | null>(null)
  const [isloading , setIsloading] = useState(true)
  const [error , setError] = useState< Error | null>(null)

  useEffect(() => {
    api.get(url)
    .then(response => {
      setData(response.data);
    })
    .catch(err =>{
      setError(err)
    })
    .finally(()=>{
      setIsloading(false)
    })
  },[])

  return { data, error, isloading }

}