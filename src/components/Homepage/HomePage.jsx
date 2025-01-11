import React from 'react';
import './HomePage.css';
import Banner from './ui/Banner';

const HomePage = () => {
  return (
    <div className='banner_container'>
        <Banner  desc={`Leverage AI-powered solutions to create, refine, and scale with unmatched precision and adaptability.`} text={'Design, Optimize, and Scale with AI-Driven Precision'} imageUrl={'https://uvers.ac.id/wp-content/uploads/2024/01/ART-Sobat-UVERS-Dewasa-compress-1024x568.webp'}/>
    </div>
  )
}

export default HomePage;
