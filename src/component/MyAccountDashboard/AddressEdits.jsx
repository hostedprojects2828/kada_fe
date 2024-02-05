import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Swal from 'sweetalert2';
// Dummy Data.
import { userAddress } from '../../app/data/userData';
// Components.
import FormInputs from '../Common/Form';

const AddressEdits = () => {
  let dispatch = useDispatch();
  const history = useHistory();
  const { id } = useParams();
  const [isEdit, setIsEdit] = useState(false);
  const [values, setValues] = useState({
    name: '',
    phone1: '',
    phone2: '',
    address: '',
    district: '',
    PinCode: '',
    locality: '',
    state: '',
    category: '',
    landMark: '',
  });

  let status = useSelector(state => state.user.status);
  let userData = useSelector(state => state.user.user);

  useEffect(() => {
    // Api call - pass user id too.
    try {
      let selectedAddress = userAddress.filter(address => address.id == id)[0];
      console.log('selectedAddress', selectedAddress);
      setValues({
        name: selectedAddress.name,
        phone1: selectedAddress.phone1,
        phone2: selectedAddress.phone2,
        address: selectedAddress.address,
        district: selectedAddress.district,
        pinCode: selectedAddress.pinCode,
        locality: selectedAddress.locality,
        state: selectedAddress.state,
        category: 'home',
        landMark: selectedAddress.landmark,
      });
    } catch (error) {
      console.log('Error in edit address');
    }
  }, []);

  // Onchange values.
  const onChange = e => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  // Add to cart
  const udpateAddress = () => {
    // Api call : update address - pass userId & addressId

    Swal.fire({
      icon: 'success',
      title: 'Address Updated Sucessfull',
      text: 'Thank You',
    });
    //   history.push('/my-account');
  };

  console.log('values', values);

  return (
    <>
      <div className='myaccount-content'>
        <div className='save_button  d-flex align-items-center justify-content-left'>
          <h4 className='title'>Address details</h4>
        </div>
        <div className='login_form_container'>
          <div className='account_details_form'>
            <form
              action='#'
              onSubmit={e => {
                e.preventDefault();
                udpateAddress();
              }}
            >
              <div className='row'>
                <div className='col-lg-6 col-md-6 col-sm-12'>
                  <FormInputs
                    id={1}
                    type='text'
                    label='Name'
                    placeholder='Name'
                    name='name'
                    errorMessage='Name is required!'
                    required={true}
                    value={values['name']}
                    onChange={onChange}
                  />
                </div>
                <div className='col-lg-6 col-md-6 col-sm-12'>
                  <FormInputs
                    case='text'
                    id={2}
                    type='number'
                    label='Mobile number'
                    placeholder='Mobile Number'
                    name='mobileNumber'
                    errorMessage='Mobile number is required!'
                    required={true}
                    value={values['phone1']}
                    onChange={onChange}
                  />
                </div>
                <div className='col-lg-6 col-md-6 col-sm-12'>
                  <FormInputs
                    id={1}
                    type='number'
                    label='Pincode'
                    name='pinCode'
                    errorMessage='Pincode is required!'
                    required={true}
                    value={values['pinCode']}
                    onChange={onChange}
                  />
                </div>
                <div className='col-lg-6 col-md-6 col-sm-12'>
                  <FormInputs
                    id={1}
                    type='text'
                    label='Locality'
                    placeholder=''
                    name='locality'
                    errorMessage='locality is required!'
                    required={true}
                    value={values['locality']}
                    onChange={onChange}
                  />
                </div>
                <div className='col-lg-12 col-md-12 col-sm-12'>
                  <FormInputs
                    id={2}
                    type='textarea'
                    label='Address'
                    placeholder=''
                    name='address'
                    errorMessage='Address is required!'
                    required={true}
                    value={values['address']}
                    onChange={onChange}
                  />
                </div>
                <div className='col-lg-6 col-md-6 col-sm-12'>
                  <FormInputs
                    id={1}
                    type='text'
                    label='District'
                    placeholder=''
                    name='district'
                    errorMessage='District is required!'
                    required={true}
                    value={values['district']}
                    onChange={onChange}
                  />
                </div>
                <div className='col-lg-6 col-md-6 col-sm-12'>
                  <FormInputs
                    id={3}
                    type='select'
                    defaultValue='Kerala'
                    name='state'
                    onChange={onChange}
                    errorMessage='state is required'
                    label='State'
                    required={true}
                    value={[
                      { key: 'Kerala', value: 'kerala' },
                      { key: 'Goa', value: 'Goa' },
                      { key: 'Tamil Nadu', value: 'tamilNadu' },
                    ]}
                  />
                </div>

                <div className='col-lg-6 col-md-6 col-sm-12'>
                  <FormInputs id={3} name='landMark' type='text' placeholder='' label='Land Mark' value={values['landMark']} onChange={onChange} />
                </div>
                <div className='col-lg-6 col-md-6 col-sm-12'>
                  <FormInputs id={4} name='phoneNumber' type='number' label='Alternate Phone' value={values['phone2']} onChange={onChange} />
                </div>
              </div>
              {isEdit && (
                <button className='theme-btn-one btn-black-overlay btn_sm' type='submit'>
                  Save
                </button>
              )}

              <button className='theme-btn-one btn-black-overlay btn_sm mr-2' type='submit'>
                Save
              </button>
              <button className='theme-btn-one btn-black-overlay btn_sm' type='submit'>
                Cancel
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddressEdits;
