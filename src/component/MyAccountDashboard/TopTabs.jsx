import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
const TopTab = () => {
  let products = useSelector(state => state.products.products);
  return (
    <>
      <div className='row'>
        <div className='col-lg-4 col-md-4 col-sm-6 col-12'>
          <div className='vendor_top_box'>
            <h2>25</h2>
            <h4>Total Products</h4>
          </div>
        </div>
        <div className='col-lg-4 col-md-4 col-sm-6 col-12'>
          <div className='vendor_top_box'>
            <h2>2552</h2>
            <h4>Total Sales</h4>
          </div>
        </div>
        <div className='col-lg-4 col-md-4 col-sm-6 col-12'>
          <div className='vendor_top_box'>
            <h2>50</h2>
            <h4>Order Pending</h4>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopTab;
