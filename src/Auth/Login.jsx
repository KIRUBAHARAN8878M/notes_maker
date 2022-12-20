import React from 'react'
import { useFormik } from "formik";
import axios from "axios";
import { env } from "../config";
import { Link, useNavigate } from "react-router-dom";
function Login() {
    let navigate = useNavigate();
    
  
    let formik = useFormik({
      initialValues: {
        email: "",
        password: "",
      },
      validate: (values) => {
        let errors = {};
  
        if (values.email === "") {
          errors.email = "Please enter email";
        }
        if (values.password === "") {
          errors.password = "Please enter password";
        }
  
        return errors;
      },
  
      onSubmit: async (values) => {
        try {
          let loginData = await axios.post(`${env.api}/users/login`, values);
          console.log(loginData);
  
          if (loginData.data.token) {
            if (loginData.status === 200) {
  
              navigate("/portal/home");
              window.localStorage.setItem("app-token", loginData.data.token);
              window.localStorage.setItem("userid", loginData.data.user._id);
              window.localStorage.setItem("username", loginData.data.user.username);
              window.localStorage.setItem("useremail", loginData.data.user.email);
             
            }
          } else {
            alert(loginData.data.message);
          }
        } catch (error) {
          alert(error.response.data.message);
          console.log(error);
        }
      },
    });
  
  
  
  
  
    return (
     
      
        <div className="container login">
          <span className="row d-flex align-content-center justify-content-center ">
            <span className="col-lg-4 col-md-6 col-sm-9 pt-5 ">
           
              <div className="card o-hidden border-0 shadow-lg  mt-3 transp pt-5 d-flex align-content-center">
                <div className="card-body p-2">
                  {/* <!-- Nested Row within Card Body --> */}
                <div className="row">
                    <div className="col-lg-9 mx-auto">
                      <div className="p-0">
  
                        
                        <div className="  text-center pb-5">
                          <h4 className="">
                            Welcome To Login Page!
                          </h4>

                        </div>
  
  
  
                        <form className="user" onSubmit={formik.handleSubmit}>
                          <div className="form-group pb-3">
                            <input
                              className={`form-control ${
                                formik.errors.email ? `input-error` : ``
                              }`}
                              id="exampleInputEmail"
                              type={"email"}
                              value={formik.values.email}
                              onChange={formik.handleChange}
                              name="email"
                              placeholder="Enter Email Address..."
                            />
                            <span style={{ color: "red" }}>
                              {formik.errors.email}
                            </span>
                          </div>
                          <div className="form-group pb-4">
                            <input
                              className={`form-control ${
                                formik.errors.password ? `input-error` : ``
                              }`}
                              id="exampleInputPassword"
                              type={"password"}
                              value={formik.values.password}
                              onChange={formik.handleChange}
                              placeholder="Password"
                              name="password"
                            />
                            <span style={{ color: "red" }}>
                              {formik.errors.password}
                            </span>
                          </div>
                         
  
                          <button
                            type="submit"
                            className="btn btn-outline-primary container fw-bold myname"
                          // onClick={login}
                          >
                            LOGIN
                          </button>
                        </form>
                        <div className="text-center fw-bold mt-2 pt-2 pb-4">
                          <p>
                            Don't have an Account ? 
                            <Link to={"/register"}> Register</Link>
                          </p>
                        </div>
                      
                      </div>
                      <div className="text-center">
                        <strong>For Testing</strong>
                        <br />
                        <h6>Email: kirubaharan8878m@gmail.com</h6>
                        <h6>Pass: 123456</h6>
                    </div>
                    </div>
                  </div>
                </div>
                </div>
            </span>
          </span>
        </div>
   
    );
  }
  
  export default Login;