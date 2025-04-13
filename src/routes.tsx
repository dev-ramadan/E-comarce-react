import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom"
import Home from "./Componants/page/Home/Home"
import Product from "./Componants/page/Shop/Shop"
import Layout from "./Componants/page/LayOut/Layout"
import Cart from "./Componants/page/Cart/Cart"
import ProductDetails from "./Componants/page/ProductDetils/ProductDetils"
const router = createBrowserRouter(createRoutesFromElements(
    <>
        <Route path="/" element={<div><Layout /> </div>}>
            <Route index element={<Home />} />
            <Route path="product" element={<Product />} />
            <Route path="cart" element={<Cart />} />
            <Route path="/products/:id" element={<ProductDetails />} />
        </Route>
    </>
))

export default router