import React, { useState, useEffect } from 'react';
import { useFormik } from 'formik';
import { getCountries, getStates, getCountry } from 'country-state-picker';

const BillingsInfo = ({ selectedAddress, handleUpdateAddress }) => {
  const [submitButtenClicked, setSubmitButtonClicked] = useState(false);
  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);

  useEffect(() => {
    let country = getCountries();
    setCountries(country);
  }, []);

  const handleSubmit = async (values) => {
    setSubmitButtonClicked(true);
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
    await handleUpdateAddress(values);
  };

  const formik = useFormik({
    initialValues: {
      id: localStorage.getItem('id') ?? '',
      fname: localStorage.getItem('fname') ?? '',
      lname: localStorage.getItem('lname') ?? '',
      email: localStorage.getItem('email') ?? '',
      phone: localStorage.getItem('phone') ?? '',
      country: localStorage.getItem('country') ?? '',
      countryCode: localStorage.getItem('countryCode') ?? '',
      city: localStorage.getItem('city') ?? '',
      zip: localStorage.getItem('zip') ?? '',
      address: localStorage.getItem('address') ?? '',
      messages: localStorage.getItem('messages') ?? '',
    },
    onSubmit: (values) => {
      handleSubmit(values);
    },
    validate: (values) => {
      let errors = {};
      if (!values.fname) {
        errors.fname = 'First Name Required';
      }
      if (!values.lname) {
        errors.lname = 'Last Name Required';
      }

      if (!values.email) {
        errors.email = 'Email Required';
      } else {
        const rejex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const isvalid = rejex.test(values.email);
        if (!isvalid) {
          errors.email = 'Enter Valid Email';
        }
      }

      if (!values.phone) {
        errors.phone = 'Phone Number Required';
      } else if (values.phone.length < 10) {
        errors.phone = 'Phone Number Required Minimum 10 Number';
      } else if (values.phone.length > 10) {
        errors.phone = 'Phone Number Required Maximum 10 Number';
      } else if (/^\d{0,10}$/.test(values.phone) == false) {
        errors.phone = 'Enter Valid Phone Number';
      }

      if (!values.country) {
        errors.country = 'Country Required';
      }
      if (!values.city) {
        errors.city = 'City Required';
      }

      if (!values.address) {
        errors.address = 'Address Required';
      }
      if (!values.zip) {
        errors.zip = 'Zip Code Required';
      }
      return errors;
    },
  });

  useEffect(() => {
    if (selectedAddress) {
      formik.setValues({
        id: selectedAddress?.id ?? 'no Id',
        fname: selectedAddress?.fname ?? '',
        lname: selectedAddress?.lname ?? '',
        email: selectedAddress?.email ?? '',
        phone: selectedAddress?.phone ?? '',
        country: selectedAddress?.country ?? '',
        countryCode: selectedAddress?.countryCode ?? '',
        city: selectedAddress?.city ?? '',
        zip: selectedAddress?.pincode ?? '',
        address: selectedAddress?.address ?? '',
        messages: selectedAddress?.notes ?? '',
      });
      let states = getStates(selectedAddress?.countryCode ?? '');
      setStates(states);
    }
  }, [selectedAddress]);

  //   To watch change in coutry and set states.
  useEffect(() => {
    if (formik.values && formik.values.country) {
      let country = getCountry(formik.values.country);
      formik.values.countryCode = country.code;
      let states = getStates(country.code);
      setStates(states);
    }
  }, [formik.values && formik.values.country]);

  const handleStateChange = (e) => {
    const selectedcity = e.target.value;
    formik.values.city = selectedcity;
    formik.handleChange(selectedcity);
  };

  return (
    <>
      {/* <div className="col-lg-6 col-md-12 col-sm-12 col-12"> */}
      <div className="checkout-area-bg bg-white">
        <div className="check-heading">
          <h3>Billings Information</h3>
        </div>
        <div className="check-out-form">
          {submitButtenClicked && (
            <div>
              {Object.entries(formik.errors).map(([fieldName, errorMessage], index) => (
                <p key={index} className="check-out-page-error-message">
                  {errorMessage}
                </p>
              ))}
            </div>
          )}

          <form method="post" onSubmit={formik.handleSubmit}>
            <div className="row">
              <div className="col-lg-6 col-md-12 col-sm-=12 col-12">
                <div className="form-group">
                  <label htmlFor="fname">
                    First name<span className="text-danger">*</span>{' '}
                  </label>
                  <input type="text" required="" className="form-control" id="fname" value={formik.values.fname} onChange={formik.handleChange} placeholder="First name" />
                </div>
              </div>
              <div className="col-lg-6 col-md-12 col-sm-=12 col-12">
                <div className="form-group">
                  <label htmlFor="lname">
                    Last name<span className="text-danger">*</span>
                  </label>
                  <input type="text" required="" className="form-control" id="lname" value={formik.values.lname} onChange={formik.handleChange} placeholder="Last name" />
                </div>
              </div>

              <div className="col-lg-12 col-md-12 col-sm-=12 col-12">
                <div className="form-group">
                  <label htmlFor="email">
                    Email Addresse<span className="text-danger">*</span>
                  </label>
                  <input className="form-control" required="" type="text" id="email" value={formik.values.email} onChange={formik.handleChange} placeholder="info@gmail.com" />
                </div>
              </div>
              <div className="col-lg-12 col-md-12 col-sm-=12 col-12">
                <div className="form-group">
                  <label htmlFor="email">
                    Phone Number<span className="text-danger">*</span>
                  </label>
                  <input className="form-control" required="" type="text" id="phone" value={formik.values.phone} onChange={formik.handleChange} placeholder="phone number " />
                </div>
              </div>
              <div className="col-lg-12 col-md-12 col-sm-=12 col-12">
                <div className="form-group">
                  <label htmlFor="country">
                    Country<span className="text-danger">*</span>
                  </label>

                  <select className="form-control first_null" id="country" onChange={formik.handleChange}>
                    <option defaultValue="">Select an option...</option>
                    {countries.map((country) => (
                      <option key={country.name} value={country.code} selected={formik.values.countryCode === country.code}>
                        {country.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="col-lg-6 col-md-12 col-sm-=12 col-12">
                <div className="form-group">
                  <label htmlFor="city">
                    State/City<span className="text-danger">*</span>
                  </label>
                  <select className="form-control first_null" id="city" onChange={handleStateChange}>
                    <option defaultValue="">Select an option...</option>

                    {states.map((district, index) => (
                      <option key={index} value={district} selected={formik.values.city === district}>
                        {district}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="col-lg-6 col-md-12 col-sm-=12 col-12">
                <div className="form-group">
                  <label htmlFor="zip">
                    Zipcode<span className="text-danger">*</span>
                  </label>
                  <input type="text" className="form-control" id="zip" required="" value={formik.values.zip} onChange={formik.handleChange} placeholder="Enter Your zipcode" />
                </div>
              </div>
              <div className="col-lg-12 col-md-12 col-sm-=12 col-12">
                <div className="form-group">
                  <label htmlFor="address">
                    Full Address<span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="address"
                    required=""
                    value={formik.values.address}
                    onChange={formik.handleChange}
                    placeholder="Enter your address here.."
                  />
                </div>
              </div>
              <div className="col-lg-12 col-md-12 col-sm-=12 col-12">
                <div className="form-group">
                  <label htmlFor="messages">
                    Additional Notes<span className="text-danger">*</span>
                  </label>
                  <textarea rows="5" className="form-control" id="messages" value={formik.values.messages} onChange={formik.handleChange} placeholder="Order notes"></textarea>
                </div>
              </div>
            </div>
            <div className="billing-info-save-button">
              <button value="Submit" name="submit" className="theme-btn-one btn_md btn-black-overlay" onClick={handleSubmit} title="Submit Your Message!" type="submit">
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
      {/* </div> */}
    </>
  );
};

export default BillingsInfo;
