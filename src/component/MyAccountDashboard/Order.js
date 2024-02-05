import React from 'react';
import BarChart from '../VendorDashboard/BarChart';
import LineChart from '../VendorDashboard/LineChart';
import { useSelector } from 'react-redux';

import { Link } from 'react-router-dom';
import pdf from '../../app/data/andshop-invoice.pdf';
// components.
import { RatingStar } from 'rating-star';

const DashBoard = () => {
  let products = useSelector(state => state.products.products);
  return (
    <>
      <div className='row'>
        <div className='col-lg-12 col-md-6 col-sm-6 col-12'>
          <div className=''>
            <h4>Orders</h4>
            {products.slice(1, 5).map((data, index) => (
              <>
                <div className='orders'>
                  <div className='order-img'>
                    <img src={data.img} alt='img' />
                  </div>
                  <div className='title pr-2'>
                    <p>{data.title}</p>
                    <div className='reviews_rating pr-2'>
                      <RatingStar maxScore={5} rating={4} id='rating-star-common-2' />
                      {/* <span>({product.rating.count} Customer Reviews)</span> */}
                    </div>
                  </div>

                  <div className='price '>
                    ${data.price}
                    <br></br>
                    <span className='badge badge-success'>Shipped</span>
                    <p className='text-muted mt-2 text-right'>on 28/09/2023</p>
                  </div>
                </div>
                {/* <div className='orders row mt-3'>
                  <div className='col-xs-3 col-lg-2'>
                    <img src={data.img} alt='img' />
                  </div>
                  <div className='col-xs-6 col-lg-8'>
                    <p>{data.title}</p>
                    <br></br>
                  </div>
                  <div className='col-xs-6 col-lg-3'>
                    ${data.price}
                    <br></br>
                    <span className='badge badge-success '>Shipped</span>
                    <p className='text-muted'>on 28/09/2023</p>
                  </div>
                </div> */}
              </>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default DashBoard;
