import React from "react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="pt-12 bg-yellow-300 h-screen pb-12 sm:pb-16 lg:pt-24">
    <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid max-w-lg grid-cols-1 mx-auto lg:max-w-full lg:items-center lg:grid-cols-2 gap-y-12 lg:gap-x-16">
            <div>
                <div className="text-center lg:text-left">
                    <h1 className="text-4xl font-bold pt-5 text-gray-900 lg:text-6xl font-pj">A special credit card made for Developers.</h1>
                    <div class="max-w-sm mx-auto sm:max-w-md md:max-w-full">

                        <div class="mt-8 lg:mt-12 lg:flex lg:items-center">
                            <div class="flex justify-center flex-shrink-0 -space-x-4 overflow-hidden lg:justify-start">
                                <img class="inline-block rounded-full w-14 h-14 ring-2 ring-white" src="https://d33wubrfki0l68.cloudfront.net/3bfa6da479d6b9188c58f2d9a8d33350290ee2ef/301f1/images/hero/3/avatar-male.png" alt="" />
                                <img class="inline-block rounded-full w-14 h-14 ring-2 ring-white" src="https://d33wubrfki0l68.cloudfront.net/b52fa09a115db3a80ceb2d52c275fadbf84cf8fc/7fd8a/images/hero/3/avatar-female-1.png" alt="" />
                                <img class="inline-block rounded-full w-14 h-14 ring-2 ring-white" src="https://d33wubrfki0l68.cloudfront.net/8a2efb13f103a5ae2909e244380d73087a9c2fc4/31ed6/images/hero/3/avatar-female-2.png" alt="" />
                            </div>

                            <p class="mt-4 text-lg text-gray-900 lg:mt-0 lg:ml-4 font-pj">Join with <span class="font-bold">4600+ Developers</span> and start getting feedbacks right now</p>
                        </div>
                    </div>
                    <form action="#" method="POST" className="mt-8 sm:mt-10">
                        <div className="relative bg-white p-2 rounded-full sm:border sm:border-gray-400 group  sm:focus-within:ring-1
                         sm:focus-within:ring-gray-900 sm:focus-within:border-gray-900">
                            <input
                                type="email"
                                name=""
                                id=""
                                placeholder="Search Books.."
                                className="block w-full px-4 py-4 text-gray-900 placeholder-gray-900 bg-transparent border border-gray-400 outline-none focus:border-gray-900 focus:ring-1 focus:ring-gray-900 rounded-xl sm:border-none sm:focus:ring-0 sm:focus:border-transparent"
                                required=""
                            />
                            <div className="mt-4 sm:mt-0 sm:absolute sm:inset-y-0 sm:right-0 sm:flex sm:items-center sm:pr-2">
                                <button type="submit" className="inline-flex px-6 py-3 text-lg font-bold text-white transition-all duration-200 bg-gray-900 
                                rounded-full focus:outline-none focus:bg-gray-600 font-pj hover:bg-gray-600">
                                  Search
                                  </button>
                            </div>
                        </div>
                    </form>
                </div>

                <div className="flex items-center justify-center mt-10 space-x-6 lg:justify-start sm:space-x-8">
                    <div className="flex items-center">
                        <p className="text-3xl font-medium text-gray-900 sm:text-4xl font-pj">2943</p>
                        <p className="ml-3 text-sm text-gray-900 font-pj">Cards<br />Delivered</p>
                    </div>

                    <div className="hidden sm:block">
                        <svg className="text-gray-400" width="16" height="39" viewBox="0 0 16 39" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <line x1="0.72265" y1="10.584" x2="15.7226" y2="0.583975"></line>
                            <line x1="0.72265" y1="17.584" x2="15.7226" y2="7.58398"></line>
                            <line x1="0.72265" y1="24.584" x2="15.7226" y2="14.584"></line>
                            <line x1="0.72265" y1="31.584" x2="15.7226" y2="21.584"></line>
                            <line x1="0.72265" y1="38.584" x2="15.7226" y2="28.584"></line>
                        </svg>
                    </div>

                    <div className="flex items-center">
                        <p className="text-3xl font-medium text-gray-900 sm:text-4xl font-pj">$1M+</p>
                        <p className="ml-3 text-sm text-gray-900 font-pj">Transaction<br />Completed</p>
                    </div>
                </div>
            </div>

            <div>
                <img className="w-full" src="https://github.com/mdalmamunit427/build-full-stack-book-store-mern-app/blob/main/frontend/src/assets/banner.png?raw=true" alt="" />
            </div>
        </div>
    </div>
</section>
    // <div className="flex flex-col md:flex-row-reverse py-16 justify-between items-center gap-12 bg-gray-800 px-32 pt-32 pb-20">
    //   <div className="md:w-1/2 w-full flex items-center md:justify-end">
    //     <img
    //       src={
    //         "https://github.com/mdalmamunit427/build-full-stack-book-store-mern-app/blob/main/frontend/src/assets/banner.png?raw=true"
    //       }
    //       alt=""
    //     />
    //   </div>

    //   <div className="md:w-1/2 w-full text-white">
    //     <h1 className="md:text-6xl text-2xl font-semibold mb-7">
    //       New Releases This Week
    //     </h1>
    //     <p className="mb-10">
    //       It's time to update your reading list with some of the latest and
    //       greatest releases in the literary world. From heart-pumping thrillers
    //       to captivating memoirs, this week's new releases offer something for
    //       everyone
    //     </p>

    //     <button class="overflow-hidden relative w-44 p-2 h-12 bg-white text-gray-900 border-none rounded-md text-xl font- cursor-pointer relative z-10 group">
    //       Explore Now
    //       <span class="absolute w-48 h-32 -top-8 -left-2 bg-sky-200 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-1000 origin-right"></span>
    //       <span class="absolute w-48 h-32 -top-8 -left-2 bg-sky-400 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-700 duration-700 origin-right"></span>
    //       <span class="absolute w-48 h-32 -top-8 -left-2 bg-sky-600 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-1000 duration-500 origin-right"></span>
    //       <span class="group-hover:opacity-100 group-hover:duration-1000 duration-100 opacity-0 absolute top-2.5 left-6 z-10">
    //       Explore Now
    //       </span>
    //     </button>
    //   </div>
    // </div>
  );
};

export default HeroSection;
