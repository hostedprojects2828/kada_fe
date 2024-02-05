import React from 'react'
import BillingsInfo from './BillingsInfo'
import Payment from './Payment'
import YourOrders from './YourOrders'
import Address from './Address'

import Login  from "../../component/Login";

const Checkout = () => {
    return (
        <>
            <section id="checkout_one" className="ptb-100">
                
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                        {/* if not loged in, show login page. */}
                        {/* <Login/> */}
                        {/* if address in not in DB, show billingInfo. */}
                        {/* <BillingsInfo /> */}
                        {/* if address avilable in DB, show address. */}
                        <Address/>

                        </div>

                        <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                            <YourOrders />
                            <Payment />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Checkout