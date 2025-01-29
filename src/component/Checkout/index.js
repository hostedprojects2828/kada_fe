import React, { useEffect, useState } from 'react';
import BillingsInfo from './BillingsInfo';
import Payment from './Payment';
import YourOrders from './YourOrders';
import Address from './Address';

import Login from '../../component/Login';

const addressesData = [
  {
    id: 'address1',
    fname: 'Vimal',
    lname: 'M',
    type: 'HOME',
    email: 'vimalvyshagam@gmail.com',
    country: 'India',
    countryCode: 'in',
    city: 'Banglore',
    phone: '8129340696',
    address: 'Vyshagam, Near aiyallur siva temple, Ariyallur, Kerala',
    notes: 'nothings.',
    pincode: '676312',
  },
  {
    id: 'address2',
    fname: 'Anushka',
    lname: 'pv',
    type: 'HOME',
    email: 'anu@gmail.com',
    country: 'India',
    countryCode: 'in',
    city: 'Kerala',
    phone: '7902749669',
    address: 'Wayanattupadam paramba, Kalayi PO, Kozhikode, Kerala',
    notes: 'nothings.',
    pincode: '673003',
  },
  {
    id: 'address3',
    fname: 'Vimal',
    lname: 'M',
    type: 'HOME',
    email: 'vimalvyshagam@gmail.com',
    country: 'India',
    countryCode: 'in',
    city: 'Kerala',
    phone: '8129340696',
    address: '8E Peach Cyber Palms, SFS Cyber Palms, Thiruvananthapuram, Kerala',
    pincode: '695583',
  },
];

const Checkout = () => {
  const [addresses, setAddressess] = useState([]);
  const [selectedAddress, setSelectedAddress] = useState(null);
  const [isShowForm, SetIsShowForm] = useState(false);
  const [isChangeAddress, setIsChangeAddress] = useState(false);

  const addreId = localStorage.getItem('id') ?? '';

  // Get address api call.
  useEffect(() => {
    // if address in db then no show form, elso so form
    if (addressesData) {
      setAddressess([...addressesData]);
      setSelectedAddress(addressesData[0]);
    }
  }, []);

  useEffect(() => {
    let addressObj = {
      id: localStorage.getItem('id') ?? '',
      fname: localStorage.getItem('fname') ?? '',
      lname: localStorage.getItem('lname') ?? '',
      email: localStorage.getItem('email') ?? '',
      phone: localStorage.getItem('phone') ?? '',
      country: localStorage.getItem('country') ?? '',
      countryCode: localStorage.getItem('countryCode') ?? '',
      city: localStorage.getItem('city') ?? '',
      pincode: localStorage.getItem('zip') ?? '',
      address: localStorage.getItem('address') ?? '',
      messages: localStorage.getItem('messages') ?? '',
    };
    if (addressObj && addressObj.id) {
      setSelectedAddress(addressObj);
      setAddressess([{ ...addressObj }]);
      // handleShowChangeAddress(false);
      // handleShowForm(false);
    } else {
      // handleShowForm(true);
    }
  }, []);

  useEffect(() => {
    // no selected address, no address from db then show form.
    if (!selectedAddress && addresses && addresses.length == 0) {
      console.log('addresses if----,', addresses);
      console.log('isShowform----,', isShowForm);
      console.log('isChangeAddress----,', isChangeAddress);
      handleShowChangeAddress(false);
      handleShowForm(true);
    } else if (selectedAddress && addresses && addresses.length) {
      console.log('addresses else----,', addresses);
      console.log('isShowform----,', isShowForm);
      console.log('isChangeAddress----,', isChangeAddress);
      // handleShowChangeAddress(true);
      handleShowForm(false);
    }
  }, [selectedAddress, addresses]);
  //   Handle selected address.
  const handleSelectAddress = (values) => {
    localStorage.setItem('id', values.id);
    localStorage.setItem('fname', values.fname);
    localStorage.setItem('lname', values.lname);
    localStorage.setItem('email', values.email);
    localStorage.setItem('phone', values.phone);
    localStorage.setItem('country', values.country);
    localStorage.setItem('countryCode', values.countryCode);
    localStorage.setItem('city', values.city);
    localStorage.setItem('zip', values.zip);
    localStorage.setItem('address', values.address);
    localStorage.setItem('messages', values.messages);
    setSelectedAddress(values);
    handleShowForm(true);
  };

  // To change address.
  const handleUpdateAddress = (address) => {
    if (addresses && addresses.length) {
      if (address && address.id) {
        let udpatedAddressess = addresses.map((item) => (item.id === address.id ? address : item));
        setAddressess([...udpatedAddressess]);
      }
    } else {
      let add = setAddressess([{ ...address }]);
      selectedAddress({ ...address });
    }
    handleShowForm(false);
    handleShowChangeAddress(true);
  };

  // To show forms.
  const handleShowForm = (isOpen) => {
    SetIsShowForm(isOpen);
  };

  // To address list block
  const handleShowChangeAddress = (isShow) => {
    setIsChangeAddress(isShow);
  };

  return (
    <>
      <section id="checkout_one" className="ptb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12 col-sm-12 col-12">
              {/* if not loged in, show login page. */}
              {/* <Login/> */}
              {/* if address in not in DB, show billingInfo. */}
              {isShowForm && <BillingsInfo selectedAddress={selectedAddress} handleUpdateAddress={handleUpdateAddress} />}
              {/* if address avilable in DB, show address. */}
              <Address
                isChangeAddress={isChangeAddress}
                addresses={[...addresses]}
                selectedAddress={selectedAddress}
                handleSelectAddress={handleSelectAddress}
                handleShowChangeAddress={handleShowChangeAddress}
              />
            </div>

            <div className="col-lg-6 col-md-12 col-sm-12 col-12">
              <YourOrders />
              <Payment />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Checkout;
