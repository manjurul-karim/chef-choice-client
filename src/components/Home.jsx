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
    fetch("http://localhost:5000/chef")
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

        {/* <div className="hero min-h-screen" style={{ backgroundImage: `url("../assets/banner.jpg")` }}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
      <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div> */}
      </div>
      {/* ! Chef Card Section Start */}
      <h2 className="text-center text-4xl font-bold"> Our Chef's</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-y-5">
        {/* <div className="card w-96 bg-base-100 shadow-xl">
          <figure>
            <img
              src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
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
        </div> */}
        
        {
          chefInfo.map(chef => (<Chefcard key={chef.id} chef={chef}>  </Chefcard>))
        }
      </div>
      {/* chef Card Section End */}

      {/* Extra Section One Start */}

      <div className="my-28">
        <h2 className="text-center font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
          {" "}
          What Our Customer's Have to Say
        </h2>
        <div className="flex flex-col md:flex-row justify-between gap-12 mx-4  ">
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
                  checked
                />
              </div>
            </div>
            <div>
              <p>
                {" "}
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
                earum totam similique unde itaque ducimus mollitia tempore rerum
                eaque adipisci dolorum voluptates, quisquam aliquam neque
                exercitationem odit iusto iure numquam cumque corporis.
                Veritatis debitis rem, modi cum quis numquam provident harum
                accusantium delectus similique eos facilis quisquam, corporis
                voluptatum? Temporibus.
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
                    checked
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
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
                  earum totam similique unde itaque ducimus mollitia tempore
                  rerum eaque adipisci dolorum voluptates, quisquam aliquam
                  neque exercitationem odit iusto iure numquam cumque corporis.
                  Veritatis debitis rem, modi cum quis numquam provident harum
                  accusantium delectus similique eos facilis quisquam, corporis
                  voluptatum? Temporibus.
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
          <div className=" bg-base-100 rounded mb-2 p-4 ">
            <div className="flex gap-4 mb-4">
              <img className="h-12 w-12 rounded" src={may09} alt="" />
              <div>
                <h2 className="card-title">New album is released!</h2>
                <p>May 09,2023 - 8.00 PM</p>
              </div>
            </div>
            <div className="flex">
              <figure>
                <img className="h-36 w-72 rounded" src={party1} alt="Album" />
              </figure>
              <div className="card-body">
                <p>Click the button to listen on Spotiwhy app.</p>
              </div>
            </div>
          </div>
          <div className=" bg-base-100 rounded mb-2  p-4 ">
            <div className="flex gap-4 mb-4 ">
              <img className="h-12 w-12 rounded" src={may17} alt="" />
              <div>
                <h2 className="card-title"></h2>
                <p>May 17,2023 - 10.00 PM</p>
              </div>
            </div>
            <div className="flex">
              <figure>
                <img
                  className="h-36 w-72 rounded-sm"
                  src={party2}
                  alt="Album"
                />
              </figure>
              <div className="card-body">
                <p>Click the button to listen on Spotiwhy app.</p>
              </div>
            </div>
          </div>
          <div className=" bg-base-100 rounded mb-2 p-4  ">
            <div className="flex gap-4 mb-4">
              <img className="h-12 w-12 rounded" src={may21} alt="" />
              <div>
                <h2 className="card-title">Girl's hangOut !</h2>
                <p>May 21,2023 - 6.00 PM</p>
              </div>
            </div>
            <div className="flex">
              <figure>
                <img className="h-36 w-72" src={party3} alt="Album" />
              </figure>
              <div className="card-body">
                <p>Click the button to listen on Spotiwhy app.</p>
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
