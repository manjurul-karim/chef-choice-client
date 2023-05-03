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
        <div className="max-w-screen-xl sm:mx-auto">
          <div className="grid grid-cols-1 gap-16 row-gap-8 lg:grid-cols-2">
            <div className="space-y-8">
              <div>
                <h5 className="mb-4 text-xl font-medium">
                  Tell us the differences between uncontrolled and controlled
                  components.
                </h5>
                <p className="text-gray-700">
                  Context is primarily used when some data needs to be
                  accessible by many components at different nesting levels.
                  Apply it sparingly because it makes component reuse more
                  difficult. If you only want to avoid passing some props
                  through many levels, component composition is often a simpler
                  solution than context.
                </p>
              </div>
              <div>
                <h5 className="mb-4 text-xl font-medium">
                  How to validate React props using PropTypes
                </h5>
                <p className="text-gray-700">
                  A custom hook in React is a reusable function that
                  encapsulates common logic that can be shared across multiple
                  components. Custom hooks allow you to extract and reuse
                  stateful logic from functional components, which can help
                  simplify your code, make it more modular and easier to
                  maintain.
                </p>
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <h5 className="mb-4 text-xl font-medium">
                  Tell us the difference between nodejs and express js.
                </h5>
                <p className="text-gray-700">
                  useRef is a hook in React that allows you to create a
                  reference to a DOM element or to a value that persists across
                  component renders. It returns an object with a current
                  property, which is initialized to the passed argument.
                </p>
              </div>
              <div>
                <h5 className="mb-4 text-xl font-medium">
                  What is a custom hook, and why will you create a custom hook?
                </h5>
                <p className="text-gray-700">
                  useMemo is a hook in React that allows you to optimize the
                  performance of your components by memoizing the results of
                  expensive computations. It takes a function and an array of
                  dependencies, and returns a memoized value that is only
                  recomputed when one of the dependencies changes. In other
                  words, useMemo allow
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
