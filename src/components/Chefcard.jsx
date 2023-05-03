/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";

const Chefcard = ({ chef }) => {
  const { chefPicture, chefName, yearsOfExperience, numberOfRecipes, likes } =
    chef;
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img
            className="h-72 w-full p-4 rounded-md shadow-lg"
            src={chefPicture}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{chefName}</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-start">
            <div className="badge badge-outline">
              Experience: {yearsOfExperience}Y
            </div>
            <div className="badge badge-outline">
              Recepies: {numberOfRecipes}
            </div>
           
          </div>
          <div className="card-actions justify-between">
          <div className="badge badge-outline">
              Recepies: {numberOfRecipes}
            </div>
            <Link to="/blog"><button className="btn-link">View Recipe</button></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chefcard;
