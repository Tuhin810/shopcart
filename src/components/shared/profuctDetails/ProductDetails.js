import React from 'react'

const ProductDetailsSection = ({product}) => {
  return (
    <div>
        <div class="font-sans bg-white">
      <div class="pt-24 mx-auto">
        <div class="grid items-start grid-cols-1 lg:grid-cols-5 gap-12 shadow-[0_2px_10px_-3px_rgba(169,170,172,0.8)] p-6 rounded">
          <div class="lg:col-span-3 w-full lg:sticky top-0 text-center">

          <div class="mx-auto">
                <div class="relative">
                  <img
                    src={`https://shopcart-backend-4f2a.onrender.com/api/v1/product/product-photo/${product._id}`}
                    class="w-72 relative z-10 shadow-xl mx-auto"
                    alt=""
                  />
                  <div class="border-4 border-red-500 absolute top-10 bottom-10 left-10 right-10 z-0"></div>
                </div>
              </div>
          </div>

          <div class="lg:col-span-2">
          <div class="mb-10">
                    <h1 class="font-bold uppercase text-3xl  pt-8 xl mb-2">{product?.category?.name} <br/>{product.name}</h1>
                    <div class="py-1 border-2 rounded-full w-32 text-center">
                        {product?.category?.name} Book
                    </div>
                    <div class="flex items-center space-x-1 mt-2 mb-5">
              <svg class="w-5 h-5 fill-yellow-500" viewBox="0 0 14 13" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
              </svg>
              <svg class="w-5 h-5 fill-yellow-500" viewBox="0 0 14 13" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
              </svg>
              <svg class="w-5 h-5 fill-yellow-500" viewBox="0 0 14 13" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
              </svg>
              <svg class="w-5 h-5 fill-yellow-500" viewBox="0 0 14 13" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
              </svg>
              <svg class="w-5 h-5 fill-[#CED5D8]" viewBox="0 0 14 13" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
              </svg>
              <h4 class="text-gray-500 text-base !ml-3">500 Reviews</h4>
            </div>
                    <p class="text-sm">{product.description}Lorem ipsum dolor sit, amet consectetur adipisicing, elit. Eos, voluptatum dolorum! Laborum blanditiis consequatur, voluptates, sint enim fugiat saepe, dolor fugit, magnam explicabo eaque quas id quo porro dolorum facilis... <a href="#" class="opacity-50 text-gray-900 hover:opacity-100 inline-block text-xs leading-none border-b border-gray-900">MORE <i class="mdi mdi-arrow-right"></i></a></p>
                </div>
            


            {/* <div class="flex flex-wrap gap-4 mt-6">
              <p class="text-gray-800 text-2xl font-bold">$1200</p>
              <p class="text-gray-500 text-base"><strike>$1500</strike> <span class="text-sm ml-1">Tax included</span></p>
            </div> */}

           

            <div>
                  <div class="inline-block align-bottom mr-5">
                    <span class="text-2xl leading-none align-baseline">$</span>
                    <span class="font-bold text-5xl leading-none align-baseline">
                      {product?.price - 1}
                    </span>
                    <span class="text-2xl leading-none align-baseline">
                      .99
                      
                    </span>
                  </div>
                  <div class="inline-block align-bottom">
                    <button
                    //   onClick={() => {
                    //     setCart([...cart, product]);
                    //     localStorage.setItem(
                    //       "cart",
                    //       JSON.stringify([...cart, product])
                    //     );
                    //     toast.success("Item Added to cart");
                    //   }}
                      class="bg-gray-800 
                         text-gray-100 
                        rounded-full px-10 py-2 font-semibold"
                    >
                      <i class="mdi mdi-cart -ml-2 mr-2"></i>
                      ADD TO CART
                    </button>
                  </div>
                  {/* <h3 class="text-xl font-bold text-gray-800 mt-8">Reviews(10)</h3> */}
          {/* <div class="w-[80%]">
            <div class="space-y-1 max-w-xl">
              <div class="flex items-center">
                <p class="text-sm text-gray-800 font-bold pt-3">5.0</p>
                <svg class="w-5 fill-yellow-500 ml-1" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                </svg>
                <div class="bg-gray-400 rounded w-full h-2 ml-3">
                  <div class="w-2/3 h-full rounded bg-blue-600"></div>
                </div>
                <p class="text-sm text-gray-800 font-bold ml-3">66%</p>
              </div>

              <div class="flex items-center">
                <p class="text-sm text-gray-800 font-bold">4.0</p>
                <svg class="w-5 fill-yellow-500 ml-1" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                </svg>
                <div class="bg-gray-400 rounded w-full h-2 ml-3">
                  <div class="w-1/3 h-full rounded bg-blue-600"></div>
                </div>
                <p class="text-sm text-gray-800 font-bold ml-3">33%</p>
              </div>

              <div class="flex items-center">
                <p class="text-sm text-gray-800 font-bold">3.0</p>
                <svg class="w-5 fill-yellow-500 ml-1" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                </svg>
                <div class="bg-gray-400 rounded w-full h-2 ml-3">
                  <div class="w-1/6 h-full rounded bg-blue-600"></div>
                </div>
                <p class="text-sm text-gray-800 font-bold ml-3">16%</p>
              </div>

              <div class="flex items-center">
                <p class="text-sm text-gray-800 font-bold">2.0</p>
                <svg class="w-5 fill-yellow-500 ml-1" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                </svg>
                <div class="bg-gray-400 rounded w-full h-2 ml-3">
                  <div class="w-1/12 h-full rounded bg-blue-600"></div>
                </div>
                <p class="text-sm text-gray-800 font-bold ml-3">8%</p>
              </div>

              <div class="flex items-center">
                <p class="text-sm text-gray-800 font-bold">1.0</p>
                <svg class="w-5 fill-yellow-500 ml-1" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                </svg>
                <div class="bg-gray-400 rounded w-full h-2 ml-3">
                  <div class="w-[6%] h-full rounded bg-blue-600"></div>
                </div>
                <p class="text-sm text-gray-800 font-bold ml-3">6%</p>
              </div>
            </div>

          
          </div> */}
                </div>
          </div>
          
        </div>


      
      </div>
    </div>
    </div>
  )
}

export default ProductDetailsSection