/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import { FaRegThumbsUp } from "react-icons/fa";

const Chefcard = ({ chef }) => {
  const { chefPicture, chefName, yearsOfExperience, numberOfRecipes, likes } =
    chef;
  return (
    <div>
      <div className="card w-full bg-base-100 border ">
        <figure>
          <img
            className="h-72 w-full p-4 rounded-md shadow-lg"
            src={chefPicture}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{chefName}</h2>
          <div className="card-actions justify-start ">
            <div className="badge badge-outline hover:font-bold">
              Experience: {yearsOfExperience}Year
            </div>
            <div className="badge badge-outline hover:font-bold">
              Recepies: {numberOfRecipes}
            </div>
          </div>
          <div className="card-actions justify-between">
            <div className="flex  ">
              <FaRegThumbsUp /> {likes}
            </div>
            <Link to="/chefdetails">
              <button className="btn-link">View Recipe</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chefcard;
