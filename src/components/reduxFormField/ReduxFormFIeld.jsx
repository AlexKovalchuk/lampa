import React from 'react';
import './ReduxFormFIeld.scss'

const ReduxFormField = props => {
  const { input, label, type, meta: { visited, error } } = props;

  return (
      <div className='redux-form-field-container'>
        <input {...input} placeholder={label} type={type} />
        {visited && error && <span className='redux-form-field-error'>{error}</span>}
      </div>
  );
};

export default ReduxFormField;