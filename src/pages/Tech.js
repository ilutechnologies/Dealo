import React from "react";
import Hero from '../components/Hero';
import Layout from './Layout';


const Tech = () => {
  return (
    <Layout>
        <div className="flex flex-col items-center text-center py-12 bg-white">
        <h2 className="text-2xl font-semibold mb-6">Our latest projects</h2>
        <div className="relative w-full">
            <Hero />
        </div>
        </div>
    </Layout>

  );
}

export default Tech;