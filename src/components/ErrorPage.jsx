/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link, useRouteError } from "react-router-dom";
import errorpic from "../assets/error-msg.png";


const ErrorPage = () => {
  
  const { error, status } = useRouteError();
  return (
    <section className="flex items-center h-screen p-16 bg-gray-100 text-gray-900">
      <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
        <div className="max-w-md text-center">
          <img src={errorpic} alt="" loading="lazy" />
          <Link to="/" className="btn">
            Back to homepage
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ErrorPage;
