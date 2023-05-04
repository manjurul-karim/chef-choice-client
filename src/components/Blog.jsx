/* eslint-disable no-unused-vars */
import React from "react";

const Blog = () => {
  return (
    <div>
      <div className="my-container">
        <div className="max-w-xl sm:mx-auto lg:max-w-2xl">
          <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
              Blog Section!!!
            </h2>
          </div>
        </div>
        <div className="max-w-screen-xl sm:mx-auto p-4">
          <div className="grid grid-cols-1 gap-16 row-gap-8 lg:grid-cols-2">
            <div className="space-y-8">
              <div className="border-2 shadow-2xl p-4">
                <h5 className="mb-4 text-xl font-medium">
                  Tell us the differences between uncontrolled and controlled
                  components.
                </h5>
                <p className="text-gray-700">
                  Uncontrolled components are those that manage their own state
                  and don't receive any external control or synchronization.
                  They typically don't have a well-defined API and can be
                  difficult to work with, especially in larger systems. Examples
                  of uncontrolled components include input fields, checkboxes,
                  and radio buttons.{" "}
                </p> <br />
                <p>
                  Controlled components, on the other hand, are components that
                  receive their state and behavior from external sources, such
                  as a parent component or a state management library. They have
                  a well-defined API and are easier to work with and reason
                  about. Examples of controlled components include form elements
                  that are managed by a parent component, or components that use
                  Redux or MobX for state management.
                </p>
              </div>
              <div className="border-2 shadow-2xl p-4">
                <h5 className="mb-4 text-xl font-medium">
                  How to validate React props using PropTypes ?
                </h5>
                <p className="text-gray-700">
                  React provides a utility library called PropTypes for
                  validating the props that are passed to a component. PropTypes
                  allows you to specify the types and shapes of the props that a
                  component expects, which helps catch errors and make your code
                  more robust.
                </p>
              </div>
            </div>

            <div className="space-y-8">
              <div className="border-2 shadow-2xl p-4">
                <h5 className="mb-4 text-xl font-medium">
                  Tell us the difference between nodejs and express js.
                </h5>
                <p className="text-gray-700">
                  React provides a utility library called PropTypes for
                  validating the props that are passed to a component. PropTypes
                  allows you to specify the types and shapes of the props that a
                  component expects, which helps catch errors and make your code
                  more robust.
                </p>
              </div>
              <div className="border-2 shadow-2xl p-4">
                <h5 className="mb-4 text-xl font-medium">
                  What is a custom hook, and why will you create a custom hook?
                </h5>
                <p className="text-gray-700">
                  A custom hook in React is a reusable function that contains
                  some logic that can be shared across multiple components.
                  Custom hooks are similar to regular hooks in React, such as
                  useState and useEffect, but they are created by the developer
                  rather than provided by the React framework. Custom hooks
                  allow developers to abstract away complex logic and create
                  reusable pieces of code that can be used across multiple
                  components. They can help make components more readable and
                  maintainable by separating concerns and reducing code
                  duplication.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
