import React from 'react';
import Banner from '../component/Fashion/Banner';
import BannerBottom from '../component/Fashion/BannerBottom';
import HotProduct from '../component/Fashion/HotProduct';
import Trending from '../component/Fashion/Trending';
import TodayDeal from '../component/Fashion/TodayDeal';
import OfferTime from '../component/Fashion/OfferTime';
import TypesOfProduct from '../component/Fashion/ProductsSliding';
// import Blog from '../component/Fashion/Blog';
// import InstgramSlider from '../component/Common/Instagram';
import bestQualityImg from '../assets/img/common/best_quality_shap.png'
import Footer from '../component/Common/Footer';
import Header from '../component/Common/Header';

const Fashion = () => {
  return (
    <>
      <Header />
      <Banner />
      <img className='d-none d-md-block qualityImg' src={bestQualityImg} alt='img' />
      <TypesOfProduct />
      <BannerBottom />
      <HotProduct />
      <OfferTime />
      <TodayDeal />
      <Trending />
      <Footer />
    </>
  );
};

export default Fashion;
