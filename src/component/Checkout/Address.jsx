import React, { useState } from 'react';
import './address.css';

const DeliveryAddress = () => {
  const [selectedAddress, setSelectedAddress] = useState('address2');

  const addresses = [
    {
      id: 'address1',
      name: 'Vimal',
      type: 'HOME',
      phone: '8129340696',
      address: 'Vyshagam, Near aiyallur siva temple, Ariyallur, Kerala',
      pincode: '676312',
    },
    {
      id: 'address2',
      name: 'Anushka',
      type: 'HOME',
      phone: '7902749669',
      address: 'Wayanattupadam paramba, Kalayi PO, Kozhikode, Kerala',
      pincode: '673003',
    },
    {
      id: 'address3',
      name: 'Vimal',
      type: 'HOME',
      phone: '8129340696',
      address: '8E Peach Cyber Palms, SFS Cyber Palms, Thiruvananthapuram, Kerala',
      pincode: '695583',
    },
  ];

  return (
    <div className="delivery-address-container">
      <div className="check-heading mb-4">
        <h3>Delivery Address</h3>
      </div>
      <div className="address-list">
        {addresses.map((address) => (
          <div key={address.id} className={`address-item ${selectedAddress === address.id ? 'selected' : ''}`}>
            <div className="address-content">
              <div className="radio-btn">
                <input
                  type="radio"
                  id={address.id}
                  name="deliveryAddress"
                  value={address.id}
                  checked={selectedAddress === address.id}
                  onChange={() => setSelectedAddress(address.id)}
                />
              </div>
              <div className="address-details">
                <label htmlFor={address.id}>
                  <div className="address-header">
                    <span className="address-name">{address.name}</span>
                    <span className="address-type">{address.type}</span>
                    <span className="address-phone">{address.phone}</span>
                  </div>
                  <p>
                    {address.address} - {address.pincode}
                  </p>
                </label>
                <div className=" ">{selectedAddress === address.id && <p className="deliver-btn">DELIVER HERE</p>}</div>
              </div>
              <div className="operation-button">
                <p className="operation-btn">EDIT</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="add-address-btn">
        <button className="add-new-address">+ Add a new address</button>
      </div>
    </div>
  );
};

export default DeliveryAddress;
