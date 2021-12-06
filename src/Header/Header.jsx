/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../resources/Dhanam_logo.png'


const Header = () => {
    return (
        <nav className="fixed w-full z-50 bg-gray-700 text-white  ">
            <div className="flex items-center px-2 justify-between p-4">
                <div className="">
                    <Link to='/'><img className=" pl-8 md:pl-10 h-12" src={Logo} alt="" /></Link>
                </div>
                <div className=" ">
                    <ul className="hidden lg:block">
                        <li><Link to='/' className=" px-12 py-3 lg:mr-8 bg-green-400 text-gray-800 rounded-full hover:text-white hover:bg-gray-600 transition duration-300">HOME</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Header;