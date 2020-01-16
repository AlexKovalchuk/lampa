import React, {useEffect} from 'react'
import {Form, Button} from 'react-bootstrap';
import { Field, reduxForm, SubmissionError } from 'redux-form';
import {validateCartForm} from '../store/cart.helpers';
import ReduxFormField from '../../../components/reduxFormField/ReduxFormFIeld';
import './CartForm.scss'

const validate = (formProps) => {
  const errors = {};

  if(!formProps.firstName){
    errors.firstName = "First name is required";
  }

  if(!formProps.lastName){
    errors.lastName = "Last name is required";
  }

  if(!formProps.address){
    errors.address = "Address is required";
  }

  if(!formProps.phone){
    errors.phone = "Phone is required";
  }

  return errors;
};

const CartFormComponent = props => {
  const { handleSubmit, cartForm } = props;
  useEffect(() => {
    // console.log('useEffect cartForm', cartForm)
  }, [cartForm])

  const onClickHandler = () => {
    console.log(' onClickHandlercartForm', cartForm);
    if(!cartForm.syncErrors) handleSubmit()
  };




  return (
    <div className='cart-form-container'>
      <Form>
        <div className='cart-form-field-container'>
          <Field name="firstName" component={ReduxFormField} type="text" label='First Name' />
        </div>
        <div className='cart-form-field-container'>
          <Field name="lastName" component={ReduxFormField} type="text" label='Last Name' />
        </div>
        <div className='cart-form-field-container'>
          <Field name="address" component={ReduxFormField} type="text" label='Address' />
        </div>
        <div className='cart-form-field-container'>
          <Field name="phone" component={ReduxFormField} type="text" label='Phone' />
        </div>
        <div className='cart-form-button-container'>
          <Button
            onClick={onClickHandler}
            variant="primary">Order</Button>
        </div>

      </Form>
    </div>

  )

};

const CartForm = reduxForm({
  // a unique name for the form
  form: 'cartForm',
  touchOnBlur: false,
  validate: validateCartForm,
})(CartFormComponent);

export default CartForm