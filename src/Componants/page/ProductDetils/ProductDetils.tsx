import Axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IProduct } from "../../../Utils/Interfaces";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../App/features/ProductSlice/productSlice";
const ProductDetails = () => {
    const [detils, setDetils] = useState<IProduct>()
    const [productImage, setProductImage] = useState("")
    const { id } = useParams();
    const dispatch = useDispatch() ;
    useEffect(() => {
        (async () => {
            try {
                const res = await Axios.get(`https://dummyjson.com/products/${id}`);
                const req = res.data
                setDetils(req)
                setProductImage(req.thumbnail)
            } catch (error) {
                console.log(error)
            }
        })()
    }
        , [])
    const handelMinImage = (image: string) => {
        setProductImage(image)
    }
    return (
        <div className="p-4">
            {
                detils ? (
                    <div className="flex flex-col items-center">
                        <img
                            src={productImage}
                            alt={'photo'}
                            className="w-64 h-64 object-cover mb-4"
                        />
                        <h2 className="text-3xl font-bold mb-4">{detils.title}</h2>
                        <p className="text-lg text-gray-700 mb-2">{detils.desc}</p>
                        <p className="text-xl font-semibold text-gray-900 mb-4">
                            ${detils.price}
                        </p>
                        <div className="w-full mb-4">
                            <button onClick={()=>dispatch(addToCart(detils))} className="w-full bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
                                أضف إلى السلة
                            </button>
                        </div>
                        <h3 className="text-xl font-semibold mb-2">صور إضافية:</h3>
                        <div className="flex gap-2">
                            {detils.images?.map((image, index) => (
                                <img
                                    onClick={() => handelMinImage(image)}
                                    key={index}
                                    src={image}
                                    alt={`product-${index}`}
                                    className="w-24 h-24 object-cover"
                                />
                            ))}
                        </div>
                    </div>
                ) : (
                    <div className="loading">
                        <i className="fa fa-spinner fa-spin"></i> جارٍ تحميل المنتج...
                    </div>
                )
            }

        </div>
    );
};

export default ProductDetails;