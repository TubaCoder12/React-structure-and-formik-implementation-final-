import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import "./Form.css";

const MyForm = () => {
  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validate={(values) => {
        const errors = {};
        if (!values.email) {
          errors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(values.email)) {
          errors.email = "Invalid email address";
        }
        if (!values.password) {
          errors.password = "Password is required";
        } else if (values.password.length < 6) {
          errors.password = "Password must be at least 6 characters";
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        console.log("Form Data:", values);
        alert("Data save in console.");
        setSubmitting(false);
        resetForm();
      }}
    >
      {({ isSubmitting }) => (
        <div className="card">
          <h4 className="title">Log In!</h4>
          <Form>
            {/* Email Field */}
            <div className="field">
             
              <Field
                autoComplete="off"
                id="logemail"
                placeholder="Email"
                className="input-field"
                name="email"
                type="email"
              />
             
            </div>
 <ErrorMessage
                name="email"
                component="div"
                className="text-red-500"
              />
            {/* Password Field */}
            <div className="field">
            
              <Field
                autoComplete="off"
                id="logpass"
                placeholder="Password"
                className="input-field"
                name="password"
                type="password"
              />
             
            </div>
 <ErrorMessage
                name="password"
                component="div"
                className="text-red-500"
              />
            <button className="btn" type="submit" disabled={isSubmitting}>
              Login
            </button>
            <a href="#" className="btn-link">
              Forgot your password?
            </a>
          </Form>
        </div>
      )}
    </Formik>
  );
};

export default MyForm;
