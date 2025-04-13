import Axios from "axios"
import { useEffect, useState } from "react"
import { IProduct } from "../Interfaces"
export const useProduct = (categorie : string) => {
  const [products, setProducts] = useState<IProduct[]>([])
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    if(!categorie) return ;
    (async function getApi() {
      setLoading(true)
      try {
        const res = await Axios.get(`https://dummyjson.com/products/category/${categorie}`)
        const req = res.data.products
        setProducts(req)
      } catch (error) {
        console.log(error)
      } finally {
        setLoading(false)
      }
    })()
  }, [categorie])

  return { products, loading }
}















// //import  Axios  from "axios"
// import { useEffect, useState } from "react"
// import { ICategories, IProduct } from "../Interfaces"
// import { useCategories } from "./useCategories"
// export const useProduct = () => {
// const [products, setProducts] = useState<IProduct[]>([])
// const [loading ,setLoading] = useState(false)
// const [categorie ,setCategorie] = useState('smartphones')
// const {categories} = useCategories()
// categories.map(item => setCategorie(item.name))
// useEffect(() => {
//     (async function getApi() {
//       setLoading(true)
//       try {
//         const res = await Axios.get(`https://dummyjson.com/products/category/${categorie}`)
//         const req = res.data.products
//         setProducts(req)

//       } catch (error) {
//         console.log(error) 
//       }finally{
//         setLoading(false)
//       }
//     })()
//   }, []);
//   return {products,loading}
// }