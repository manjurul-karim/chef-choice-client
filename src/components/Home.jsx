/* eslint-disable react/no-unknown-property */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import banner from "../assets/banner.png";
import party1 from "../assets/party-1.jpg";
import party2 from "../assets/party-2.jpg";
import party3 from "../assets/party-3.jpg";
import may17 from "../assets/may-17.jpg";
import may09 from "../assets/may-9.jpg";
import may21 from "../assets/may-21.jpg";
import Chefcard from "./Chefcard";

const Home = () => {
  const [chefInfo, setChefInfo] = useState([]);

  useEffect(() => {
    fetch("https://assignment-10-server-manjurul-karim.vercel.app/chef")
      .then((res) => res.json())
      .then((data) => setChefInfo(data))
      .catch((error) => console.error(error));
  }, []);
  return (
    <div className="">
      <div>
        <div className="hero min-h-screen ">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <img src={banner} className=" w-2/3 rounded-md " />
            <div className="pl-12">
              <h1 className="text-5xl  font-bold">
                Welcome To the Chef's Choice
              </h1>
              <p className="py-6">
                Amazing Food for Amazing People.Lot of bengali dishes are
                available made by world's famous chef.Our Comitment is Making
                hygenic and Healthy food .
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* ! Chef Card Section Start */}
      <h2 className="text-center text-4xl font-bold"> Our Chef's</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 px-4">
        {chefInfo.map((chef) => (
          <Chefcard key={chef.id} chef={chef}>
            {" "}
          </Chefcard>
        ))}
      </div>
      {/* chef Card Section End */}

      {/* Extra Section One Start */}

      <div className="my-28">
        <h2 className="text-center font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 my-8">
          {" "}
          What Our Customer's Have to Say
        </h2>
        <div className="flex flex-col md:flex-row justify-between gap-8 mx-4  ">
          <div className="border rounded p-3">
            <div className="flex justify-between my-4">
              <h2 className="text-xl font-semibold">
                Beautiful View And Healthy Food
              </h2>

              <div className="rating flex justify-center">
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                  defaultChecked
                />
              </div>
            </div>
            <div>
              <p>
                {" "}
                This cozy restaurant has left the best impressions! Hospitable
                hosts, delicious dishes, beautiful presentation, wide wine list
                and wonderful dessert. I recommend to everyone! I would like to
                come back here again and again.It’s a great experience. The
                ambiance is very welcoming and charming. Amazing wines, food and
                service. Staff are extremely knowledgeable and make great
                recommendations.
              </p>
            </div>
          </div>
          <div>
            <div className="border rounded p-3 ">
              <div className="flex justify-between my-4">
                <h2 className=" text-xl font-semibold">
                  Beautiful View And Healthy Food
                </h2>

                <div className="rating ">
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                    defaultChecked
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                </div>
              </div>
              <div>
                <p>
                  {" "}
                  This place is great! Atmosphere is chill and cool but the
                  staff is also really friendly. They know what they’re doing
                  and what they’re talking about, and you can tell making the
                  customers happy is their main priority. Food is pretty good,
                  some italian classics and some twists, and for their prices
                  it’s 100% worth it.Very good service, good menu … not overly
                  extensive. 
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Extra Section One End */}

      {/* Extra Section Two Start */}

      <div className=" ml-5 mr-5 ">
        <h2 className=" my-12 text-center font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
          UPComing Calander Of Event
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pb-8 ">
          <div className=" bg-base-100 rounded mb-2 p-4 border-2 ">
            <div className="flex gap-4 mb-4">
              <img className="h-12 w-12 rounded" src={may09} alt="" />
              <div>
                <h2 className="card-title">New album is released!</h2>
                <p>May 09,2023 - 8.00 PM</p>
              </div>
            </div>
            <div className="flex">
              <figure>
                <img className="h-28 w-72 rounded" src={party1} alt="Album" />
              </figure>
              <div className="card-body">
                <p>
                  new Album realised and a party is comming knock at the door!!
                  Ready guys!!
                </p>
              </div>
            </div>
          </div>
          <div className=" bg-base-100 rounded mb-2  p-4 border-2 ">
            <div className="flex gap-4 mb-4 ">
              <img className="h-12 w-12 rounded" src={may17} alt="" />
              <div>
                <h2 className="card-title">Boy's HangOut</h2>
                <p>May 17,2023 - 10.00 PM</p>
              </div>
            </div>
            <div className="flex">
              <figure>
                <img
                  className="h-28 w-72 rounded-sm"
                  src={party2}
                  alt="Album"
                />
              </figure>
              <div className="card-body">
                <p>
                  All Boys are invited,its our mega party segment .we offer you
                  our delicious and fomous dishes
                </p>
              </div>
            </div>
          </div>
          <div className=" bg-base-100 rounded mb-2 p-4 border-2 ">
            <div className="inline-flex gap-4 mb-4">
              <img className="h-12 w-12 rounded" src={may21} alt="" />
              <div>
                <h2 className="card-title">Girl's hangOut !</h2>
                <p>May 21,2023 - 6.00 PM</p>
              </div>
            </div>
            <div className="inline-flex">
              <figure>
                <img className="h-28 w-72" src={party3} alt="Album" />
              </figure>
              <div className="card-body">
                <p>
                  Girl's are our special customer,we arranged a special party
                  especially for this town's girls.Hope you enjoy it.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    //  ! Extra Section two End
  );
};

export default Home;
