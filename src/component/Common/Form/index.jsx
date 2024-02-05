import { useState } from 'react';
import './formInput.css';

const FormInput = ({ fieldType = 'text', ...props }) => {
  const chooseInputFeilds = () => {
    try {
      switch (props.type) {
        case 'text':
          return <Textinput {...props} />;
        case 'email':
          return <Textinput {...props} />;
        case 'password':
          return <Textinput {...props} />;
        case 'number':
          return <Textinput {...props} />;
        case 'date':
          return <DateInput {...props} />;
        case 'radio':
          return <Radioinput {...props} />;
        case 'textarea':
          return <TextArea {...props} />;
        case 'select':
          return <SelectInput {...props} />;
        default:
          <div>Sorry no view!</div>;
      }
    } catch (error) {
      console.log('Error in chooseInputFeilds');
    }
  };

  return <>{chooseInputFeilds()}</>;
};

// Text feidls Components........................
const Textinput = (props) => {
  const [focused, setFocused] = useState(false);
  const { label, errorMessage, onChange, required, id, ...inputProps } = props;

  const handleFocus = (e) => {
    setFocused(true);
  };

  return (
    <>
      <div className='default-form-box formInput'>
        <label>
          {label}
          {required && <span className='text-danger'>*</span>}
        </label>
        <input
          {...inputProps}
          className='form-control'
          onChange={onChange}
          onBlur={handleFocus}
          onFocus={() => inputProps.name === 'confirmPassword' && setFocused(true)}
          focused={focused.toString()}
        />
        <span className='error'>{errorMessage}</span>{' '}
      </div>
    </>
  );
};

// Date feidls Components........................
const DateInput = (props) => {
  const [focused, setFocused] = useState(false);
  const { label, errorMessage, onChange, required, id, ...inputProps } = props;

  const handleFocus = (e) => {
    setFocused(true);
  };

  return (
    <>
      <div className='default-form-box formInput'>
        <label>
          {label}
          {required && <span className='text-danger'>*</span>}
        </label>
        <input
          {...inputProps}
          className='form-control'
          onChange={onChange}
          onBlur={handleFocus}
          onFocus={() => inputProps.name === 'confirmPassword' && setFocused(true)}
          focused={focused.toString()}
        />
        <span className='error'>{errorMessage}</span>{' '}
      </div>
    </>
  );
};

const Radioinput = (props) => {
  const [focused, setFocused] = useState(false);
  const { label, errorMessage, onChange, required, id, ...inputProps } = props;

  const handleFocus = (e) => {
    setFocused(true);
  };

  return (
    <>
      <span className='custom-radio mr-2'>
        <input {...inputProps} onChange={onChange} /> {label}
      </span>
    </>
  );
};

// Text area.
const TextArea = (props) => {
  const [focused, setFocused] = useState(false);
  const { label, errorMessage, onChange, required, id, ...inputProps } = props;

  const handleFocus = (e) => {
    setFocused(true);
  };

  return (
    <>
      <div className='mb-4'>
        <label for='exampleFormControlTextarea1'>{label}</label>
        <textarea class='form-control' rows='3' {...inputProps} onChange={onChange}></textarea>
      </div>
    </>
  );
};

// Select .
const SelectInput = (props) => {
  const [focused, setFocused] = useState(false);
  const { label, errorMessage, onChange, required, id, value, ...inputProps } = props;

  const handleFocus = (e) => {
    setFocused(true);
  };

  return (
    <>
      <div className='mb-4'>
        <label for='exampleFormControlSelect1'>{label}</label>
        <select className='form-control' {...inputProps}>
          {value.map((selItem, i) => (
            <option value={selItem.value}>{selItem.key}</option>
          ))}
        </select>{' '}
      </div>
    </>
  );
};

export default FormInput;
