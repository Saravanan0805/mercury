import React from 'react'
import NaVBar from '../components/HomeNav'
import "../../src/styles.css"
import HeroCarousel from './HeroCarousel'
import { Background, Parallax } from 'react-parallax';
import { Footer } from '../components/HomeFooter';
import { HardSection } from '../components/landing-page/HardSection';
import { CakeSection } from '../components/landing-page/CakeSection';
import { DetailsSection } from '../components/landing-page/DetailsSection';
import { AboutSection } from '../components/landing-page/AboutSection';
import { ReservationSection } from '../components/landing-page/ReservationSection';

const Homepage = () => {

    // const background = {
    //     image: "/home/saravananravi/Downloads/polars.jpg",
    //     translateY: [0, 50],
    //     opacity: [1, 0.3],
    //     scale: [1.05, 1, "easeOutCubic"],
    //     shouldAlwaysCompleteAnimation: true,
    //   };

  return (
    <div className='homepage'>
    <div className="background-image"></div>
    <div className="content">
      <NaVBar />
      <HeroCarousel />
      <DetailsSection />
      <div className='h-[500px]'></div>
      <AboutSection />
      <ReservationSection/>
      <CakeSection />
      <HardSection />
      <Footer />
    </div>
  </div>
  );
}

export default Homepage
