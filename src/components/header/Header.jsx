import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import logo from '../../assets/img/logo.jpg';
import cart1 from '../../assets/img/cart1.png';
import icon2 from '../../assets/img/bg2.jpg';
import './Header.css';

const Header = () => {
  const [mode, setMode] = useState(false);
  const cartItems = useSelector((state) => state.books.cart);
  const userInfo = useSelector((state) => state.books.userInfo);
//   console.log(mode)

  return (
    <div className="w-full border-b-[1px] border-gray-800 bg-white sticky top-0 z-50">
      <div className="max-w-screen-xl h-full flex items-center justify-between py-4">
        <div>
          <Link to={'/'}>
            <div>
              <img className="w-20 rounded-full ml-1" src={logo} alt="NavLogo" />
            </div>
          </Link>
        </div>
        <div className="flex items-center gap-8">
          <ul className=" items-center gap-8 hidden lg:flex">
            {/* Navigation links for larger screens */}
            <Link
              to={'/'}
              className="text-base text-black font-bold hover:text-orange-700 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-200"
            >
              Home
            </Link>
            <Link to="/cart">
              <div className="relative">
                <img className="w-9" src={cart1} alt="cartImage" />
                <span className="absolute w-6 top-[0px] left-2 text-sm flex justify-center items-center font-semibold">
                  {cartItems.length}
                </span>
              </div>
            </Link>
            <Link to="/login">
              <img className="w-10 h-10 rounded-full mr-2" src={userInfo ? userInfo.image : icon2} alt="logo" />
            </Link>
            {userInfo && (
              <p className="text-xl text-black font-normal hover:text-orange-700 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-200">
                {userInfo.name}
              </p>
            )}
          </ul>
          <Link to={'/'} onClick={() => setMode(!mode)} className="lg:hidden mr-1">
            {mode ? <CloseIcon /> : <MenuIcon />}
          </Link>
        </div>
      </div>

      {mode && (
        <div className="lg:hidden">
          <ul className="flex flex-col items-center gap-4">
            <Link
              to={'/'}
              className="text-base text-black font-bold hover:text-orange-700 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-200"
            >
              Home
            </Link>
            <Link to="/cart">
              <div className="relative">
                <img className="w-9" src={cart1} alt="cartImage" />
                <span className="absolute w-6 top-[0px] left-2 text-sm flex justify-center items-center font-semibold">
                  {cartItems.length}
                </span>
              </div>
            </Link>
            <Link to="/login">
              <img className="w-10 h-10 rounded-full mr-2" src={userInfo ? userInfo.image : icon2} alt="logo" />
            </Link>
            {userInfo && (
              <p className="text-xl text-black font-normal hover:text-orange-700 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-200">
                {userInfo.name}
              </p>
            )}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Header;
