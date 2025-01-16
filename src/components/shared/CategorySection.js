import { IconDeviceMobile, IconDeviceWatch } from '@tabler/icons-react';
import React from 'react';
import useCategory from '../../hooks/useCategory';

const CategorySection = () => {
  const categories = [
    { _id: 1, name: 'Story Book', image: 'https://www.creatopy.com/blog/wp-content/uploads/2020/07/A-Kite-for-the-Moon.jpg' },
    { _id: 2, name: 'Fantasy', image: 'https://res.cloudinary.com/bloomsbury-atlas/image/upload/w_360,c_scale,dpr_1.5/jackets/9781408855652.jpg' },
    { _id: 3, name: 'Science', image: 'https://m.media-amazon.com/images/I/41iD516KBiL._SL500_.jpg' },
    { _id: 3, name: 'Academic', image: 'https://m.media-amazon.com/images/I/41iD516KBiL._SL500_.jpg' },
    { _id: 4, name: 'Finance', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE8F_CvcawPnknz08VPj_pkbGYJo7Z3L_LnA&s' },
  ];

  return (
<div>
  <section className="py-12 bg-gray-100">
    <div className="text-center mb-8">
      <h2 className="text-xl md:text-3xl font-bold text-gray-800">What's in our product</h2>
      <p className="text-gray-600 text-sm md:text-base">
        Our products are 100% organic and pure; here is the best explanation of our product!
      </p>
    </div>
    <div className="flex flex-wrap justify-center gap-6">
      {categories.map((c) => (
        <div
          key={c._id}
          className="group relative flex flex-col items-center justify-center w-32 h-40 bg-white  shadow-md 
          overflow-hidden transition-all duration-300 group-hover:w-40 group-hover:h-52 group-hover:rounded-none"
        >
          {/* Overlay and Text */}
          <div className="absolute inset-0 bg-black bg-opacity-75 flex items-center justify-center opacity-100 group-hover:opacity-0 transition-opacity duration-300 z-10">
            <p className="text-white text-lg font-medium pt-3">{c.name}</p>
          </div>

          {/* Book Image */}
          <img
            src={c.image}
            alt={c.name}
            className="absolute -bottom-4 right-0 w-24 h-32 group-hover:w-full group-hover:h-full group-hover:bottom-0 group-hover:right-0 transition-all duration-300 z-0"
          />
        </div>
      ))}
    </div>
  </section>
</div>

  
  );
};

export default CategorySection;
