import React from "react";
import Layout from "./../components/Layout/Layout";

const About = () => {
  return (
    <Layout title={"About Us - Book Haven"}>
      <section class="pt-32 relative">
        <div class="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
          <div class="w-full justify-start items-center gap-12 grid lg:grid-cols-2 grid-cols-1">
            <div class="w-full justify-center items-start gap-6 grid sm:grid-cols-2 grid-cols-1 lg:order-first order-last">
              <div class="pt-24 lg:justify-center sm:justify-end justify-start items-start gap-2.5 flex">
                <img
                  class=" rounded-xl object-cover"
                  src="https://pagedone.io/asset/uploads/1717741205.png"
                  alt="about Us image"
                />
              </div>
              <img
                class="sm:ml-0 ml-auto rounded-xl object-cover"
                src="https://pagedone.io/asset/uploads/1717741215.png"
                alt="about Us image"
              />
            </div>
            <div class="w-full flex-col justify-center lg:items-start items-center gap-10 inline-flex">
              <div class="w-full flex-col justify-center items-start gap-8 flex">
                <div class="w-full flex-col justify-start lg:items-start items-center gap-3 flex">
                  <h2 class="text-gray-900 text-4xl font-bold font-manrope leading-normal lg:text-start text-center">
                    Welcome to Book Haven
                  </h2>
                  <p class="text-gray-500 text-base font-normal leading-relaxed lg:text-start text-center">
                    At <strong>Book Haven</strong>, we are passionate about
                    connecting book lovers with their next great read. Whether
                    you’re looking to buy your favourite novels, sell pre-loved
                    books, or discover hidden gems, our platform is your
                    one-stop solution for all things books
                  </p>
                </div>
                <div class="w-full lg:justify-start justify-center items-center sm:gap-10 gap-5 inline-flex">
                  <div class="flex-col justify-start items-start inline-flex">
                    <h3 class="text-gray-900 text-4xl font-bold font-manrope leading-normal">
                      33+
                    </h3>
                    <h6 class="text-gray-500 text-base font-normal leading-relaxed">
                      Years of Experience
                    </h6>
                  </div>
                  <div class="flex-col justify-start items-start inline-flex">
                    <h4 class="text-gray-900 text-4xl font-bold font-manrope leading-normal">
                      125+
                    </h4>
                    <h6 class="text-gray-500 text-base font-normal leading-relaxed">
                      Successful Projects
                    </h6>
                  </div>
                  <div class="flex-col justify-start items-start inline-flex">
                    <h4 class="text-gray-900 text-4xl font-bold font-manrope leading-normal">
                      52+
                    </h4>
                    <h6 class="text-gray-500 text-base font-normal leading-relaxed">
                      Happy Clients
                    </h6>
                  </div>
                </div>
              </div>
              <button
                class="sm:w-fit w-full text-black px-5 py-2 bg-yellow-300 hover:bg-indigo-800 transition-all 
              duration-700 ease-in-out rounded-full shadow-xl shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex"
              >
                <span class="px-1.5  text-sm font-medium leading-6">
                  Contact Us
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
