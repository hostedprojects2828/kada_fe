import React from 'react'
import { useSelector } from "react-redux";
import ProductCard from '../../Common/Product/ProductCard';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
// import Heading from '../Heading';

const TodayDeal = () => {
  let products = useSelector((state) => state.products.products);
  let settings = {
    arrows: false,
    // variableWidth: true,
    dots: true,
    margin: 30,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [{
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        variableWidth: true,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        variableWidth: true,
      }
    },
    ]
  };
  return (
    <>
      <section id="to_days_area" className="ptb-100 slider_arrows_one">
        <div className="container">
          {/* <Heading heading="Our Best Seller" para="See What Everyone Is Shopping from Andshop E-Commerce Today" /> */}
          <div className="best-seller d-flex justify-content-between align-items-center mb-5">
            <h2 className="heading">OUR BEST SELLER</h2>
            {/* <div className='pointer '> */}
              <button className='view-all'>View All</button>
            {/* </div> */}
          </div>

          <div className="row">
            <div className="col-lg-12">
              <div className="todays_slider">
                <Slider {...settings}>
                  {products.slice(6, 13).map((data, index) => (
                    <ProductCard data={data} key={index} style={{ width: "16rem" }} />
                  ))}
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default TodayDeal
