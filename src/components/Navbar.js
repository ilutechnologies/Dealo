import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import logo from '../assets/images/dealo-logo.png';

const Navbar = () => {
    const [isSolutionsExpanded, setIsSolutionsExpanded] = useState(false);

    const handleSolutionsClick = () => {
        setIsSolutionsExpanded(!isSolutionsExpanded);
    };

    return (
        <nav className="navbar py-4 fixed w-full z-50 bg-white bg-opacity-10 backdrop-filter backdrop-blur-xlg transition-all duration-300">
            <div className="container mx-auto flex justify-between items-center px-4 py-2">
            
                <div className="text-gray text-2xl font-bold">
                    <img src={logo} alt="Dealo.io Logo" className="h-8" />
                </div>

                <div className="hidden md:flex text-gray font-bold gap-6 justify-center flex-grow">
                    <Link to="/" className="hover:text-cyan-400 transition">
                    Home
                    </Link>
                    <div className="relative">
                        <button onClick={handleSolutionsClick} className="hover:text-cyan-400 transition">
                            Solutions
                        </button>
                        {isSolutionsExpanded && (
                            <div className="absolute left-0 mt-2 w-48 bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-lg shadow-lg transition-all duration-300">
                                <Link to="/trading-solutions" className="block px-4 py-2 hover:bg-cyan-400 transition">Trading Solutions</Link>
                                <Link to="/freight-forwarding-solutions" className="block px-4 py-2 hover:bg-cyan-400 transition">Freight Forwarding Solutions</Link>
                                <Link to="/clearance-solutions" className="block px-4 py-2 hover:bg-cyan-400 transition">Clearance Solutions</Link>
                                <Link to="/cargo-insurance-solutions" className="block px-4 py-2 hover:bg-cyan-400 transition">Cargo Insurance Solutions</Link>
                                <Link to="/racing-solutions" className="block px-4 py-2 hover:bg-cyan-400 transition">Racing Solutions</Link>
                            </div>
                        )}
                    </div>
                    <Link to="/dealo-tech" className="hover:text-cyan-400 transition">
                    Dealo Tech
                    </Link>
                    <Link to="/partnerships" className="hover:text-cyan-400 transition">
                    Partnerships
                    </Link>
                </div>

                <div className="flex items-center">
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Search..."
                            className="px-4 py-1 pl-10 text-sm focus:outline-none focus:ring-2 focus:ring-gold bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg placeholder-gray"
                        />
                        <FontAwesomeIcon icon={faSearch} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray" />
                    </div>
                </div>

            </div>      
        </nav>
    );
};

export default Navbar;