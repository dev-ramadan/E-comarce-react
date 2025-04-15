import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../App/Store/Store";
import { decrementQty, deleteProduct, incrementQty } from "../../../App/features/ProductSlice/productSlice";

interface IProps {}

const Cart = ({}: IProps) => {
  const cartSelector = useSelector((state: RootState) => state.Cart.cartItem);
  const total = cartSelector.reduce((amount, item) => amount + item.price * item.qty, 0);
  const dispatch = useDispatch();

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold text-center text-blue-700 mb-6">🛒 السلة</h2>
      
      <div className="space-y-4">
        {cartSelector.map((item) => (
          <div key={item.id} className="flex items-center justify-between bg-white shadow p-4 rounded-lg">
            <div className="flex items-center gap-4 w-full">
              <img
                src={item.thumbnail}
                alt="product"
                className="w-20 h-20 object-cover rounded-md"
              />
              <div className="flex-1">
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="text-gray-500">
                  السعر: <span className="text-blue-600 font-bold">${item.price}</span>
                </p>
                <p className="text-gray-500 flex items-center gap-2">
                  الكمية:
                  <button
                    onClick={() => dispatch(decrementQty(item.id))}
                    className="text-xl text-blue-600 px-2 hover:text-blue-800"
                  >
                    ➖
                  </button>
                  <span className="text-blue-600 font-bold">{item.qty}</span>
                  <button
                    onClick={() => dispatch(incrementQty(item.id))}
                    className="text-xl text-blue-600 px-2 hover:text-blue-800"
                  >
                    ➕
                  </button>
                </p>
              </div>
            </div>
            <button
              onClick={() => dispatch(deleteProduct(item.id))}
              className="text-red-500 hover:text-red-700 transition mt-2 md:mt-0"
            >
              🗑️ إزالة
            </button>
          </div>
        ))}
      </div>

      {/* المجموع الإجمالي */}
      <div className="mt-8 text-center">
        <p className="text-xl font-semibold text-gray-700">
          المجموع الكلي: <span className="text-blue-600">${Math.floor(total)}</span>
        </p>
        <button className="mt-4 px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded">
          إتمام الشراء
        </button>
      </div>
    </div>
  );
};

export default Cart;
