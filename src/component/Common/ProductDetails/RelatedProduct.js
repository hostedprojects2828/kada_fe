import React from 'react';
import ProductCard from '../Product/ProductCard';
import { useSelector } from 'react-redux';
import Slider from 'react-slick';
import Heading from '../../Fashion/Heading';

const RelatedProduct = () => {
  let products = useSelector((state) => state.products.products);
  let settings = {
     autoplay : true,
    dots: true,
    margin: 30,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };
  return (
    <>
      <section id='to_days_area' className='ptb-100 slider_arrows_one'>
        <div className='container'>
          <Heading heading='You Might Also Like'  />
          <div className='row'>
            <div className='col-lg-12'>
              <div className='todays_slider'>
                <Slider {...settings}>
                  {products.slice(6, 13).map((data, index) => (
                    <ProductCard data={data} key={index} />
                  ))}
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default RelatedProduct;
