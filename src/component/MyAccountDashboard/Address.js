import React from 'react';
import { Link } from 'react-router-dom';

const Address = ({ data }) => {
  return (
    <>
      <div className='row'>
        <div className='col-lg-12 mb-4'>
          <div className=' addBtn'>
            <h4 className='title'>
              <i className='fa fa-plus'></i>&nbsp; Add Address
            </h4>
          </div>
        </div>
        {data &&
          data.map(address => (
            <div className='col-lg-6 '>
              <div className='myaccount-content '>
                <div className='d-flex   justify-content-between'>
                  <h4 className='title'>{address.name}</h4>
                  <div className='dropdownBtn text-right '>
                    <nav>
                      <ul>
                        <li className='has-dropdown'>
                          <a href='#!' className='main-menu-link'>
                            <i className='fa fa-ellipsis-v'></i>
                          </a>
                          <ul className='sub-menu'>
                            <li key={1}>
                              <a href='#'>Make Default</a>
                            </li>
                            <li key={1}>
                              <a href='#'>Edit</a>
                            </li>
                            <li key={1}>
                              <a href='#'>Delete</a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
                <div className='billing_address'>
                  {/* <h5>
                    <strong>Alex Porty</strong>
                  </h5> */}
                  <p>
                    {address.address}
                    <br></br>
                    {address.district},<br></br>
                    {address.state} - {address.pinCode}
                  </p>
                  <p>
                    Mobile: {address.phone1}, {address.phone2}
                  </p>
                  {/* <button className='theme-btn-one bg-black btn_sm mt-4 mr-2'>Edit Address</button>
                  <button className='theme-btn-one bg-black btn_sm mt-4'>Delete</button>
                  <button className='theme-btn-one bg-black btn_sm mt-4'>Make Default</button> */}
                </div>
              </div>
            </div>
          ))}
        {/*         
        <div className='col-lg-6'>
          <div className='myaccount-content'>
            <h4 className='title'>Shipping Address</h4>
            <div className='billing_address'>
              <h5>
                <strong>Helen J Francis</strong>
              </h5>
              <p>
                Travis street city <br /> Newyork, 90001
              </p>
              <p>Mobile: (458) 209-534-4814</p>
              <button className='theme-btn-one bg-black btn_sm mt-4'>Edit Address</button>
            </div>
          </div>
        </div> */}
      </div>
    </>
  );
};

export default Address;
