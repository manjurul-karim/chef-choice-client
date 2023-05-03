/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const Chefcard = ({chef}) => {
    const {chefPicture ,chefName , yearsOfExperience , numberOfRecipes} =chef
  return (
    <div>
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure>
            <img className="h-72 w-full p-4 rounded-md shadow-lg"
              src={chefPicture}
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              Shoes!
              <div className="badge badge-secondary">NEW</div>
            </h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-start">
              <div className="badge badge-outline">Fashion</div>
              <div className="badge badge-outline">Products</div>
            </div>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      
    </div>
  );
};

export default Chefcard;
