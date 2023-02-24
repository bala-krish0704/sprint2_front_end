import { useCallback } from 'react';
import React from 'react';
import { useFormik } from 'formik';
import * as yup from "yup";
import './valid';
import { Link } from 'react-router-dom';

const Login = (props) => {

  const loginFormSchema = yup.object().shape({
    email: yup.string().email('Invalid email').required('Required'),
    password: yup.string().min(8).required(),
  });

  const handleOnSubmit = (values) => {
    const fullData = Object.keys(values)
      .map((key) => values[key])
      .join(" ");
    alert(`User Data = ${fullData}`);
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: ""
    },
    validationSchema: loginFormSchema,
    onSubmit: handleOnSubmit,
  });

  const onUpdateField = useCallback(
    (key, value) =>
      formik.setValues({
        ...formik.values,
        [key]: value,
      }),
    [formik]
  );

  return (
    <section style={{ backgroundColor: "White" }}>
      <div className="container h-100">
        <div className="row d-flex justify-content-center align-items-center h-100 w-100">
          <div className="col col-xl-10">
            <div className="card m-5" style={{ borderRadius: "1rem" }}>
              <div className="row g-0">
                <div className="col-md-6 col-lg-6 d-none d-md-block p-0">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfQWSXHobQ8oV3qqIibJDRBURzL4HmEbdl0w&usqp=CAU"
                    alt="login form" style={{ borderRadius: "1rem 0 0 1rem ", height: "400px", width: "400px" }} />
                </div>
                <div className="col-md-6 col-lg-6 p-0 d-flex align-items-center">
                  <div className="card-body p-3 p-md-7 text-black">
                    <form  noValidate onSubmit={formik.handleSubmit}>
                      <h2 className="fw-normal text-center mb-5" style={{ letterSpacing: "1px" }}><b>Login</b></h2>
                      <div className="form-outline mb-4">
                        <input type="email" id="form2Example17" value={formik.values.email}
                          className="form-control" placeholder="Email Addresss" onChange={(e) => onUpdateField("email", e.target.value)} />
                        <small style={{ color: "red" }}>{formik.touched.email && formik.errors.email}</small>
                      </div>
                      <div className="form-outline mb-4">
                        
					  <input type="text"  className="form-control"     required value={formik.values.password} placeholder="password" 
                          onChange={(e) => onUpdateField("password", e.target.value)}  />
                        <small style={{ color: "red" }}>{formik.touched.password && formik.errors.password}</small> <br />
                        <div classNameName="form-group" > 
                        
                  </div>
                      </div>
                      <div className="pt-1 mb-4">
                        <button className="btn btn-dark btn-lg btn-block"
                          type="submit"
                          >Login</button>
                      </div>

                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
};
export default Login;