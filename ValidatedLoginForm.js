import React from 'react'
import { Formik } from 'formik'
import * as EmailValidator from "email-validator";
import * as Yup from "yup";

const ValidatedFormLogin = () => (
  
  <Formik
    initialValues={{email:'', password:''}}
    onSubmit={(values, {setSubmitting}) => {
      setTimeout(() => {
        console.log("Logging In yay", values)
        setSubmitting(false)
      }, 500)
    }}
    validate={values => {
      let errors = {}; 
      if (!values.email) {
        errors.email = "Required";
      } else if (!EmailValidator.validate(values.email)) {
        errors.email = "Invalid email address";
      }

      const passwordRegex = /(?=.*[0-9])/;
      if (!values.password) {
        errors.password = "Required";
      } else if (values.password.length < 8) {
        errors.password = "Password must be 8 characters long.";
      } else if (!passwordRegex.test(values.password)) {
        errors.password = "Invalid password. Must contain one number";
      }
console.log(errors)
      return errors;
    }}
  >
    { props => {
      const {
        values,
        touched,
        errors,
        isSubmitting,
        handleChange,
        handleBlur,
        handleSubmit
      } = props;
      return (
        <form onSubmit={handleSubmit}>
          <h1>Validated Form Component</h1>
          <label htmlFor="email">Email</label>
          <input name='email' type='text' placeholder='email' onChange={handleChange} value={values.email}/>
          <label htmlFor="email">Password</label>
          <input name='password' type='text' placeholder='password'onChange={handleChange} value={values.password}/>
          <button type='submit' disabled={isSubmitting}>Login</button>
        </form>
      );
    }}
</Formik>
   
)

export default ValidatedFormLogin;