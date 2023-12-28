import React from "react";
import { Form } from "react-bootstrap";
import { useField } from "formik";

function InoutField({ field, form, label, ...props }) {
  const fielName = field.name;

  return (
    <>
      <Form.Label>{label}</Form.Label>
      {...field}
      {...props}
    </>
  );
}

export default InoutField;
