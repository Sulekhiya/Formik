import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const DashBoard = () => (
  <div>
    <h1>Add Banner</h1>
    <Formik
      initialValues={{
        id: "",
        deeplink: "",
        media_key: "",
        name: "",
        start_time: "",
        end_time: "",
        visible_from_time: "",
        visible_till_time: "",
        locations: [],
        ps_properties: [],
        properties: [],
      }}
      validationSchema={Yup.object({
        id: Yup.string().required("Required man!"),
        deeplink: Yup.string().required("Required yo"),
      })}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 100);
      }}
    >
      <Form>
        <Field type="id" name="id" />
        <ErrorMessage name="id" />
        <br></br>
        <Field type="deeplink" name="deeplink" />
        <ErrorMessage name="deeplink" />
        <br></br>
        <Field name="start_time" type="datetime-local" />
        <ErrorMessage name="start_time" />
        <br></br>
        <Field name="visible_from_time" type="time" />
        <ErrorMessage name="visible_from_time" />
        <br></br>
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  </div>
);

export default DashBoard;
