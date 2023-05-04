/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthProviders";

const Registration = () => {
  const { user, createUser } = useContext(AuthContext);
  // console.log(createUser);
  const [accpted, setAccepted] = useState(false);
  const [sucess, setSucess] = useState("");
  const [error, setError] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, email, password);

    createUser(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        // ! validation
        if (!/(?=.*[0-9])/.test(password)) {
          setError("please enter number");
        } else if (password.length < 6) {
          setError("please set at least 6 character");
          
        }
        setError(" ");
        form.reset();
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  const handleAccepted = (event) => {
    setAccepted(event.target.checked);
  };

  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col">
          <div className="text-center ">
            <h1 className="text-5xl font-bold">Register now!</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleRegister} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="name"
                  name="name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="text"
                  placeholder="photo URL"
                  name="photo"
                  className="input input-bordered"
                  required
                />
              </div>
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
              </div>

              <div className="form-control">
                <label
                  onClick={handleAccepted}
                  className="label justify-normal gap-2 cursor-pointer"
                >
                  <input type="checkbox" className="checkbox" />
                  <span className="label-text">
                    {
                      <>
                        <span className="text-md font-bold">Accept </span>
                        <Link
                          className="underline text-md font-semibold"
                          to="/terms"
                        >
                          terms and Conditions
                        </Link>
                      </>
                    }
                  </span>
                </label>
              </div>

              <div className="form-control mt-6">
                <button className="btn btn-primary" disabled={!accpted}>
                  Register
                </button>
              </div>
            </form>

            <p className="text-red-500">{error}</p>

            <div className="mb-4 px-8">
              <h2 className="text-lg font-semibold">
                Already Have an Account Please:{" "}
                <span className="text-md font-bold underline">
                  <Link to="/login">LogIn</Link>{" "}
                </span>
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
