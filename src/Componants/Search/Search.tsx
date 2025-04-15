import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../App/Store/Store";
import {
  setSearchTerm,
  serchState,
  clearSearch,
} from "../../App/features/SerchSlice/SerchSlice";

const Search = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { searchTerm, results, status, error } = useSelector(
    (state: RootState) => state.Search
  );

  // عند تغيير قيمة البحث
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    dispatch(setSearchTerm(value));
  
    if (value.trim()) {
      dispatch(serchState(value));
    } else {
      dispatch(clearSearch());
    }
  };
  

  return (
    <div className="p-4">
      {/* input */}
      <div className="pt-20 px-4 flex justify-center">
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearch}
          placeholder="ابحث عن منتج..."
          className="w-full max-w-md px-4 py-2 rounded-2xl border border-gray-300 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-right"
        />
      </div>

      {/* الحالة */}
      {status === "loading" && <p className="text-center mt-4">جاري التحميل...</p>}
      {status === "failed" && (
        <p className="text-center text-red-600 mt-4">{error}</p>
      )}

      {/* النتائج */}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4 w-full mx-auto max-w-4xl">
        {status === "succeeded" &&
          results.map((product) => (
            <div
              key={product.id}
              className="p-4 bg-indigo-100 shadow rounded-xl flex items-center justify-between"
            >
              <div>
                <h2 className="font-bold text-lg mb-2">{product.title}</h2>
                <p className="text-sm text-gray-700">{product.desc}</p>
              </div>
              <img
                className="w-20 h-20 object-cover rounded-full"
                src={product.thumbnail}
                alt={product.title}
              />
            </div>
          ))}
      </div>
    </div>
  );
};

export default Search;
