import  Axios  from "axios"
import { useEffect, useState } from "react"
import { ICategories } from "../Interfaces"
export const useCategories = () => {
const [categories, setCategories] = useState<ICategories[]>([])
const [loading ,setLoading] = useState(false)
useEffect(() => {
    (async function getApi() {
      setLoading(true)
      try {
        const res = await Axios.get("https://dummyjson.com/products/categories")
        const req = res.data
        setCategories(req)
      } catch (error) {
        console.log(error) 
      }finally{
        setLoading(false)
      }
    })()
  }, []);
  return {categories,loading}
}