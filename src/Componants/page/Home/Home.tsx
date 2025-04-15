import { useProduct } from "../../../Utils/Hooks/useProduct";
import { useState } from "react";
import SwiperSlider from "../../UI/Sliders/SwiperSlider";
import ProductCartCategory from "./ProductCartCategory/ProductCartCategory";
import ProductCard from "../../UI/Cart/Cart";
import Search from "../../Search/Search";
const Home = ( ) => {
  const [categorie, setCategorie] = useState('smartphones');
  const { loading } = useProduct(categorie);

  return (
    <>
      {loading ? <div className="loading"><i className="fa fa-spinner fa-spin"></i><h3 className="text-xl">Loading....</h3></div> :
        <div className="p-4">
          <Search/>
          <SwiperSlider/>
          <ProductCartCategory/>
          <ProductCard/>
        </div>
      }
    </>
  );
}
export default Home;
