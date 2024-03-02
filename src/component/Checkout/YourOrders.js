import React, { useRef } from 'react'
import { useSelector } from 'react-redux';

const YourOrders = () => {
    const carts = useSelector((state) => state.products.carts);
    const totalRef = useRef(null);

    //cart calculations
    const cartTotal = carts.reduce((total, item) => total + (item?.price || 0) * item.quantity, 0);
    const cartTotalDiscounts = carts.reduce((total, item) => total + (item?.discountPrice || 0) * item.quantity, 0);
    return (
        <>
            <div className="order_review  box-shadow bg-white">
                <div className="check-heading">
                    <h3>Your Orders</h3>
                </div>
                <div className="table-responsive order_table">
                    {/* <table className="table">
                        <thead>
                            <tr>
                                <th>Product</th>
                                <th>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Blue Dress For Woman <span className="product-qty">x 2</span>
                                </td>
                                <td>$90.00</td>
                            </tr>
                            <tr>
                                <td>Lether Gray Tuxedo <span className="product-qty">x 1</span>
                                </td>
                                <td>$55.00</td>
                            </tr>
                            <tr>
                                <td>Woman Full Sliv Dresss <span className="product-qty">x 3</span>
                                </td>
                                <td>$204.00</td>
                            </tr>
                        </tbody>
                        <tfoot>
                            <tr>
                                <th>SubTotal</th>
                                <td className="product-subtotal">$349.00</td>
                            </tr>
                            <tr>
                                <th>Shipping</th>
                                <td>Free Shipping</td>
                            </tr>
                            <tr>
                                <th>Total</th>
                                <td className="product-subtotal">$349.00</td>
                            </tr>
                        </tfoot>
                    </table> */}
                    <div className='total_cart_inner'>

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
                    </div>

                </div>
            </div>
        </>
    )
}

export default YourOrders