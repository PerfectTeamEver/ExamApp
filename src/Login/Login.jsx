/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import UseForm from "./UseForm";
import Validation from "./Validation";

const Login = ({ Submit }) => {
  const { values, GetValues, OnSubmit, validate, submitting } =
    UseForm(Validation);
  submitting && Submit(true);

  return (
    <div className="login text-light" style={{ height: "100vh" }}>
      <div className="container d-flex justify-content-center align-items-center">
        <div className="col-12 col-sm-8 col-lg-5 bg-dark text-light p-3 p-4 px-5 rounded-3 mt-5">
          <h2 className="text-center">Login</h2>
          <form onSubmit={OnSubmit} className="col-12">
            <div className="mb-3">
              <label htmlFor="username" className="form-label">
                Username
              </label>
              <input
                type="text"
                className="form-control"
                name="username"
                id="username"
                value={values.username}
                placeholder="Enter username"
                onChange={(e) => GetValues(e)}
              />
              <p className="mt-1 text-danger">{validate.userError}</p>
            </div>

            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                name="email"
                id="email"
                placeholder="Enter email"
                onChange={(e) => GetValues(e)}
              />
              <p className="mt-1 text-danger">{validate.emailError}</p>
            </div>

            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                name="password"
                id="password"
                placeholder="Enter password"
                onChange={(e) => GetValues(e)}
              />
              <p className="mt-1 text-danger">{validate.passwordError}</p>
            </div>

            <div className="mb-3">
              <input
                type="checkbox"
                className="form-check-input"
                id="checkbox"
              />
              <label htmlFor="checkbox" className="forn-check-label ms-2">
                Remember me
              </label>
            </div>

            <div className="form-text text-center">
              If you have not an account, click <a href="#">here</a>
            </div>

            <input
              className="btn btn-primary mt-4"
              type="submit"
              value="Log in"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
