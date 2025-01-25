import React, { useState } from 'react';
import './address.css';

const DeliveryAddress = ({ addresses, handleSelectAddress }) => {
  const [selectedAddress, setSelectedAddress] = useState('address2');
  const [isAddressesSelection, setIsAddressesSelection] = useState(false);

  const handleAddressesSelectionTab = () => {
    setIsAddressesSelection((prevState) => !prevState);
  };

  return (
    <div className="delivery-address-container">
      <div className="check-heading mb-4">
        <h3>Delivery Address</h3>
      </div>
      <div className="address-list">
        {addresses &&
          addresses
            .filter((address) => selectedAddress === address.id)
            .map((address) => (
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
                        <span className="address-name">{address.fname + ' ' + address.lname}</span>

                        <span className="address-type">{address.type}</span>
                        <span className="address-phone">{address.phone}</span>
                      </div>
                      <p>
                        {address.address} - {address.pincode}
                      </p>
                    </label>
                    <div className=" ">{selectedAddress === address.id && <p className="deliver-btn">DELIVER HERE</p>}</div>
                  </div>
                  <div className="operation-button" onClick={() => handleSelectAddress(address)}>
                    <p className="operation-btn">EDIT</p>
                  </div>
                </div>
              </div>
            ))}
        {/* Address listing */}
        {isAddressesSelection &&
          addresses
            .filter((address) => selectedAddress !== address.id)
            .map((address) => (
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
                    <p className="operation-btn" onClick={() => handleSelectAddress()}>
                      EDIT
                    </p>
                  </div>
                </div>
              </div>
            ))}
      </div>

      <div className="add-address-btn">
        <button className="add-new-address" onClick={handleAddressesSelectionTab}>
          {isAddressesSelection ? 'Done' : 'Change'}
        </button>
      </div>
    </div>
  );
};

export default DeliveryAddress;
