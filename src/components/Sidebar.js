import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const Sidebar = ({ isOpen, onClose }) => {
  return (
    <>
      {isOpen && <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={onClose}></div>}
      <div className={`fixed top-0 right-0 w-64 h-full bg-gray-800 bg-opacity-90 backdrop-filter backdrop-blur-lg shadow-lg transition-transform duration-300 transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} z-50`}>
        <div className="p-4">
          <button onClick={onClose} className="text-white font-bold mb-4">
            <FontAwesomeIcon icon={faTimes} />
          </button>
          <ul className="text-white">
            <li className="mb-2">
              <Link to="/trading-solutions" className="hover:text-cyan-400 transition">Trading Solutions</Link>
            </li>
            <li className="mb-2">
              <Link to="/freight-forwarding-solutions" className="hover:text-cyan-400 transition">Freight Forwarding Solutions</Link>
            </li>
            <li className="mb-2">
              <Link to="/clearance-solutions" className="hover:text-cyan-400 transition">Clearance Solutions</Link>
            </li>
            <li className="mb-2">
              <Link to="/cargo-insurance-solutions" className="hover:text-cyan-400 transition">Cargo Insurance Solutions</Link>
            </li>
            <li className="mb-2">
              <Link to="/racing-solutions" className="hover:text-cyan-400 transition">Racing Solutions</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Sidebar;