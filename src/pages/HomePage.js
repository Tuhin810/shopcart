import React from 'react'
import Layout from '../components/Layout/Layout'
import Cardo from './Card'
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <Layout>
       <div className="overflow-y-hidden ">
      <div className="relative flex justify-center items-center md:justify-start ">
        <img className="hidden lg:block  w-full" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/banner_11_desktop.png" alt="randeer" />
        <img className="md:block lg:hidden hidden  w-full " src="https://tuk-cdn.s3.amazonaws.com/can-uploader/banner_11_ipad.png" alt="randeer" />
        <img className="md:hidden w-full " src="https://tuk-cdn.s3.amazonaws.com/can-uploader/banner_11_mobile.png" alt="randeer" />
        <div className="flex absolute justify-start flex-col md:flex-row items-center">
          <div className=" py-32 sm:py-20  md:hidden" />
          <div className="md:mt-10  lg:w-auto custom sm:mt-96 md:mt-0 h-full flex px-4 md:px-0  z-10 justify-center items-center md:items-start flex-col md:pl-20 lg:px-20 2xl:px-44">
            <p className="text-xl sm:text-2xl xl:text-4xl text-center md:text-left font-semibold leading-6 xl:leading-10 text-gray-100 md:w-96 2xl:w-2/3">Your message from Santa is waiting!</p>
            <p className="mt-4 md:w-80 lg:w-2/3 xl:w-3/4 text-center md:text-left  text-base leading-normal text-gray-200">Looking to create a greater impact with your commercial Christmas display? Take a look at the services we have on offer...</p>
            
            
             <Link to="/allproducts" className="mt-6 shrink-0 w-full md:w-auto  lg:mt-8 py-2 md:py-3 px-10 flex justify-center duration-700  items-center text-base border-2 border-white transition hover:-translate-y-1 hover:bg-gray-100 hover:text-gray-800 font-medium text-white"> Explore Now</Link>
            
          </div>
        </div>
      </div>
    </div>



      
      <div className="py-12 px-4">
        <div className="lg:max-w-[1440px] md:max-w-[744px] max-w-[375px] mx-auto bg-white relative lg:px-10 md:px-6 px-4 py-7">
          <div className="lg:max-w-[1280px] md:max-w-[696px] max-w-[343px] mx-auto bg-gray-200">
            <div className="lg:flex md:flex block justify-between items-center">
              <div className="md:p-10 p-4">
                <p className="text-base leading-none text-gray-800">
                  Save upto 30%
                </p>
                <p className="text-3xl font-semibold leading-9 text-gray-800 py-4">
                  Summer Sale
                </p>
                <p className="text-base leading-normal text-gray-600">
                  Want to save some cash and still look like a fashion diva ?
                  <br />
                  Checkout our summer sale now !!!
                </p>
              </div>
              <div className="md:p-10 p-4">
                <img
                  src="https://tuk-cdn.s3.amazonaws.com/can-uploader/ec2.png"
                  className="w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>



      {/* top products */}
      <div className="">
      <div>
      <div className="bg-gray-100 flex flex-col justify-center items-center pt-9 sm:pt-12 lg:pt-16 pb-24 sm:pb-52">
                <div className="2xl:container 2xl:mx-auto flex flex-col justify-center items-center sm:pb-12 lg:pb-0 space-y-4 px-4 md:px-6 2xl:px-0">
                    <div>
                        <p className="text-3xl lg:text-4xl font-semibold leading-9 text-center text-gray-800">Products Coming Soon</p>
                    </div>
                    <div>
                        <p className="text-base leading-normal sm:leading-none text-center text-gray-600">Explore products that are bought most frequently by people</p>
                    </div>
                </div>
            </div>
    </div>
    <div className="flex flex-col  md:flex-row px-5 py-5 md:justify-between -mt-44">
       <Cardo img="https://images.pexels.com/photos/1456738/pexels-photo-1456738.jpeg?auto=compress&cs=tinysrgb&w=600"/>
       <Cardo img="https://images.unsplash.com/photo-1629367494173-c78a56567877?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=927&q=80"/>

    <Cardo img={"https://images.pexels.com/photos/13570143/pexels-photo-13570143.jpeg?auto=compress&cs=tinysrgb&w=600"}/>
    </div></div>



    <div className='my-20 '>
      <div className="flex justify-end items-center bg-gray-200">
        <img className="object-cover md:hidden  w-full h-60" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/banner_12_bg.png" alt="background" />
        <img className="hidden md:block object-cover  w-full h-56 lg:h-52" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/banner_12_bg_ipad_desktop.png" alt="background" />
        <div className=" flex xl:px-20 justify-start items-start flex-col absolute">
          <h1 className="text0-xl xl:text-2xl font-medium leading-5 xl:leading-normal text-gray-800">Sale now on</h1>
          <p className="w-44 sm:w-64 lg:w-2/3 mt-4 text-base leading-6 xl:leading-5 text-gray-800">Shop our mid Season sale for a range of discounted items</p>
          <button className="mt-5 xl:mt-6 hover:underline underline-offset-4 transition duration-300 ease-in-out flex justify-start items-center space-x-2">
            <p className="text-base font-medium leading-none pb-0.5">Shop Sale</p>
            <svg width={6} height={12} viewBox="0 0 6 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M0.21967 0.96967C0.512563 0.676777 0.987437 0.676777 1.28033 0.96967L5.78033 5.46967C6.07322 5.76256 6.07322 6.23744 5.78033 6.53033L1.28033 11.0303C0.987437 11.3232 0.512563 11.3232 0.21967 11.0303C-0.0732233 10.7374 -0.0732233 10.2626 0.21967 9.96967L4.18934 6L0.21967 2.03033C-0.0732233 1.73744 -0.0732233 1.26256 0.21967 0.96967Z" fill="#242424" />
            </svg>
          </button>
        </div>
      </div>
    </div>






  


        <div className="lg:px-20 md:px-6 px-4 md:py-12 py-8 ">
            <div className="lg:flex items-center justify-between">
                <div className="lg:w-1/3">
                    <h1 className="text-4xl font-semibold leading-9 text-gray-800">Indoor Interiors</h1>
                    <p className="text-base leading-6 mt-4 text-gray-600">Get inspired by our curated selection of luxiwood interiors. We hope get inspired to have luxiwood interior yourself. You’ll find tips here where you can buy a lot of cool furniture.</p>
                    <button aria-label="view catalogue" className="focus:ring-2 focus:ring-offset-2 focus:ring-gray-700 focus:outline-none mt-6 md:mt-8 text-base font-semibold leading-none text-gray-800 flex items-center hover:underline">
                        View Catalogue
                        <svg className="ml-2 mt-1" width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.33325 4H10.6666" stroke="#1F2937" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M8 6.66667L10.6667 4" stroke="#1F2937" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M8 1.33398L10.6667 4.00065" stroke="#1F2937" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                </div>
                <div className="lg:w-7/12 lg:mt-0 mt-8">
                    <div className="w-full h-full bg-red-200">
                        <img src="https://i.ibb.co/cbyDY74/pexels-max-vakhtbovych-6782351-1-1.png" alt="apartment design" className="w-full sm:block hidden" />
                        <img src="https://i.ibb.co/ZVPGjGJ/pexels-max-vakhtbovych-6782351-1.png" alt="apartment design" className="sm:hidden block w-full" />
                    </div>
                    <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 lg:gap-8 gap-6 lg:mt-8 md:mt-6 mt-4">
                        <img src="https://i.ibb.co/4Jrp5TB/pexels-max-vakhtbovych-6782370-1.png" className="w-full" alt="kitchen" />
                        <img src="https://i.ibb.co/0Jv3FSy/pexels-max-vakhtbovych-6436799-1-1.png" className="w-full" alt="sitting room" />
                    </div>
                </div>
            </div>
        </div>

        <div className="bg-gray-200 ">
        <div className="px-3 py-12">
          <div className="lg:max-w-[1280px] md:max-w-[696px] max-w-[343px] mx-auto bg-white lg:px-20 md:px-6 px-4 py-12">
            <div className="lg:flex md:flex block">
              <div className="flex">
                <div className="bg-gray-800 max-w-[66px] w-full">
                  <p className="xl:text-2xl lg:text-base font-semibold leading-normal text-white -rotate-90 whitespace-nowrap 2xl:mt-32 xl:mt-[130px] lg:mt-[140%] md:mt-[85px] mt-28">
                    Upto 50% Off
                  </p>
                </div>
                <div>
                  <img
                    src="https://tuk-cdn.s3.amazonaws.com/can-uploader/image%20194.png"
                    alt="shoes"
                    className="lg:hidden md:hidden block"
                  />
                </div>
              </div>
              <div>
                <img
                  src="https://tuk-cdn.s3.amazonaws.com/can-uploader/image%20194.png"
                  alt="shoes"
                  className="lg:block md:hidden hidden"
                />
                <img
                  src="https://tuk-cdn.s3.amazonaws.com/can-uploader/ff.png"
                  alt
                  className="lg:hidden md:block hidden"
                />
              </div>
              <div className="bg-gray-800 lg:py-2 md:py-2 py-4 lg:px-5 md:px-4 px-3 flex flex-col items-center justify-center">
                <p className="lg:text-4xl md:text-2xl text-2xl font-semibold text-center text-white">
                  Modern Fashion
                </p>
                <p className="text-xs text-center text-white pt-4">
                  Shop enchanting designs with bold and classy colors at
                  discunted price
                </p>
              </div>
              <div>
                <img
                  src="https://tuk-cdn.s3.amazonaws.com/can-uploader/shoes.png"
                  alt="sandles"
                  className="lg:block md:hidden block"
                />
                <img
                  src="https://tuk-cdn.s3.amazonaws.com/can-uploader/shoes2.png"
                  alt
                  className="lg:hidden md:block hidden"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

        {/* instruction start */}
        <div className="2xl:container 2xl:mx-auto lg:px-20 md:py-12 md:px-6 py-9 px-4">
            <div className=" grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-8 gap-6 ">
                {/* Safe Shopping Grid Card */}
                <div className=" p-6 bg-gray-100">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 17C14.7614 17 17 14.7614 17 12C17 9.23858 14.7614 7 12 7C9.23858 7 7 9.23858 7 12C7 14.7614 9.23858 17 12 17Z" stroke="#1F2937" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M11 3H13M12 7V3V7Z" stroke="#1F2937" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M17.6569 4.92871L19.0711 6.34292M15.5355 8.46424L18.364 5.63582L15.5355 8.46424Z" stroke="#1F2937" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M21 11V13M17 12H21H17Z" stroke="#1F2937" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M19.071 17.6572L17.6568 19.0714M15.5355 15.5359L18.3639 18.3643L15.5355 15.5359Z" stroke="#1F2937" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M13 21H11M12 17V21V17Z" stroke="#1F2937" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M6.34314 19.0713L4.92893 17.6571M8.46446 15.5358L5.63603 18.3642L8.46446 15.5358Z" stroke="#1F2937" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M3 13L3 11M7 12H3H7Z" stroke="#1F2937" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M4.92896 6.34277L6.34317 4.92856M8.46449 8.46409L5.63606 5.63567L8.46449 8.46409Z" stroke="#1F2937" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <p className=" text-xl text-gray-800 font-semibold leading-5 mt-6">Safe Shopping</p>
                    <p className=" font-normal text-base leading-6 text-gray-600 my-4">Our all outlets have industry-leading health precautions</p>
                    <a className=" cursor-pointer text-base leading-4 font-medium text-gray-800 border-b-2 border-gray-800 hover:text-gray-600 ">Learn More</a>
                </div>

                {/* Personal Shopping Grid Card */}
                <div className=" p-6 bg-gray-100">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3 21H21" stroke="#1F2937" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path
                            d="M3 7V8C3 8.79565 3.31607 9.55871 3.87868 10.1213C4.44129 10.6839 5.20435 11 6 11C6.79565 11 7.55871 10.6839 8.12132 10.1213C8.68393 9.55871 9 7.79565 9 7M3 7H9M3 7H21M3 7L5 3H19L21 7M9 7C9 7.79565 9.31607 9.55871 9.87868 10.1213C10.4413 10.6839 11.2044 11 12 11C12.7956 11 13.5587 10.6839 14.1213 10.1213C14.6839 9.55871 15 8.79565 15 8M9 7H15V8M15 8C15 8.79565 15.3161 9.55871 15.8787 10.1213C16.4413 10.6839 17.2044 11 18 11C18.7956 11 19.5587 10.6839 20.1213 10.1213C20.6839 9.55871 21 8.79565 21 8V7"
                            stroke="#1F2937"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path d="M5 20.9996V10.8496" stroke="#1F2937" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M19 20.9996V10.8496" stroke="#1F2937" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M9 21V17C9 16.4696 9.21071 15.9609 9.58579 15.5858C9.96086 15.2107 10.4696 15 11 15H13C13.5304 15 14.0391 15.2107 14.4142 15.5858C14.7893 15.9609 15 16.4696 15 17V21" stroke="#1F2937" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <p className=" text-xl text-gray-800 font-semibold leading-5 mt-6">Personal Shopping</p>
                    <p className=" font-normal text-base leading-6 text-gray-600 my-4">Contact your local outlet to book a personal appointment</p>
                    <a className=" cursor-pointer text-base leading-4 font-medium text-gray-800 border-b-2 border-gray-800 hover:text-gray-600 ">Learn More</a>
                </div>

                {/* Free Shopping Grid Card */}
                <div className=" p-6 bg-gray-100">
                    <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0)">
                            <path d="M18.4142 12.7573L21.2426 9.92886C21.6177 9.55378 22.1264 9.34307 22.6568 9.34307C23.1873 9.34307 23.696 9.55378 24.071 9.92886C24.4461 10.3039 24.6568 10.8126 24.6568 11.3431C24.6568 11.8735 24.4461 12.3822 24.071 12.7573L21.2426 15.5857L23.3639 23.3639L21.2426 25.4852L17.7071 19.1212L14.8786 21.9497V24.7781L12.7573 26.8994L11.3431 22.6568L7.10048 21.2426L9.2218 19.1212H12.0502L14.8786 16.2928L8.51469 12.7573L10.636 10.636L18.4142 12.7573Z" stroke="#1F2937" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </g>
                        <defs>
                            <clipPath id="clip0">
                                <rect width="24" height="24" fill="white" transform="translate(0.0294189 17) rotate(-45)" />
                            </clipPath>
                        </defs>
                    </svg>
                    <p className=" text-xl text-gray-800 font-semibold leading-5 mt-6">Free Shipping</p>
                    <p className=" font-normal text-base leading-6 text-gray-600 my-4">Free shipping all over the world on orders above $100</p>
                    <a className=" cursor-pointer text-base leading-4 font-medium text-gray-800 border-b-2 border-gray-800 hover:text-gray-600 ">Learn More</a>
                </div>
            </div>
        </div>

    </Layout>
  )
}

export default HomePage