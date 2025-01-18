import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSearch } from "../../context/search";
import axios from "axios";

const HeroSection = () => {
  const [values, setValues] = useSearch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.get(
        `https://shopcart-backend-4f2a.onrender.com/api/v1/product/search/${values.keyword}`
      );
      setValues({ ...values, results: data });
      navigate("/allproducts");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="relative pt-24 bg-yellow-300 sm:bg-transparent md:pt-12  md:h-screen pb-12 sm:pb-16 lg:pt-24">
      {/* SVG Background */}
      <div className="absolute top-0 right-0 -z-10 w-full h-full">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="190 0 340 320">
          <path
            fill="#ffd700"
            fill-opacity="0.58"
            d="M0,96L48,112C96,128,192,160,288,154.7C384,149,480,107,576,122.7C672,139,768,213,864,245.3C960,277,1056,267,1152,272C1248,277,1344,299,1392,309.3L1440,320L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          ></path>
        </svg>
      </div>
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid max-w-lg grid-cols-1 mx-auto lg:max-w-full lg:items-center lg:grid-cols-2 gap-y-12 lg:gap-x-16">
          <div>
            <div className="text-center lg:text-left pt-8">
              <h1 className="text-4xl font-bold pt-5 text-gray-900 lg:text-6xl font-pj">
                Your Book’s Next Story Starts Here
              </h1>
              <div class="max-w-sm mx-auto sm:max-w-md md:max-w-full">
                <div class="mt-8 lg:mt-12 lg:flex lg:items-center">
                  <div class="flex justify-center flex-shrink-0 pb-5 -space-x-4 overflow-hidden lg:justify-start">
                    <img
                      class="inline-block rounded-full w-14 h-14 ring-2 ring-white shadow-lg"
                      src="https://d33wubrfki0l68.cloudfront.net/3bfa6da479d6b9188c58f2d9a8d33350290ee2ef/301f1/images/hero/3/avatar-male.png"
                      alt=""
                    />
                    <img
                      class="inline-block rounded-full w-14 h-14 ring-2 ring-white shadow-lg"
                      src="https://d33wubrfki0l68.cloudfront.net/b52fa09a115db3a80ceb2d52c275fadbf84cf8fc/7fd8a/images/hero/3/avatar-female-1.png"
                      alt=""
                    />
                    <img
                      class="inline-block rounded-full w-14 h-14 ring-2 ring-white shadow-lg"
                      src="https://d33wubrfki0l68.cloudfront.net/8a2efb13f103a5ae2909e244380d73087a9c2fc4/31ed6/images/hero/3/avatar-female-2.png"
                      alt=""
                    />
                  </div>

                  <p class="mt-4 text-lg text-gray-900 lg:mt-0 lg:ml-4 font-pj">
                    <span class="font-bold">Resell, Reuse, and Rediscover</span>{" "}
                    Pre-Loved Books Your Next Favorite Story
                  </p>
                </div>
              </div>
              <form onSubmit={handleSubmit} className="mt-8 sm:mt-10">
                <div className="relative flex bg-white p-2 rounded-full shadow-lg">
                  <input
                    type="search"
                    placeholder="Search Books..."
                    aria-label="Search"
                    value={values.keyword}
                    onChange={(e) =>
                      setValues({ ...values, keyword: e.target.value })
                    }
                    x-model="q"
                    className="block w-full px-4 py-4 text-gray-900 placeholder-gray-900
                                 bg-transparent outline-none focus:border-gray-900 focus:ring-1 focus:ring-gray-900 rounded-xl
                                  sm:border-none sm:focus:ring-0 sm:focus:border-transparent"
                    required=""
                  />
                  <div className="sm:mt-0 sm:absolute sm:inset-y-0 sm:right-0 sm:flex sm:items-center sm:pr-2">
                    <button
                      onClick={handleSubmit}
                      type="submit"
                      className="inline-flex px-6 py-3 text-lg font-bold text-white transition-all duration-200 bg-gray-900 
                                rounded-full focus:outline-none focus:bg-gray-600 font-pj hover:bg-gray-600"
                    >
                      Search
                    </button>
                  </div>
                </div>
              </form>
            </div>

            <div className="hidden md:flex md:items-center justify-center mt-10  lg:justify-start sm:space-x-8">
              <div className="flex items-center">
                <p className="text-3xl font-medium text-gray-900 sm:text-4xl font-pj">
                  2943
                </p>
                <p className="ml-3 text-sm text-gray-900 font-pj">
                  Cards
                  <br />
                  Delivered
                </p>
              </div>

              <div className="hidden sm:block">
                <svg
                  className="text-gray-400"
                  width="16"
                  height="39"
                  viewBox="0 0 16 39"
                  fill="none"
                  stroke="black"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <line
                    x1="0.72265"
                    y1="10.584"
                    x2="15.7226"
                    y2="0.583975"
                  ></line>
                  <line
                    x1="0.72265"
                    y1="17.584"
                    x2="15.7226"
                    y2="7.58398"
                  ></line>
                  <line
                    x1="0.72265"
                    y1="24.584"
                    x2="15.7226"
                    y2="14.584"
                  ></line>
                  <line
                    x1="0.72265"
                    y1="31.584"
                    x2="15.7226"
                    y2="21.584"
                  ></line>
                  <line
                    x1="0.72265"
                    y1="38.584"
                    x2="15.7226"
                    y2="28.584"
                  ></line>
                </svg>
              </div>

              <div className="flex items-center">
                <p className="text-3xl font-medium text-gray-900 sm:text-4xl font-pj">
                  $1M+
                </p>
                <p className="ml-3 text-sm text-gray-900 font-pj">
                  Transaction
                  <br />
                  Completed
                </p>
              </div>
            </div>
          </div>

          <div className="hidden lg:inline -mt-10">
            <img
              className="w-full"
              src="https://github.com/mdalmamunit427/build-full-stack-book-store-mern-app/blob/main/frontend/src/assets/banner.png?raw=true"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
