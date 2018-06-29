import React from "react";
import "./Login.css";

// Using the datalist element we can create autofill suggestions based on the props.breeds array
const Login = props => (
            <div className="col-lg-4">
              <form className="search">
                <div className="form-group">
                  <label htmlFor="login">Email:</label>
                  <input
                    name="email"
                    list="email"
                    type="text"
                    className="form-control"
                    placeholder="Login"
                    id="login"
                  />
                  <button
                    type="submit"
                    className="btn btn-success"
                  >
                    Login
                  </button>
                </div>
              </form>
            </div>  
          );
          
          export default Login;
