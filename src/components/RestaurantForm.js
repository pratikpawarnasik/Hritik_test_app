// src/components/RestaurantForm.js
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./RestaurantForm.css"; // Import the CSS file for styling

const RestaurantForm = ({ initialValues, onSubmit }) => {
  const validationSchema = Yup.object({
    name: Yup.string().required("Required"),
    description: Yup.string().required("Required"),
    location: Yup.string().required("Required"),
    cuisine: Yup.string().required("Required"), // Add validation for cuisine
  });

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      <Form className="restaurant-form">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <Field name="name" type="text" className="form-control" />
          <ErrorMessage name="name" component="div" className="error-message" />
        </div>

        <div className="form-group">
          <label htmlFor="description">Description</label>
          <Field name="description" type="text" className="form-control" />
          <ErrorMessage
            name="description"
            component="div"
            className="error-message"
          />
        </div>

        <div className="form-group">
          <label htmlFor="location">Location</label>
          <Field name="location" type="text" className="form-control" />
          <ErrorMessage
            name="location"
            component="div"
            className="error-message"
          />
        </div>

        <div className="form-group">
          <label htmlFor="cuisine">Cuisine</label>
          <Field name="cuisine" type="text" className="form-control" />
          <ErrorMessage
            name="cuisine"
            component="div"
            className="error-message"
          />
        </div>

        <button type="submit" className="submit-button">
          Submit
        </button>
      </Form>
    </Formik>
  );
};

export default RestaurantForm;
