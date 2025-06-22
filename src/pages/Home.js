import React from 'react';
import Hero from '../components/Hero';
import WhatsappContact from '../components/WhatsappContact';
import Layout from './Layout';

const Home = () => (
    <Layout
      title="Connecting Business, Delivering Excellence" 
      description="Comprehensive trading solutions for global commerce"
      keywords="trading, global commerce, import, export"
    >
      <Hero />
      <WhatsappContact />
    </Layout>
);

export default Home;
