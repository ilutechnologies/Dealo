import React from 'react';
import Image from '../../assets/images/Trading-Solutions.jpg'

const Freight = () => {
  return (
    <div className="flex flex-col items-center py-12 bg-white">
      <h1 className="text-2xl font-semibold mb-6 text-left">Freight Forwarding Solutions</h1>
      <h2 className="text-left text-xl font-semibold mb-6">Your one-stop freight forward solutions company!</h2>
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
            We handle all types of shipping contracts (Incoterms) and take care of your customs clearance with ease. 
            With Smart Freight, our online platform, you can instantly compare, book, and track freight quotes, as well 
            as manage your shipments and transactions effortlessly. Need temperature-controlled or door-to-door services? 
            Whatever your shipping needs, we’ve got you covered—every step of the way.
            For cost-effective overseas shipping, Full Container Load (FCL) and Less than Container Load (LCL) shipments 
            are ideal for larger, bulkier, or less urgent consignments. Many of our clients choose ocean freight for its 
            significant cost savings compared to air freight, while still benefiting from reliable transit times.
            </p>
            <h3 className="text-left text-xl font-semibold mt-6">Air Freight</h3>
            <p className="text-left text-sm font-semibold mt-2 text-gray-600 max-w-2xl">
            We offer international air freight services designed for time-sensitive shipments. With global coverage 
            through multiple freight networks, we partner with top airline carriers and consolidators to ensure fast, 
            reliable delivery. Whether it’s a single package or a multi-pallet consignment, we provide tailored, 
            cost-effective solutions for both exports and imports.
            Choose from our Door to Airport or Door to Door services, and trust us to handle your air freight with 
            the speed and care your business needs!
            </p>
            <h3 className="text-left text-xl font-semibold mt-6">Land Freight</h3>
            <p className="text-left text-sm font-semibold mt-2 text-gray-600 max-w-2xl">
            A steadfast fleet of trucks and trailers, offering part or full load services across the United Arab 
            Emirates and Sri Lanka. With just one call, our team springs into action, ensuring a safe, efficient 
            A-to-B transport service. Every step of the process is managed under strict, meticulous supervision, 
            guaranteeing timely and secure deliveries.
            </p>
        </div>
    </div>

  );
};

export default Freight;
