import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Swal from 'sweetalert2';
import { useHistory } from 'react-router-dom';
// Components.
import FromInput from '../Common/Form';

const RegisterArea = () => {
  let dispatch = useDispatch();
  const history = useHistory();
  const [values, setValues] = useState({
    name: '',
    email: '',
    phoneNumber: 0,
    birthday: '',
    password: '',
    confirmPassword: '',
  });

  let status = useSelector((state) => state.user.status);
  let userData = useSelector((state) => state.user.user);

  // Onchange values.
  const onChange = (e) => {
    console.log('e----', e.target.name, e.target.value);
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  // Add to cart
  const register = () => {
    if (status) {
      Swal.fire({
        icon: 'question',
        title: 'Mr. ' + userData.name,
        html: 'You are already Registered <br />' + 'You can go to <b>' + 'Dashboard</b> ' + 'or our <b>Shop</b> page',
      }).then((result) => {
        if (result.isConfirmed) {
          history.push('/my-account');
        } else {
          // not clicked
        }
      });
    } else {
      dispatch({ type: 'user/register', payload: { user: values.name, email: values.email, password: values.password } });

      Swal.fire({
        icon: 'success',
        title: 'Registration Sucessfull',
        text: 'Welcome Mr.' + values.name,
      });
      history.push('/my-account');
    }
  };
  console.log('values----', values);

  return (
    <>
      <section id='login_area' className='ptb-100'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-6 offset-lg-3 col-md-12 col-sm-12 col-12'>
              <div className='account_form'>
                <h3>Register</h3>
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    register();
                  }}
                >
                  <FromInput
                    id={1}
                    name='name'
                    type='text'
                    placeholder='Name'
                    errorMessage='Name should be have minumum 2 letters!'
                    label='Name'
                    required={true}
                    value={values['name']}
                    onChange={onChange}
                  />
                  <FromInput
                    id={3}
                    name='email'
                    type='email'
                    placeholder='Email'
                    errorMessage='It should be a valid email address!'
                    label='Email'
                    required={true}
                    value={values['email']}
                    onChange={onChange}
                  />
                  <FromInput
                    id={10}
                    name='phoneNumber'
                    type='number'
                    placeholder='Phone Number'
                    errorMessage='Phone number should be have minumum 2 letters!'
                    label='Phone number'
                    pattern='/^\d{10}$/'
                    required={true}
                    value={values['phoneNumber']}
                    onChange={onChange}
                    minlength='9'
                    maxlength='9'
                    autocomplete='off'
                  />
                  <FromInput id={3} name='birthday' type='date' placeholder='Birthday' label='Birthday' value={values['birthday']} onChange={onChange} />
                  <FromInput
                    id={4}
                    name='password'
                    type='password'
                    placeholder='password'
                    errorMessage='Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!'
                    label='Password'
                    pattern='^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$'
                    required={true}
                    value={values['password']}
                    onChange={onChange}
                  />{' '}
                  <FromInput
                    id={2}
                    name='confirmPassword'
                    type='password'
                    placeholder='Confirm Password'
                    errorMessage={`Passwords don't match!`}
                    label='Confirm Password'
                    pattern={values.password}
                    required={true}
                    value={values['confirmPassword']}
                    onChange={onChange}
                  />
                  <div className='login_submit'>
                    <button className='theme-btn-one btn-black-overlay btn_md' type='submit'>
                      Register
                    </button>
                  </div>
                  {/* <div className='default-form-box'>
                    <label>
                      Name<span className='text-danger'>*</span>
                    </label>
                    <input type='text' className='form-control' value={user} onChange={e => setUser(e.currentTarget.value)} required />
                  </div>
                  <div className='default-form-box'>
                    <label>
                      Phone number<span className='text-danger'>*</span>
                    </label>
                    <input type='number' className='form-control' value={email} onChange={e => setEmail(e.currentTarget.value)} required />
                  </div>
                  <div className='default-form-box'>
                    <label>
                      Email<span className='text-danger'>*</span>
                    </label>
                    <input type='email' className='form-control' value={email} onChange={e => setEmail(e.currentTarget.value)} required />
                  </div>
                  <div className='default-form-box'>
                    <label>
                      Passwords<span className='text-danger'>*</span>
                    </label>
                    <input
                      type='password'
                      className='form-control'
                      value={pass}
                      onChange={e => setPass(e.currentTarget.value)}
                      required
                      minLength='8'
                    />
                  </div>
                  <div className='default-form-box'>
                    <label>
                      Conform Passwords<span className='text-danger'>*</span>
                    </label>
                    <input
                      type='password'
                      className='form-control'
                      value={pass}
                      onChange={e => setPass(e.currentTarget.value)}
                      required
                      minLength='8'
                    />
                  </div>
                  <div className='login_submit'>
                    <button className='theme-btn-one btn-black-overlay btn_md' type='submit'>
                      Register
                    </button>
                  </div> */}
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default RegisterArea;
