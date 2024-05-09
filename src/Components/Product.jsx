import React, { useState } from 'react';
import '../assets/css/style.css'; 
import img1 from '../assets/images/watch1.webp';
import img2 from '../assets/images/watch2.webp';
import img3 from '../assets/images/watch3.webp';
import img4 from '../assets/images/watch4.webp';
import img5 from '../assets/images/watch5.webp';
import img6 from '../assets/images/watch6.webp';
import img7 from '../assets/images/mobile1.webp';
import img8 from '../assets/images/mobile2.webp';
import img9 from '../assets/images/mobile3.webp';
import img10 from '../assets/images/mobile4.webp';
import img11 from '../assets/images/mobile5.webp';
import img12 from '../assets/images/mobile6.webp';
import img13 from '../assets/images/ear1.webp';
import img14 from '../assets/images/ear2.webp';
import img15 from '../assets/images/ear3.webp';
import img16 from '../assets/images/ear4.webp';
import img17 from '../assets/images/ear5.webp';
import img18 from '../assets/images/ear6.webp';

function Product({ addToCart }) {
  const [watchProducts] = useState([
    { id: 1, product_img: img1, title: 'Analog Watch', description: 'Resistance Luminous',price:579},
    { id: 2, product_img: img2, title: 'leather strap Analog Watch', description: 'unique charm chronograph',price:325 },
    { id: 3, product_img: img3, title: 'Men SK-PG-4030-BLK-SLVR', description: 'Men with Day and Date Display',price:399 },
    { id: 4, product_img: img4, title: 'Analog Watch ', description: 'For boys AS000015G',price:599 },
    { id: 5, product_img: img5, title: 'Band Analog Watch ', description: 'for boys AS00PO2',price:300 },
    { id: 6, product_img: img6, title: 'Analog Watch', description: 'For Men TH1710474W',price:400 },
  ]);
  const [phoneProducts] = useState([
    { id: 1, product_img: img7, title: 'Motorola G34 5G', description: 'Ocean Green, 128 GB,8 GB RAM',price:12000},
    { id: 2, product_img: img8, title: 'MOTOROLA G04', description: 'Sea Green, 64 GB',price:9000},
    { id: 3, product_img: img9, title: 'MOTOROLA G04', description: 'Green,64 GB',price:9500},
    { id: 4, product_img: img10, title: 'vivo T2 5G ', description: 'Black Wave, 128 GB',price:15999},
    { id: 5, product_img: img11, title: 'vivo T2 5G', description: 'Skyblue 128 GB',price:15999},
    { id: 6, product_img: img12, title: 'vivo T2 5G', description: 'Light Green 128 GB',price:14499},
  ]);
  const [earProducts] = useState([
    { id: 1, product_img: img13, title: 'Noise Buds VS102', description: 'Midnight Black, True Wireless',price:799},
    { id: 2, product_img: img14, title: 'Noise Buds VS102', description: 'Celeste Blue, True Wireless',price:899 },
    { id: 3, product_img: img15, title: 'Noise Buds VS102', description: 'Celeste Blue, True Wireless',price:750 },
    { id: 4, product_img: img16, title: 'realme Buds Wireless', description: '30dB ANC, 360 degree Spatial',price:1599 },
    { id: 5, product_img: img17, title: 'realme Buds Wireless', description: '30dB ANC, 360 degree Spatial',price:1599 },
    { id: 6, product_img: img18, title: 'Boult YCharge with Pro+', description: 'BoomX Tec, Made In India',price:697 },
  ]);

  return (
    <>
      <h2 className='text-blue-500 mt-10 text-4xl text-center'>Watches for men's</h2>
      <div className="flex flex-col items-center justify-center h-auto">
        <ul className="grid grid-cols-1 gap-4 mt-14 mx-4 sm:mx-20 sm:grid-cols-2 md:mx-32 md:grid-cols-3">
          {watchProducts.map((item) => (
            <li key={item.id}>
              <div className="flex flex-col items-center justify-center shadow">
                <img src={item.product_img} className="rounded-lg w-60 h-68 m-4" alt={item.title} />
                <p className="text-center mt-2 font-semibold text-red-700">{item.title}</p>
                <p className="text-center">{item.description}</p>
                <h3 className='text-center'>Rs. {item.price}</h3>
                <button onClick={() => addToCart(item)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full m-4">
                  Add to cart
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <h2 className='text-blue-500 mt-10 text-4xl text-center'>Smartphones</h2>
      <div className="flex flex-col items-center justify-center h-auto">
        <ul className="grid grid-cols-1 gap-4 mt-14 mx-4 sm:mx-20 sm:grid-cols-2 md:mx-32 md:grid-cols-3">
          {phoneProducts.map((item) => (
            <li key={item.id}>
              <div className="flex flex-col items-center justify-center shadow">
                <img src={item.product_img} className="rounded-lg w-60 h-62 m-4" alt={item.title} />
                <p className="text-center mt-2 font-semibold text-red-700">{item.title}</p>
                <p className="text-center">{item.description}</p>
                <h3 className='text-center'>Rs. {item.price}</h3>
                <button onClick={() => addToCart(item)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full m-4">
                  Add to cart
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <h2 className='text-blue-500 mt-10 text-4xl text-center'>Earphones</h2>
      <div className="flex flex-col items-center justify-center h-auto">
        <ul className="grid grid-cols-1 gap-4 mt-14 mx-4 sm:mx-20 sm:grid-cols-2 md:mx-32 md:grid-cols-3">
          {earProducts.map((item) => (
            <li key={item.id}>
              <div className="flex flex-col items-center justify-center shadow">
                <img src={item.product_img} className="rounded-lg w-60 h-62 m-4" alt={item.title} />
                <p className="text-center mt-2 font-semibold text-red-700">{item.title}</p>
                <p className="text-center">{item.description}</p>
                <h3 className='text-center'>Rs. {item.price}</h3>
                <button onClick={() => addToCart(item)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full m-4">
                  Add to cart
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Product;
