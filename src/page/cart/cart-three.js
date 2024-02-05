import React from 'react';
import Header from '../../component/Common/Header';
import Banner from '../../component/Common/Banner';
import CartViewThree from '../../component/Cart/CartViewThree';
import Footer from '../../component/Common/Footer';
import EmptyCart from '../../component/Cart/EmptyCart';
import {  useSelector } from 'react-redux';

// css
import './cart.css';

const CartThree = () => {
  const carts = useSelector((state) => state.products.carts);
  return (
    <>
      <Header />
      {carts && carts.length === 0 ? <EmptyCart /> : <CartViewThree />}
      {/* <Footer /> */}
    </>
  );
};

export default CartThree;
