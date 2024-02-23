import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { RatingStar } from 'rating-star';
import { useDispatch, useSelector } from 'react-redux';

import img1 from '../../assets/img/product-image/product13.png';
const CartViewThree = () => {
  let dispatch = useDispatch();
  const carts = useSelector((state) => state.products.carts);
  const totalRef = useRef(null);

  // useEffect(() => {
  //   console.log('carts----', carts);

  // },[carts])

  // Remove Product
  const rmProduct = (id) => {
    dispatch({ type: 'products/removeCart', payload: { id } });
  };
  // Clear Cart
  // const clearCarts = () => {
  //   dispatch({ type: 'products/clearCart' });
  // };

  // Quenty Inc Dec
  const incNum = (val, id) => {
    const qty = val + 1;
    dispatch({ type: 'products/updateCart', payload: { qty, id } });
  };

  const decNum = (val, id) => {
    const qty = val - 1;
    dispatch({ type: 'products/updateCart', payload: { qty, id } });
  };

  // Scroll to total pricing section.
  const handleScrollToTotal = () => {
    totalRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <section id='cart_area_three' className='mt-4'>
        {/* Mobile_view-start */}
        <div className='mobile-view'>
          {carts.map((item, i) => (
            <>
              <div className='products' key={item.id}>
                <div className='image-qty  '>
                  <div className='image'>
                    {/* image */}
                    <Link to='product-details-one/1'>
                      <img src={img1} alt='img' />
                    </Link>
                  </div>
                  <div className='quntity-form'>
                    <form id='quantity-form'>
                      <div className='plus-minus-input'>
                        <div className='input-group-button'>
                          <button type='button' className='button' onClick={() => decNum(item.quantity, item.id)}>
                            <i className='fa fa-minus'></i>
                          </button>
                        </div>
                        <input className='form-control ' type='number' value={item.quantity} disabled />
                        <div className='input-group-button'>
                          <button type='button' className='button' onClick={() => incNum(item.quantity, item.id)}>
                            <i className='fa fa-plus'></i>
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>

                <div className='product-details'>
                  {/* Description */}
                  <h5>Lenskart Blu Full Rim Square Frame</h5>
                  <p>49mm</p>
                  <div className='rating'>
                    <RatingStar maxScore={5} rating={4} />
                    <p>(4/5 rating)</p>
                  </div>
                  <div className='price'>
                    <p>53% Off applied</p>
                    <h4>
                      <del>{item.discountPrice}</del> {item.price}
                    </h4>
                  </div>
                  <div className='btns'>
                    <button onClick={() => rmProduct(item.id)} className='btn theme-btn-one bg-black btn_sm mt-1'>
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            </>
          ))}
          <div className='mobile-placeorder '>
            <div>
              <del>1,60,890</del>
              <div className='d-flex align-items-center' onClick={handleScrollToTotal}>
                <p>46,900</p>
                <i className='fa fa-info-circle ml-2' aria-hidden='true'></i>
              </div>
            </div>
            <div className='btns'>
              <button onClick={() => console.log('remove')} className='btn theme-btn-one bg-black btn_sm mt-1'>
                Place Order
              </button>
            </div>
          </div>
        </div>

        {/* Larg view. */}
        <div className='container '>
          <div className='row'>
            <div className='col-lg-8 col-sm-12 larg-view products '>
              {carts.map((item, i) => (
                <div className='row cart-products' key={item.id}>
                  <div className='col-sm-3 col-md-3 col-lg-3   '>
                    <div className='image'>
                      <Link to='product-details-one/1'>
                        <img src={img1} alt='img' />
                      </Link>
                    </div>
                    <div className='quntity-form'>
                      <form id='quantity-form'>
                        <div className='plus-minus-input'>
                          <div className='input-group-button'>
                            <button type='button' className='button' onClick={() => decNum(item.quantity, item.id)}>
                              <i className='fa fa-minus'></i>
                            </button>
                          </div>
                          <input className='form-control' type='number' value={item.quantity} disabled />
                          <div className='input-group-button'>
                            <button type='button' className='button' onClick={() => incNum(item.quantity, item.id)}>
                              <i className='fa fa-plus'></i>
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className='col-sm-6 col-lg-5  product-details'>
                    <h5>Lenskart Blu Full Rim Square Frame</h5>
                    <p>49mm</p>
                    <div className='rating'>
                      <RatingStar maxScore={5} rating={4} />
                      (4/5 rating)
                    </div>
                    <div className='price'>
                      <p>53% Off applied</p>
                      <h4>
                        <del>{item.discountPrice}</del> {item.price}
                      </h4>
                    </div>
                    <div className='btns'>
                      <button onClick={() => rmProduct(item.id)} className='btn theme-btn-one bg-black btn_sm mt-1'>
                        Remove
                      </button>
                    </div>
                  </div>
                  <div className='col-lg-4 col-sm-12'>
                    <p className='dilivery'>
                      Delivery by Wed Nov 1 | <del>$100</del>
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className='col-lg-4 col-md-12 col-sm-12' ref={totalRef}>
              <div className='coupon_code left'>
                <h3>Cart Total</h3>
                <div className='total_cart_inner'>
                  {/* <h5>Shipping:</h5> */}
                  <form action='#!' id='total_cart_form_three'>
                    <label className=''>
                      <h5>Price (9 item) <span className='rigth_cart'>$0.00</span></h5>
                    </label>
                    <label className=''>
                      <h5>Discount <span className='rigth_cart'>$0.00</span></h5>
                    </label>
                    <label className=''>
                      <h5>Delivery Charge <span className='rigth_cart'>$0.00</span></h5> <span className='rigth_cart'>$0.00</span>
                    </label>
                  </form>
                  <div className='total_catr_three_bottom'>
                    <h5>
                      Total Cart <span className='rigth_cart'>$50.00</span>
                    </h5>
                  </div>
                  <div className='save_cart'>
                    <h6>
                      You will save $ 2,6800 on this order.
                    </h6>
                  </div>

                  <div className='cart_submit '>
                    <Link to='/checkout-one' className='theme-btn-one btn-black-overlay btn_sm'>
                      Place Order
                    </Link>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CartViewThree;
