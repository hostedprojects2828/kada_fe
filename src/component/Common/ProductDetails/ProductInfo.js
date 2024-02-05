import React from 'react'; 
// Components.
import ProductReview  from "../ProductReview";
 

const ProductInfo = () => {
  return (
    <>
      <div className='row'>
        <div className='col-lg-12'>
          <div className='product_details_tabs'>
            <ul className='nav nav-tabs'>
              <li>
                <a data-toggle='tab' href='#description' className='active'>
                  Description
                </a>
              </li>
               
              <li>
                <a data-toggle='tab' href='#review'>
                  Review
                </a>
              </li>
            </ul>
            <div className='tab-content'>
              <div id='description' className='tab-pane fade in show active'>
                <div className='product_description'>
                  <p>
                    Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Vestibulum ac diam sit amet quam
                    vehicula elementum sed sit amet dui. Sed porttitor lectus nibh. Vivamus magna justo, lacinia eget
                    consectetur sed, convallis at tellus. Sed porttitor lectus nibh. Donec sollicitudin molestie
                    malesuada. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Curabitur arcu
                    erat, accumsan id imperdiet et, porttitor at sem.
                  </p>
                  
                   
                  <div className='product_additional'>
                  <ul>
                    <li>
                      Weight: <span>400 g</span>
                    </li>
                    <li>
                      Dimensions: <span>10 x 10 x 15 cm</span>
                    </li>
                    <li>
                      Materials: <span> 60% cotton, 40% polyester</span>
                    </li>
                    <li>
                      Other Info: <span> American heirloom jean shorts pug seitan letterpress</span>
                    </li>
                  </ul>
                </div>
                </div>
                
              </div>
              
              <div id='review' className='tab-pane fade'>
                <ProductReview productId={3} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductInfo;
