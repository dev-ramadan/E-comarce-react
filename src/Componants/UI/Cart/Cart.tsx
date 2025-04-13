import { useDispatch } from "react-redux";
import { useProduct } from "../../../Utils/Hooks/useProduct";
import { addToCart } from "../../../App/features/counter/productSlice";
import { IProduct } from "../../../Utils/Interfaces";
import { Link } from "react-router-dom";

const ProductCard = () => {
  const phone = 'smartphones';
  const groceries = 'groceries'
  const beauty = 'beauty'
  const mensShirts = 'mens-shirts'
  const mensShoes = 'mens-shoes'
  const phoneData = useProduct(phone) 
  const beautyDAta = useProduct(beauty);
  const mensShirtsData = useProduct(mensShirts);
  const mensShoesData = useProduct(mensShoes);
  const groceriesData = useProduct(groceries);
  const beautys = beautyDAta.products.slice(1, 5);
  const mensShirt = mensShirtsData.products.slice(1, 5);
  const mensShoe = mensShoesData.products.slice(1, 5);
  const grocerie = groceriesData.products.slice(1, 5)
  const phones = phoneData.products.slice(1, 5)
  const data  = [ ...phones ,...beautys, ...grocerie,  ...mensShirt, ...mensShoe];
  const dispatch = useDispatch();
    return (
        <>
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center mt-20"> منتجات شائعة</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 py-12 px-4 md:px-10">
            
            {
                data.map(item => (
                    <div key={item.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition duration-300 transform hover:scale-105">
                        <Link to={`/products/${item.id}`}>
                        <img
                            src={item.thumbnail}
                            alt={item.title}
                            className="w-full h-56 object-cover rounded-t-2xl"
                        />
                        </Link>
                        <div className="p-4">
                            {/* اسم المنتج */}
                            <h3 className="text-lg font-semibold text-gray-800 truncate">{item.title}</h3>

                            {/* وصف المنتج */}
                            <p className="text-sm text-gray-600 mt-2">{item.desc}</p>

                            {/* السعر */}
                            <div className="flex items-center justify-between mt-2">
                                <span className="text-black font-bold">${item.price} </span>
                            </div>

                            {/* زر الإضافة للسلة */}
                            <button onClick={()=>dispatch(addToCart(item))} className="mt-3 w-full bg-black text-white py-2 rounded-xl hover:bg-gray-800 transition">
                                أضف للسلة
                            </button>
                        </div>
                    </div>
                ))
            }
        </div>
        </>

    );
};

export default ProductCard;
