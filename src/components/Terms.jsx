/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";

const Terms = () => {
  return (
    <div>
      <h2>Terms And Conditons</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
        sapiente at perferendis culpa, odio optio ducimus mollitia vitae,
        debitis nulla illo adipisci, consequuntur quisquam deleniti dolore
        maiores? Dolorum animi veniam saepe! Delectus quas nemo cum
        exercitationem, saepe nihil at praesentium itaque suscipit assumenda
        architecto quidem tenetur nostrum, vero rem neque!
      </p>
      <div className="m-4">
              <h2 className="text-lg font-semibold">
                Go Back To:{" "}
                <span className="text-md font-bold underline">
                  <Link to="/registration">Register</Link>{" "}
                </span>
              </h2>
            </div>
    </div>
  );
};

export default Terms;
