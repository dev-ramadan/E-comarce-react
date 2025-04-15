import { useDispatch } from "react-redux";
import { useProduct } from "../../../Utils/Hooks/useProduct";
import { addToCart } from "../../../App/features/ProductSlice/productSlice";
import { useCategories } from "../../../Utils/Hooks/useCategories";
import { useState } from "react";
import { Link } from "react-router-dom";
import Search from "../../Search/Search";
const Product = () => {
  const [categorie, setCategorie] = useState('smartphones');
  const { products, loading } = useProduct(categorie);
  const { categories } = useCategories();
  const dispatch = useDispatch();
  return (
    <>
      {loading ? <div className="loading"><i className="fa fa-spinner fa-spin"></i><h3 className="text-xl">Loading....</h3></div> :
        <div className="p-4">
          <Search/>
          <select value={categorie} onChange={(e) => setCategorie(e.target.value)} className="mb-4 p-2 rounded">
            {categories.map((item) => (
              <option key={item.slug} value={item.slug}>
                {item.name}
              </option>
            ))}
          </select>
          <h2 className="text-2xl font-bold mb-4 text-center">المنتجات</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {products.map(product => (
              <div key={product.id} className="bg-slate-400 shadow-md rounded-lg overflow-hidden flex justify-center items-center flex-col">
                <Link to={`/products/${product.id}`}>
                  <img src={product.thumbnail} alt={product.title} className="w-fit h-48 object-cover" />
                </Link>
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-2">{product.title}</h3>
                  <p className="text-gray-600 mb-2">${product.price}</p>
                  <button onClick={() => dispatch(addToCart(product))} className="w-full bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
                    أضف إلى السلة
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      }
    </>
  );
}
export default Product;
