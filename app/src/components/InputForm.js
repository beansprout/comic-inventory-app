import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

let InputForm = props => {
  const { handleSubmit } = props
  return (
    <form onSubmit={ handleSubmit }>
      { /* form body*/ }
    </form>
  )
};

createReduxForm = reduxForm({ form: 'userDataInput' });
InputForm = createReduxForm(InputForm);

export default InputForm;