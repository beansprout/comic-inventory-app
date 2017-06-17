import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import * as actions from '../../actions';

const form = reduxForm({
  form: 'inputData'
});

const renderField = field => (
    <div>
      <div className="input_container">
        <input className="form-control" {...field.input}/>
      </div>
      {field.touched && field.error && <div className="error">{field.error}</div>}
    </div>
);

const renderTextArea = field => (
  <div>
    <div className="input_container">
      <textarea {...field.input}/>
    </div>
    {field.touched && field.error && <div className="error">{field.error}</div>}
  </div>
);

class DataForm extends Component {
  handleFormSubmit({type, message}) {
    this.props.initialize('');
    this.props.handleSubmitDataForm({type, message});
  }

  render() {
     const { handleSubmit } = this.props;

     return (
       <div>
         <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>

           <label>Title:</label>
           <Field name="itemTitle" type="text" component={renderField}/>

           <label>Issue Number:</label>
           <Field name="issueNumber" type="number" component={renderField}/>

           <label>Collection</label>
           <Field name="hoard" type="text" component={renderField}/>

           <button action="submit" className="button">Save changes</button>
         </form>
       </div>
     )
   }
 }

 function mapStateToProps(state) {
   return {
     formValues: state.form
   };
 }

 export default connect(mapStateToProps, actions)(form(DataForm));