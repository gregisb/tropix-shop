import React from 'react';
import Link from 'next/link';
import { urlFor } from '../lib/client';

const HeroBanner = ({ heroBanner }) => {
  return (
    <div className="hero-banner-container">
      <div>
        <p className="beats-solo">{heroBanner.smallText}</p>
        <h3>{heroBanner.midText}</h3>
        <h1 className="large-text">{heroBanner.largeText1}</h1>
        <img src={urlFor(heroBanner.image)} alt="hero-image" className="hero-banner-image"/>
      
        <div>
          <Link href={`product/fender-stratocaster-jimi-hendrix-signature`}>
            <button type="button">{heroBanner.buttonText}</button>
          </Link>
          <div className="desc">
            <h5>Fender Stratocaster</h5>
            <p>{heroBanner.desc}</p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default HeroBanner;