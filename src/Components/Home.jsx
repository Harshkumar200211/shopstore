// Home.jsx

import React, { useEffect, useRef } from 'react';
import '../assets/css/style.css';
import img2 from '../assets/images/summersell1.webp';
import img6 from '../assets/images/summersell2.jpg';
import img7 from '../assets/images/summersell3.jpg';
import img3 from '../assets/images/carousal1.webp';
import img4 from '../assets/images/carousal2.webp';
import img5 from '../assets/images/carousal3.webp';

const Home = () => {
  const carouselRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (carouselRef.current) {
        carouselRef.current.scrollLeft += carouselRef.current.clientWidth;
        if (carouselRef.current.scrollLeft >= carouselRef.current.scrollWidth - carouselRef.current.clientWidth) {
          carouselRef.current.scrollLeft = 0;
        }
      }
    }, 2000); // Adjust the interval as needed (in milliseconds)

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="home-container">
      <div className="carousel" ref={carouselRef}>
        <img src={img3} alt="Carousel" />
        <img src={img4} alt="Carousel" />
        <img src={img5} alt="Carousel" />
      </div>
      <div className="dummy-content">
        <h2>Welcome to Our Store</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sed ipsum ac velit consectetur tristique vel sed nisi.
        </p>
        <p>
          Sed sit amet diam sed libero tristique ullamcorper nec a orci. Proin nec dolor sit amet turpis ultricies hendrerit. Curabitur at sapien ac lectus eleifend convallis sed vel risus.
        </p>
        <p>
          In hac habitasse platea dictumst. Ut in tincidunt ex. Donec pretium nunc et tincidunt auctor. Nulla malesuada malesuada velit, ac laoreet risus fermentum nec. Aenean eleifend velit a massa fringilla, nec elementum orci suscipit.
        </p>
        <p>
          Phasellus ac gravida arcu. Integer eu sapien rutrum, posuere neque at, sodales metus. Quisque non odio id sapien scelerisque blandit ut eu magna.
        </p>
      </div>
      <div className="offers">
        <h3>Summer Sale!</h3>
        <div className="offer-images">
          <img src={img2} alt="Offer" />
          <img src={img6} alt="Offer" />
          <img src={img7} alt="Offer" />
        </div>
        <p>
          Don't miss out on our amazing summer deals! Visit our store today and enjoy discounts up to 50% off on selected items.
        </p>
      </div>
    </div>
  );
};

export default Home;
