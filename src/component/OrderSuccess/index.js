import React from 'react';
import { useHistory } from 'react-router-dom';
// import Img
// import img1 from '../../assets/img/common/delivery_success.png';
import success from '../../assets/img/email/success.png';
import ofd from '../../assets/img/email/order-out-delivery.png';
import shipped from '../../assets/img/email/order-shipped.png';
import orderDelivered from '../../assets/img/email/order-delivery.png';

// import pro1 from '../../assets/img/email/pro-3.jpg';
// import pro2 from '../../assets/img/email/pro-5.jpg';
// import spoce from '../../assets/img/email/space.jpg';
import { singleOrder } from '../../app/data/productsData';

const OrderSuccess = () => {
  const history = useHistory();
  const routeChange = () => {
    history.goBack();
  };
  return (
    <>
      <div className='tables_area col'>
        <div className='back_btn_emial'>
          <button className='theme-btn-one btn-black-overlay btn_sm' onClick={routeChange}>
            <i className='fa fa-arrow-left mr-2'></i>Go Back
          </button>
        </div>
        <div className='box_table '>
          {/* <div className='header'>
            <img src={img1} alt='img' style={{ marginBottom: '30px' }} />
          </div> */}
          <div className='payment-status pt-4'>
            <div className='payment-status-img'>
              <img src={success} alt='img' />
            </div>
            <h2 className='title'>thank you</h2>
            <p>Payment Is Successfully Processed And Your Order Is On The Way</p>
            <p>Transaction ID:{singleOrder.payment._id}</p>
          </div>
          <div className='order_status mb-5'>
            {singleOrder.products.map((item) => (
              <>
                <div className='single-order-status'>
                  <div className='single-order-status-heading'> {item.product.title}  </div>
                  <div >
                    {item.orderStatus === "shipped" && <img src={shipped} alt='img' style={{ marginTop: '30px', marginBottom: '30px' }} />}
                    {item.orderStatus === "delivered" && <img src={orderDelivered} alt='img' style={{ marginTop: '30px', marginBottom: '30px' }} />}
                    {item.orderStatus === "ofd" && <img src={ofd} alt='img' style={{ marginTop: '30px', marginBottom: '30px' }} />}
                  </div>
                </div>
              </>
            ))}
          </div>
          {/* <div className='mt-4'>
            <div className='title'>
              YOUR ORDER DETAILS
            </div>
            <div className='order-detail'>
              <div className='headings grid'>
                <div className='heading'>PRODUCT</div>
                <div className='heading  text-lg text-sm' >DESCRIPTION</div>
                <div className='heading' >QUANTITY</div>
                <div className='heading'>PRICE</div>
              </div>
              <div className='order-detail-container'>
                {singleOrder.products.map((item, index) => (
                  <div key={item.product._id} className='grid'>
                    <div className='values'>
                      <img src={item.product.img} alt='img' width='70' />
                    </div>
                    <div className='values'>
                      <div >{item.product.title}</div>
                    </div>
                    <div className='values d-flex flex-column '>
                      <div className='d-block'>
                        Size :<span> L</span>{' '}
                      </div>
                      <div className='d-block'>
                        QTY : <span>{item.product.quantity}</span>
                      </div>
                    </div>
                    <div className='values'>
                      <div >
                        <b>&#8377; {item.product.price}</b>
                      </div>
                    </div>
                  </div>
                ))}
                <div className='product-price-details'>
                  <div>Products:</div>
                  <div> <b>&#8377; {singleOrder.total}</b></div>
                </div>
                <div className='product-price-details'>
                  <div>Discount:</div>
                  <div> <b>&#8377;{singleOrder.discount}</b> </div>
                </div>
                <div className='product-price-details'>
                  <div>Gift Wrapping:</div>
                  <div>   <b>&#8377; {singleOrder.wrapping}</b></div>
                </div>
                <div className='product-price-details'>
                  <div> Shipping:</div>
                  <div><b>&#8377;{singleOrder.shipping}</b></div>
                </div>
                <div className='product-price-details'>
                  <div> TOTAL PAID :</div>
                  <div><b>&#8377; {singleOrder.payment.amount}</b></div>
                </div>
              </div>
              <div className='address-container mt-4 d-flex'>
                <div className='address w-50'>
                  <h5
                    style={{
                      fontSize: '16px',
                      fontWeight: '500',
                      color: '#000',
                      lineHeight: '16px',
                      paddingBottom: '13px',
                      borderBottom: '1px solid #e6e8eb',
                      letterSpacing: '-0.65px',
                      marginTop: '0',
                      marginBottom: '13px',
                    }}
                  >
                    DELIVERY ADDRESS
                  </h5>
                  <p style={{ textAlign: 'left', fontWeight: 'normal', fontSize: '14px', color: '#000000', lineHeight: '21px', marginTop: '0' }}>
                    {singleOrder.shippingAddress.line1},
                    <br /> {singleOrder.shippingAddress.line2}<br />
                    {`${singleOrder.shippingAddress.state}, ${singleOrder.shippingAddress.country}, ${singleOrder.shippingAddress.pinCode}`}
                  </p>
                </div>
                <div className='address  w-50'>
                  <h5
                    style={{
                      fontSize: '16px',
                      fontWeight: '500',
                      color: '#000',
                      lineHeight: '16px',
                      paddingBottom: '13px',
                      borderBottom: '1px solid #e6e8eb',
                      letterSpacing: '-0.65px',
                      marginTop: '0',
                      marginBottom: '13px',
                    }}
                  >
                    SHIPPING ADDRESS
                  </h5>
                  <p style={{ textAlign: 'left', fontWeight: 'normal', fontSize: '14px', color: '#000000', lineHeight: '21px', marginTop: '0' }}>
                    {singleOrder.billingAddress.line1},
                    <br /> {singleOrder.billingAddress.line2}<br />
                    {`${singleOrder.billingAddress.state}, ${singleOrder.billingAddress.country}, ${singleOrder.billingAddress.pinCode}`}
                  </p>
                </div>
              </div>
            </div>
            <>

            </>

          </div> */}
        </div>
      </div >
    </>
  );
};

export default OrderSuccess;
