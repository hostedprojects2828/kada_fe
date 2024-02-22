import React from 'react';
// Data.
import { ReviewData } from '../../../app/data/productsData';

const ProductInfo = () => {
  return (
    <>
      <div className='row'>
        <div className='col-lg-12'>
          <div className='product_reviews'>
            <ul>
              {ReviewData.map((data, index) => (
                <li className='media' key={index}>
                  <div className='media-body'>
                    <div className='media-pragraph'>
                      <div className='product_review_strat'>
                        {[...Array(5).keys()].map((star, index) => (
                          <span>
                            <a href='#!' key={index}>
                              <i className={`fa fa-star ${data.rating >= index + 1 ? 'active-star' : 'non-active'} `}></i>
                            </a>
                          </span>
                        ))}
                      </div>
                      <p className='descriptioin mobile-title'>{data.description}</p>
                    </div>

                    <div className='media-header mt-2'>
                      <div className='media-name d-flex'>
                        <div className="profile mr-3">
                          <img src="https://picsum.photos/50" alt="profile-avatar" className='rounded-circle' />
                        </div>
                        <div className="reviewer">
                          <p className='mobile-title'>{data.submitedBy + 5555}</p>
                          <p className='mobile-title'>{data.date}</p>
                        </div>
                      </div>
                      <div className='post-share'>
                        <a href='#!' className='mobile-title'>
                          Report
                        </a>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductInfo;
