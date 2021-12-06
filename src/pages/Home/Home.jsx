import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../Header/Header';

const Home = () => {
    return (
        <>
            <Header></Header>
            <div className=" mx-auto pt-20 bg-green-50 h-screen">
                <div className="bg-gray-50 container shadow-xl rounded-3xl pb-28 mt-20 w-11/12 mx-auto">
                    <h1 className="text-3xl lg:text-5xl font-bold pt-20 text-green-400">Holiday Checker</h1>
                    <h2 className="text-2xl pt-32 font-bold text-gray-700">Tap on a country to start:</h2>
                    <div className="pt-10 grid grid-cols-1 lg:grid-cols-3 gap-10 w-5/6 mx-auto">
                        <div>
                            <Link to="/england">
                                <h2 className=" py-10 rounded-lg text-green-400 text-2xl font-bold bg-gray-700 hover:bg-green-400 hover:text-gray-800 transition duration-300">England & Wales</h2>
                            </Link>
                        </div>
                        <div>
                            <Link to="/scotland">
                                <h2 className=" py-10 rounded-lg text-green-400 text-2xl font-bold bg-gray-700 hover:bg-green-400 hover:text-gray-800 transition duration-300">Scotland</h2>
                            </Link>
                        </div>
                        <div>
                            <Link to="/Ireland">
                                <h2 className=" py-10 rounded-lg text-green-400 text-2xl font-bold bg-gray-700 hover:bg-green-400 hover:text-gray-800 transition duration-300">Northern Ireland</h2>
                            </Link>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
};

export default Home;