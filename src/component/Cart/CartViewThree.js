import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { RatingStar } from 'rating-star';
import { useDispatch, useSelector } from 'react-redux';

const CartViewThree = () => {
  let dispatch = useDispatch();
  const carts = useSelector((state) => state.products.carts);
  const totalRef = useRef(null);

  //cart calculations
  const cartTotal = carts.reduce((total, item) => total + (item?.price || 0) * item.quantity, 0)
  const cartTotalDiscounts = carts.reduce((total, item) => total + (item?.discountPrice || 0) * item.quantity, 0)

  // Remove Product
  const rmProduct = (id) => {
    dispatch({ type: 'products/removeCart', payload: { id } });
  };

  // Clear Cart
  // const clearCarts = () => {
  //   dispatch({ type: 'products/clearCart' });
  // };

  // Quey Inc Dec
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
                    <Link to='product-details-two/1'>
                      <img src={item.img} alt='img' />
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
                  <h5>{item.title}</h5>
                  <p>49mm</p>
                  <div className='rating'>
                    <RatingStar maxScore={5} rating={item.rating.rate} />
                    <p>({item.rating.rate} /{item.rating.count} rating)</p>
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
              <del>{cartTotalDiscounts}</del>
              <div className='d-flex align-items-center' onClick={handleScrollToTotal}>
                <p>{cartTotal}</p>
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
                      <Link to={`product-details-two/&#8377;{item.id}`}>
                        <img src={item.img} alt='img' />
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
                    <h5>{item.title}</h5>
                    <p>49mm</p>
                    <div className='rating'>
                      <RatingStar maxScore={5} rating={item.rating.rate} />
                      ({item.rating.rate} /{item.rating.count} rating)
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
                      Delivery by Wed Nov 1 | <del>&#8377;100</del>
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
                      <h5>
                        Price ({carts.length} item) <span className='rigth_cart'>&#8377; {cartTotal}</span>
                      </h5>
                    </label>
                    <label className=''>
                      <h5>
                        Discount <span className='rigth_cart'>&#8377; {cartTotalDiscounts}</span>
                      </h5>
                    </label>
                    <label className=''>
                      <h5>
                        Delivery Charge <span className='rigth_cart'>&#8377; 0.00</span>
                      </h5>{' '}
                      <span className='rigth_cart'>&#8377; 0.00</span>
                    </label>
                  </form>
                  <div className='total_catr_three_bottom'>
                    <h5>
                      Total Cart <span className='rigth_cart'>&#8377; {cartTotal}</span>
                    </h5>
                  </div>
                  <div className='save_cart'>
                    <h6>You will save &#8377; {cartTotalDiscounts} on this order.</h6>
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
