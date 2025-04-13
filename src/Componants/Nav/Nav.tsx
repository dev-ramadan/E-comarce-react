import { useSelector } from 'react-redux';
import { RootState } from '../../App/Store/Store';
import { NavLink } from 'react-router-dom'
import './Nav.css'
import { useState } from 'react';
interface IProps { }

const Nav = ({ }: IProps) => {
    const cart = useSelector(({ Cart }: RootState) => Cart.cartItem);
    const cartTotal = useSelector((state: RootState) => state.Cart.cartItem);
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
    const total = cartTotal.reduce((amount, item) => amount + item.price * item.qty, 0);

    return (
        <>
        <div className='fixed inset-0 z-50 h-fit'>
        <header className="py-4 shadow-md bg-white relative z-50">
                <div className="container mx-auto px-4">
                    <div className="flex items-center justify-between">
                        {/* Logo */}
                        <NavLink to="/">
                            <img src="img/logoo.png" alt="Logo" className="h-12" />
                        </NavLink>

                        {/* Desktop Menu */}
                        <nav className="hidden md:block ">
                            <ul className="flex space-x-6 font-medium text-gray-700 text-lg">
                                <li><NavLink to="/" className="hover:text-red-500">Home</NavLink></li>
                                <li><NavLink to="/product" className="hover:text-red-500">Shop</NavLink></li>
                                <li className="relative group">
                                    <span className="cursor-pointer hover:text-red-500">Pages</span>
                                    <ul className="absolute hidden group-hover:block bg-white shadow-md mt-2 rounded text-sm space-y-2 p-4 z-10">
                                        <li><a href="./about.html" className="block hover:text-red-500">About Us</a></li>
                                        <li><a href="./shop-details.html" className="block hover:text-red-500">Shop Details</a></li>
                                        <li><NavLink to="/cart" className="block hover:text-red-500">Shopping Cart</NavLink></li>
                                        <li><a href="./checkout.html" className="block hover:text-red-500">Check Out</a></li>
                                        <li><a href="./blog-details.html" className="block hover:text-red-500">Blog Details</a></li>
                                    </ul>
                                </li>
                                <li><a href="./blog.html" className="hover:text-red-500">Blog</a></li>
                                <li><a href="./contact.html" className="hover:text-red-500">Contacts</a></li>
                            </ul>
                        </nav>

                        {/* Right Section */}
                        <div className="flex items-center space-x-4">
                            <a href="#"><img src="img/icon/heart.png" alt="Heart" className="h-5" /></a>
                            <NavLink to="/cart" className="relative">
                                <img src="img/icon/cart.png" alt="Cart" className="h-5" />
                                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">{cart.length}</span>
                            </NavLink>
                            <div className="text-sm font-semibold">${Math.floor(total)}</div>

                            {/* Hamburger button */}
                            <button
                                className="md:hidden text-2xl"
                                onClick={() => setMobileMenuOpen(true)}
                            >
                                <i className="fa fa-bars"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </header>
        </div>

            {/* Mobile Sidebar Menu */}
            <div
                className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 z-50 ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
                    }`}
            >
                <div className="flex justify-between items-center px-4 py-4 border-b">
                    <h2 className="text-lg font-bold">Menu</h2>
                    <button onClick={() => setMobileMenuOpen(false)} className="text-xl">
                        &times;
                    </button>
                </div>
                <ul className="flex flex-col p-4 space-y-4 text-gray-700 text-base font-medium">
                    <li><NavLink to="/" onClick={() => setMobileMenuOpen(false)}>Home</NavLink></li>
                    <li><NavLink to="/product" onClick={() => setMobileMenuOpen(false)}>Shop</NavLink></li>
                    <li><a href="./about.html">About Us</a></li>
                    <li><a href="./shop-details.html">Shop Details</a></li>
                    <li><NavLink to="/cart" onClick={() => setMobileMenuOpen(false)}>Shopping Cart</NavLink></li>
                    <li><a href="./checkout.html">Check Out</a></li>
                    <li><a href="./blog-details.html">Blog Details</a></li>
                    <li><a href="./blog.html">Blog</a></li>
                    <li><a href="./contact.html">Contacts</a></li>
                </ul>
            </div>

            {/* Overlay when menu is open */}
            {isMobileMenuOpen && (
                <div
                    onClick={() => setMobileMenuOpen(false)}
                    className="fixed inset-0 bg-black bg-opacity-50 z-40"
                ></div>
            )}
        </>
    )
}
export default Nav



















// import { useState } from 'react';
// import { NavLink } from 'react-router-dom';
// import { useSelector } from 'react-redux';
// import { RootState } from '../../App/Store/Store';

// // استيراد الأيقونات من Font Awesome
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faHome, faBox, faShoppingCart, faEnvelope, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

// const Nav = () => {
//   const cart = useSelector(({ Cart }: RootState) => Cart.cartItem);
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   return (
//     <>
//       <nav classNameName="bg-white shadow-md px-6 py-4 flex items-center justify-between md:px-12 md:py-6 transition-all duration-300">
//         {/* Logo */}
//         <div classNameName="text-2xl font-extrabold text-blue-600">
//           متجري
//         </div>

//         {/* For larger screens */}
//         <ul classNameName="hidden md:flex gap-8 text-gray-800 font-medium">
//           <li classNameName="hover:text-blue-500 transition-all duration-300 ease-in-out transform hover:scale-105 cursor-pointer">
//             <NavLink to={'/'} classNameName="flex items-center gap-2">
//               <FontAwesomeIcon icon={faHome} /> <span>الرئيسية</span>
//             </NavLink>
//           </li>
//           <li classNameName="hover:text-blue-500 transition-all duration-300 ease-in-out transform hover:scale-105 cursor-pointer">
//             <NavLink to={'/product'} classNameName="flex items-center gap-2">
//               <FontAwesomeIcon icon={faBox} /> <span>المنتجات</span>
//             </NavLink>
//           </li>
//           <li classNameName="hover:text-blue-500 transition-all duration-300 ease-in-out transform hover:scale-105 cursor-pointer">
//             <NavLink to={'/cart'} classNameName="flex items-center gap-2">
//               <FontAwesomeIcon icon={faShoppingCart} /> <span>{cart.length} السلة</span>
//             </NavLink>
//           </li>
//           <li classNameName="hover:text-blue-500 transition-all duration-300 ease-in-out transform hover:scale-105 cursor-pointer">
//             <NavLink to={'/test'} classNameName="flex items-center gap-2">
//               <FontAwesomeIcon icon={faEnvelope} /> <span>تواصل معنا</span>
//             </NavLink>
//           </li>
//         </ul>

//         {/* For smaller screens */}
//         <div classNameName="md:hidden">
//           <button
//             onClick={toggleMenu}
//             classNameName="text-gray-700 text-2xl focus:outline-none"
//           >
//             <FontAwesomeIcon icon={faBars} />
//           </button>
//         </div>
//       </nav>

//       {/* Mobile Menu */}
//       {isMenuOpen && (
//         <div classNameName="bg-white shadow-lg px-6 py-4 fixed right-0 top-0 bottom-0 w-64 flex flex-col justify-start z-50 transition-all duration-500 ease-in-out transform">
//           <div classNameName="flex justify-end">
//             <button onClick={toggleMenu} classNameName="text-gray-700 text-2xl">
//               <FontAwesomeIcon icon={faTimes} />
//             </button>
//           </div>
//           <ul classNameName="flex flex-col gap-6 text-gray-800 font-medium">
//             <li classNameName="hover:text-blue-500 transition-all duration-300 ease-in-out transform hover:scale-105 cursor-pointer">
//               <NavLink to={'/'} classNameName="flex items-center gap-2">
//                 <FontAwesomeIcon icon={faHome} /> <span>الرئيسية</span>
//               </NavLink>
//             </li>
//             <li classNameName="hover:text-blue-500 transition-all duration-300 ease-in-out transform hover:scale-105 cursor-pointer">
//               <NavLink to={'/product'} classNameName="flex items-center gap-2">
//                 <FontAwesomeIcon icon={faBox} /> <span>المنتجات</span>
//               </NavLink>
//             </li>
//             <li classNameName="hover:text-blue-500 transition-all duration-300 ease-in-out transform hover:scale-105 cursor-pointer">
//               <NavLink to={'/cart'} classNameName="flex items-center gap-2">
//                 <FontAwesomeIcon icon={faShoppingCart} /> <span>{cart.length} السلة</span>
//               </NavLink>
//             </li>
//             <li classNameName="hover:text-blue-500 transition-all duration-300 ease-in-out transform hover:scale-105 cursor-pointer">
//               <NavLink to={'/contact'} classNameName="flex items-center gap-2">
//                 <FontAwesomeIcon icon={faEnvelope} /> <span>تواصل معنا</span>
//               </NavLink>
//             </li>
//           </ul>
//         </div>
//       )}
//     </>
//   );
// };

// export default Nav;
