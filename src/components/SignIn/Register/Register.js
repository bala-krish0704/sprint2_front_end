import { useCallback, useState } from "react";
import { useFormik } from "formik";
import * as yup from 'yup';
import ReaderService from "../../../service/ReaderService";

export const Register = (props) => {
  const registerFormSchema = yup.object().shape({
    readerName: yup.string().min(3).required(),
    readerEmail: yup.string().email().required(),
    readerMobileNo:yup.string().min(10).required(),
    readerPassword: yup.string().min(8).required(),
    confirmPassword: yup.string().oneOf([yup.ref('readerPassword'), null], 'Passwords must match').required(),
  });

     function handleOnSubmit(event) {
        async function createReader(){
          try{
            ReaderService.createReader(formik.values).then(
              () => {
                alert("Reader Registered Successfully...")
            navigate('/login')
            }) 
            }catch(error)
            {
            console.log(error);
            }
           } 
        

           createReader();
  };

  const formik = useFormik({
     initialValues: {
      readerName: "",
      readerEmail: "",
      readerMobileNo: "",
      readerPassword: ""
  
    },
    validationSchema: registerFormSchema,
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

  return(
    <section style={{ backgroundColor: "#d0dfcd" }}>
      <div className="container h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-lg-12 col-xl-11">
            <div className="card text-black m-5 border" style={{ borderRadius: "1rem" }}>
              <div className="card-body p-0">
                <div className="row justify-content-center">
                  <div className="col-md-6 col-lg-6 col-xl-6 ">

                    {<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAKjKJ_M6KxoJS--HH-ykEAB3Cb9kt9AfkhQ&usqp=CAU"
                      className="img-fluid" alt="Sample image" style={{ borderRadius: "1rem 0 0 1rem ", height: "400px", width: "400px" }} />}

                  </div>
                  <div className="col-md-6 col-lg-6 col-xl-6 py-3">

                    <p className="text-center h1 fw-bold">Register</p>

                    <form  noValidate className="mx-1 mx-md-4" onSubmit={formik.handleSubmit}>

                      <div className="d-flex flex-row align-items-center ">
                        <div className="form-outline flex-fill" style={{ margin: formik.touched.fullName && formik.errors.fullName ? '0.6rem 1rem 0':'1rem'}}>
                          <input type="text" id="form3Example1c" value={formik.values.fullName} className="form-control"  placeholder="fullName"
                            onChange={(e) => onUpdateField("readerName", e.target.value)} />
                          <small style={{ color: "red" }}>{formik.touched.fullName && formik.errors.fullName}</small>
                        </div>
                      </div>

                      <div className="d-flex flex-row align-items-center ">
                        <div className="form-outline flex-fill " style={{ margin: formik.touched.email && formik.errors.email ? '0.6rem 1rem 0':'1rem'}}>
                          <input type="text" id="form3Example5cd" value={formik.values.email} className="form-control" placeholder="email"
                            onChange={(e) => onUpdateField("readerEmail", e.target.value)} />
                          <small style={{ color: "red" }}>{formik.touched.email && formik.errors.email}</small>
                        </div>
                        </div>
                        <div className="d-flex flex-row align-items-center ">
                        <div className="form-outline flex-fill " style={{ margin: formik.touched.mobile && formik.errors.mobile ? '0.6rem 1rem 0':'1rem'}}>
                          <input type="text" id="form3Example4cd" value={formik.values.mobile} className="form-control" placeholder="Enter mobile number"
                            onChange={(e) => onUpdateField("readerMobileNo", e.target.value)} />
                          <small style={{ color: "red" }}>{formik.touched.mobile && formik.errors.mobile}</small>
                        </div>
                        </div>
                        <div className="d-flex flex-row align-items-center">
                          <div className="form-outline flex-fill" style={{ margin: formik.touched.password && formik.errors.password ? '0.6rem 1rem 0':'1rem'}}>
                            <input type="password" id="form3Example4c" className="form-control" value={formik.values.password}   placeholder="Password" 
                             onChange={(e) => onUpdateField("readerPassword", e.target.value)} />
                             <small style={{ color: "red" }}>{formik.touched.password && formik.errors.password}</small> 
                              </div>
                          </div>
                        <div className="d-flex flex-row align-items-center ">
                          <div className="form-outline flex-fill" style={{ margin: formik.touched.confirmPassword && formik.errors.confirmPassword ? '0.6rem 1rem 0':'1rem'}}>
                          <input type="email" id="form3Example3c" value={formik.values.confirmPassword}  className="form-control"  placeholder="Confirm Password"
                             onChange={(e) => onUpdateField("confirmPassword", e.target.value)} />
                             <small style={{ color: "red" }}>{formik.touched.confirmPassword && formik.errors.confirmPassword}</small> 
                          </div>
                        </div>
                        <div className="d-flex justify-content-center mt-2">
                          <button type="submit" className="btn btn-primary btn-lg">Register</button>
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
    }
export default Register;