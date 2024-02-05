import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Swal from 'sweetalert2';
// Components.
import FormInputs from '../Common/Form';

const AccountDetails = () => {
  let dispatch = useDispatch();
  const history = useHistory();
  const [isEdit, setIsEdit] = useState(false);
  const [values, setValues] = useState({
    firstName: '',
    lastName: '',
    email: '',
    gender: '',
    phoneNumber: '',
  });

  let status = useSelector(state => state.user.status);
  let userData = useSelector(state => state.user.user);

  // Onchange values.
  const onChange = e => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  // handle edit form fields.
  const handleIsEditFields = () => {
    try {
      setIsEdit(prevState => !prevState);
    } catch (error) {
      console.log('Error in  handleIsEditFields');
    }
  };

  // Add to cart
  const register = () => {
    dispatch({
      type: 'user/updatedUser',
      payload: {
        firstName: values.firstName,
        lastName: values.lastName,
        gender: values.gender,
        email: values.email,
        phoneNumber: values.phoneNumber,
      },
    });

    Swal.fire({
      icon: 'success',
      title: 'Details Updated Sucessfull',
      text: 'Thank You',
    });
    //   history.push('/my-account');
  };

  console.log('values', values);

  return (
    <>
      <div className='myaccount-content'>
        <div className='save_button  d-flex align-items-center justify-content-left'>
          <h4 className='title'>Profile details</h4>
          {!isEdit && (
            <>
              <button className='theme-btn-one btn-black-overlay btn_sm ml-4' onClick={handleIsEditFields}>
                Edit
              </button>
            </>
          )}
        </div>
        <div className='login_form_container'>
          <div className='account_details_form'>
            <form
              action='#'
              onSubmit={e => {
                e.preventDefault();
                register();
              }}
            >
              <div className='row'>
                <div className='col-lg-6 col-md-6 col-sm-12'>
                  <FormInputs
                    id={1}
                    type='text'
                    label='First name'
                    placeholder='First Name'
                    name='firstName'
                    errorMessage='First name is required!'
                    required={true}
                    value={values['firstName']}
                    onChange={onChange}
                    readOnly={!isEdit}
                  />
                </div>
                <div className='col-lg-6 col-md-6 col-sm-12'>
                  <FormInputs
                    case='text'
                    id={2}
                    type='text'
                    label='Last name'
                    placeholder='First Name'
                    name='lastName'
                    errorMessage='First name is required!'
                    required={true}
                    value={values['lastName']}
                    onChange={onChange}
                    readOnly={!isEdit}
                  />
                </div>
                <div className='col-lg-12 col-md-12 col-sm-12 mb-4'>
                  <label>Your Gender</label>
                  <FormInputs
                    id={3}
                    type='radio'
                    defaultValue='1'
                    name='gender'
                    onChange={onChange}
                    errorMessage='It should be a valid email address!'
                    label='Male'
                    required={true}
                    value={'male'}
                    disabled={!isEdit}
                  />
                  <FormInputs
                    id={3}
                    type='radio'
                    defaultValue='2'
                    name='gender'
                    onChange={onChange}
                    errorMessage='It should be a valid email address!'
                    label='Female'
                    required={true}
                    value={'female'}
                    disabled={!isEdit}
                  />
                  <FormInputs
                    id={3}
                    type='radio'
                    name='gender'
                    onChange={onChange}
                    errorMessage='It should be a valid email address!'
                    label='other'
                    required={true}
                    value={'other'}
                    disabled={!isEdit}
                  />

                  {/* <span className='custom-radio mr-2'>
                    <input type='radio' defaultValue='1' name='gender' onChange={onChangeRadio} /> Male
                  </span>{' '}
                  <span className='custom-radio mr-2'>
                    <input type='radio' defaultValue='2' name='gender' onChange={onChangeRadio} /> Female
                  </span>
                  <span className='custom-radio  mr-2'>
                    <input type='radio' defaultValue='3' name='gender' onChange={onChangeRadio} /> Other
                  </span> */}
                </div>
                <div className='col-lg-6 col-md-6 col-sm-12'>
                  <FormInputs
                    id={3}
                    name='email'
                    type='email'
                    placeholder='Email'
                    errorMessage='It should be a valid email address!'
                    label='Email'
                    required={true}
                    value={values['email']}
                    onChange={onChange}
                    readOnly={!isEdit}
                  />
                </div>
                <div className='col-lg-6 col-md-6 col-sm-12'>
                  <FormInputs
                    id={4}
                    name='phoneNumber'
                    type='number'
                    placeholder='Mobile Number'
                    errorMessage='Mobile number is required!'
                    label='Mobile number'
                    required={true}
                    value={values['phoneNumber']}
                    onChange={onChange}
                    readOnly={!isEdit}
                  />
                </div>
              </div>
              {isEdit && (
                <button className='theme-btn-one btn-black-overlay btn_sm' type='submit'>
                  Save
                </button>
              )}

              {/* <label className='checkbox-default' htmlFor='offer'>
                <input type='checkbox' id='offer' />
                <span className='ml-2'>Receive offers from our partners</span>
              </label>
            <label className='checkbox-default checkbox-default-more-text' htmlFor='newsletter'>
                <input type='checkbox' id='newsletter' />
                <span className='ml-2'>Sign up for our newsletter</span>
                <p className='mt-2'>You may unsubscribe at any moment.</p>
              </label> */}
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AccountDetails;
