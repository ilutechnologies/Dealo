import React, { useEffect, useState } from "react";
import Image from "../../assets/images/Freightforwardingsolutions.jpg";
import Layout from "../Layout";

const Freight = () => {
  const [iframeLoaded, setIframeLoaded] = useState(false);
  const [preloaded, setPreloaded] = useState(false);

  useEffect(() => {
    // Prefetch the iframe in the background
    const preloadIframe = document.createElement("iframe");
    preloadIframe.src = "http://173.212.195.167:8080/freight-request-form";
    preloadIframe.style.display = "none";

    preloadIframe.onload = () => {
      setPreloaded(true); // Mark preloading as complete
      setTimeout(() => setIframeLoaded(true), 500); // Small delay before showing
    };

    document.body.appendChild(preloadIframe);

    return () => {
      document.body.removeChild(preloadIframe);
    };
  }, []);

  return (
    <Layout>
      <div className="flex flex-col items-center py-12 bg-white">
        <h1 className="text-2xl font-semibold mb-6 text-left">
          Freight Forwarding Solutions
        </h1>
        <h2 className="text-left text-xl font-semibold mb-6">
          Your one-stop freight forward solutions company!
        </h2>
        <div className="relative w-full">
          <img
            src={Image}
            alt="Trading Solutions Map"
            className="w-full rounded-lg shadow-lg"
          />
        </div>

        <div className="flex flex-col py-12 bg-white">
          <h3 className="text-left text-xl font-semibold">Sea Freight</h3>
          <p className="text-left text-sm font-semibold mt-2 text-gray-600 max-w-2xl">
            We handle all types of shipping contracts (Incoterms) and take care
            of your customs clearance with ease. With Smart Freight, our online
            platform, you can instantly compare, book, and track freight
            quotes, as well as manage your shipments and transactions
            effortlessly...
          </p>

          <h3 className="text-left text-xl font-semibold mt-6">Air Freight</h3>
          <p className="text-left text-sm font-semibold mt-2 text-gray-600 max-w-2xl">
            We offer international air freight services designed for
            time-sensitive shipments...
          </p>

          <h3 className="text-left text-xl font-semibold mt-6">Land Freight</h3>
          <p className="text-left text-sm font-semibold mt-2 text-gray-600 max-w-2xl">
            A steadfast fleet of trucks and trailers, offering part or full load
            services...
          </p>

          <div className="flex flex-col py-12 bg-white">
            {iframeLoaded ? (
              <iframe
                id="freight-form"
                src="http://173.212.195.167:8080/freight-request-form"
                style={{
                  border: "none",
                  width: "100%",
                  height: "500px",
                  overflow: "hidden",
                }}
                title="Freight Request Form"
              ></iframe>
            ) : (
              <p className="text-center text-gray-500">Loading form...</p>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Freight;