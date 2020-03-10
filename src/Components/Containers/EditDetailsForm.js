import React, { Component } from "react";
import { Form, Formik, Field } from "formik";
import * as Yup from "yup";
import { InputComponent } from "../InputComponent";
import { Button } from "antd";

const UpdateSchema = Yup.object().shape({
  full_name: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("This field is Required"),

  email: Yup.string()
    .email("Invalid email")
    .required("This field is Required"),

  mobile: Yup.string()
    .matches(/^[6-9]\d{9}$/, {
      message: "Please enter valid number.",
      excludeEmptyString: false
    })
    .required("This field is Required")
});

class EditDetailsForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fields: {}
    };
  }
  render() {
    const { data } = this.props;
    return (
      <div>
        <Formik
          enableReinitialize
          initialValues={{
            full_name: data.full_name || "",
            email: data.email || "",
            mobile: data.mobile || "",
            adhar_number: data.adhar_number || "",
            pan_number: data.pan_number || ""
          }}
          validationSchema={UpdateSchema}
          onSubmit={values => this.props.handleSubmit(data.id, values)}
        >
          {props => {
            return (
              <Form className="form">
                <div className="header">
                  <h2>
                    <p style={{ color: "red", display: "inline" }}>*</p>Name:{" "}
                  </h2>

                  <Field
                    name="full_name"
                    type="text"
                    component={InputComponent}
                    value={props.values.full_name}
                    className="field"
                  />
                </div>
                {props.errors.full_name && (
                  <p style={{ color: "red" }}>{props.errors.full_name}</p>
                )}
                <div className="header">
                  <h2>
                    <p style={{ color: "red", display: "inline" }}>*</p>Email:{" "}
                  </h2>

                  <Field
                    name="email"
                    type="email"
                    component={InputComponent}
                    value={props.values.email}
                    className="field"
                  />
                </div>
                {props.errors.email && (
                  <p style={{ color: "red" }}>{props.errors.email}</p>
                )}
                <div className="header">
                  <h2>
                    <p style={{ color: "red", display: "inline" }}>*</p>Phone:{" "}
                  </h2>
                  <Field
                    name="mobile"
                    type="text"
                    component={InputComponent}
                    value={props.values.mobile}
                    className="field"
                  />
                </div>
                {props.errors.mobile && (
                  <p style={{ color: "red" }}>{props.errors.mobile}</p>
                )}
                <div className="header">
                  <h2>AADHAR: </h2>
                  <Field
                    disabled
                    name="adhar_number"
                    type="text"
                    component={InputComponent}
                    value={props.values.adhar_number}
                    className="field"
                  />
                </div>
                <div className="header">
                  <h2>PAN: </h2>
                  <Field
                    disabled
                    name="pan_number"
                    type="text"
                    component={InputComponent}
                    value={props.values.pan_number}
                    className="field"
                  />
                </div>
                <Button type="primary" htmlType="submit">
                  Update
                </Button>
              </Form>
            );
          }}
        </Formik>
      </div>
    );
  }
}

export default EditDetailsForm;
