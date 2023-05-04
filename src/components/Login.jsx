/* eslint-disable no-unused-vars */
import React from "react";
import { useContext } from "react";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProviders";
import { FaGoogle ,FaGithub } from "react-icons/fa";
import { signInWithPopup } from "firebase/auth";
const Login = () => {
  const { signIn, signInWithGoogle, signInWithGithub} = useContext(AuthContext);
const navigate = useNavigate()
  const location = useLocation()
  console.log(location);

  const from = location.state?.from?.pathname || '/' ;
  console.log(from);

  const handleLogIn = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    signIn(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        form.reset();
        navigate(from, {replace : true})
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        navigate(from, {replace : true})
      })
      .catch((error) => console.log(error));
  };

  const handleGithubSignIn = () =>{
    signInWithGithub()
    .then(result =>{
      const loggedUser = result.user;
      console.log(loggedUser);
      navigate(from, {replace : true})
    })
    .catch(error => console.log(error))
  }

  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col">
          <div className="text-center ">
            <h1 className="text-5xl font-bold">Login now!</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleLogIn} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  name="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  name="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
            <div className="m-4">
              <h2 className="text-lg font-semibold">
                New To Here Please:{" "}
                <span className="text-md font-bold underline">
                  <Link to="/registration">Register</Link>{" "}
                </span>
              </h2>
            </div>
            <div className="py-4 text-center ">
              <button
                onClick={handleGoogleSignIn}
                className="btn btn-outline btn-primary mb-4"
              >
                
                <FaGoogle/> <span className="pl-3">Sign In With Google</span>
              </button>
              <button
                onClick={handleGithubSignIn}
                className="btn btn-outline btn-primary"
              >
                {" "}
                <FaGithub/> <span className="pl-3">Sign In With Github</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
