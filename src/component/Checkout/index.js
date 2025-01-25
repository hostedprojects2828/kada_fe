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

  // Get address.
  useEffect(() => {
    setAddressess([...addressesData]);
  }, []);

  //   Handle selected address.
  const handleSelectAddress = (address) => {
    setSelectedAddress(address);
  };

  // To change address.
  const handleUpdateAddress = (address) => {
    if (address && address.id) {
      let udpatedAddressess = addresses.map((item) => (item.id === address.id ? address : item));
      setAddressess([...udpatedAddressess]);
    }
  };
  // console.log('selectedAddress', selectedAddress);

  return (
    <>
      <section id="checkout_one" className="ptb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12 col-sm-12 col-12">
              {/* if not loged in, show login page. */}
              {/* <Login/> */}
              {/* if address in not in DB, show billingInfo. */}
              {!addresses && <BillingsInfo selectedAddress={selectedAddress} handleUpdateAddress={handleUpdateAddress} />}
              {/* if address avilable in DB, show address. */}
              {addresses && <Address addresses={[...addresses]} handleSelectAddress={handleSelectAddress} />}
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
