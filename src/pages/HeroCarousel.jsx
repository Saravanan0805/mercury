import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

// const responsiveSettings = [
//     {
//         breakpoint: 800,
//         settings: {
//             slidesToShow: 3,
//             slidesToScroll: 3
//         }
//     },
//     {
//         breakpoint: 500,
//         settings: {
//             slidesToShow: 2,
//             slidesToScroll: 2
//         }
//     }
// ];


const HeroCarousel = () => {
    const images = [
        "https://assets-global.website-files.com/64542138e0be122910058cd2/6605d5636a6545443f031e78_GG-Chicago-01.jpg",
        "https://assets-global.website-files.com/64542138e0be122910058cd2/6605d562ca3fa473c31d037e_GG-Chicago-02.webp",
        "https://assets-global.website-files.com/64542138e0be122910058cd2/6605d5630fd6e75959d729ed_GG-Chicago-03.webp",
    ];

    return (
        <Slide duration={5000} autoplay={true} arrows={false}>
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${images[0]})` }}>
                    {/* <span>Slide 1</span> */}
                </div>
            </div>
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${images[1]})` }}>
                    {/* <span>Slide 2</span> */}
                </div>
            </div>
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${images[2]})` }}>
                    {/* <span>Slide 3</span> */}
                </div>
            </div>
        </Slide>
    );
};

export default HeroCarousel;