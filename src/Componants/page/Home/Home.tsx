import { useDispatch } from "react-redux";
import { useProduct } from "../../../Utils/Hooks/useProduct";
import { addToCart } from "../../../App/features/counter/productSlice";
import { useCategories } from "../../../Utils/Hooks/useCategories";
import { useState } from "react";
import { Link } from "react-router-dom";
import SwiperSlider from "../../UI/Sliders/SwiperSlider";
import ProductCartCategory from "./ProductCartCategory/ProductCartCategory";
import ProductCard from "../../UI/Cart/Cart";
const Home = ( ) => {
  const [categorie, setCategorie] = useState('smartphones');
  const { loading } = useProduct(categorie);

  return (
    <>
      {loading ? <div className="loading"><i className="fa fa-spinner fa-spin"></i><h3 className="text-xl">Loading....</h3></div> :
        <div className="p-4">
          <SwiperSlider/>
          <ProductCartCategory/>
          <ProductCard/>
        </div>
      }
    </>
  );
}
export default Home;
