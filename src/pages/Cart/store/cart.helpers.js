export const validateCartForm = (formProps) => {
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