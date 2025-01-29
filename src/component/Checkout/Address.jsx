import React, { useEffect, useState } from 'react';
import './address.css';

const DeliveryAddress = ({ isChangeAddress, addresses, selectedAddress, handleSelectAddress, handleShowChangeAddress }) => {
  return (
    <>
      {addresses && addresses.length ? (
        <div className="delivery-address-container">
          <div className="check-heading mb-4">
            <h3>Delivery Address</h3>
          </div>
          <div className="address-list">
            {!isChangeAddress && selectedAddress && selectedAddress.id && (
              <div key={selectedAddress.id} className={`address-item ${selectedAddress === selectedAddress.id ? 'selected' : ''}`}>
                <div className="address-content">
                  <div className="radio-btn">
                    <input type="radio" id={selectedAddress.id} name="deliveryAddress" value={selectedAddress.id} checked={true} />
                  </div>
                  <div className="address-details">
                    <label htmlFor={selectedAddress.id}>
                      <div className="address-header">
                        <span className="address-name">{selectedAddress.fname + ' ' + selectedAddress.lname}</span>

                        <span className="address-type">{selectedAddress.type}</span>
                        <span className="address-phone">{selectedAddress.phone}</span>
                      </div>
                      <p>
                        {selectedAddress.address} - {selectedAddress.pincode}
                      </p>
                    </label>
                  </div>
                  <div className="operation-button" onClick={() => handleSelectAddress(selectedAddress)}>
                    <p className="operation-btn">EDIT</p>
                  </div>
                </div>
              </div>
            )}

            {/* Address listing */}
            {isChangeAddress &&
              addresses.map((address) => (
                <div key={address.id} className={`address-item ${selectedAddress === address.id ? 'selected' : ''}`}>
                  <div className="address-content">
                    <div className="radio-btn">
                      <input type="radio" id={address.id} name="deliveryAddress" disabled value={address.id} checked={selectedAddress && selectedAddress.id === address.id} />
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
                      <div className=" " onClick={() => handleSelectAddress(address)}>
                        <p className="deliver-btn">DELIVER HERE</p>
                      </div>
                    </div>
                    <div className="operation-button">
                      <p className="operation-btn" onClick={() => handleSelectAddress(address)}>
                        EDIT
                      </p>
                    </div>
                  </div>
                </div>
              ))}
          </div>

          {isChangeAddress && (
            <div className="add-address-btn" onClick={() => handleShowChangeAddress(false)}>
              <button className="add-new-address">Done</button>
            </div>
          )}
          {!isChangeAddress && (
            <div className="add-address-btn" onClick={() => handleShowChangeAddress(true)}>
              <button className="add-new-address">Change</button>
            </div>
          )}
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default DeliveryAddress;
