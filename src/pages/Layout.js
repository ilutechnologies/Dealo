import React from "react";
import Navbar from "../components/Navbar";


const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-1 container mx-auto p-6">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white text-center py-4 mt-6">
        <p>&copy; {new Date().getFullYear()} Dealo Group LTD. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default Layout;
