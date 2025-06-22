import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import Navbar from "../components/Navbar";
import Preloader from "../components/Preloader";

const Layout = ({ children, title, description, keywords }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Wait for all content (images, scripts, styles) to be fully loaded
    const handleLoad = () => setIsLoading(false);

    if (document.readyState === "complete") {
      setIsLoading(false); // If already loaded, remove preloader
    } else {
      window.addEventListener("load", handleLoad);
    }

    return () => window.removeEventListener("load", handleLoad);
  }, []);

  return (
    <div className="min-h-screen flex flex-col relative">
      <Helmet>
        <title>{title ? `${title} | Dealo` : "Dealo"}</title>
        <meta name="description" content={description || "Connecting Business, Delivering Excellence"} />
        {keywords && <meta name="keywords" content={keywords} />}
      </Helmet>

      {/* Preloader - Only disappears when everything is loaded */}
      {isLoading && <Preloader />}

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
