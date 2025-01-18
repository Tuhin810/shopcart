import React from "react";
import CategoryProduct from "./CategoryProduct";

const CategoryBooks = () => {
  return (
    <div className="">
      <CategoryProduct topic={"story"} />
      <CategoryProduct topic={"fantasy"} />
      <CategoryProduct topic={"science"} />
      <CategoryProduct topic={"finance"} />
    </div>
  );
};

export default CategoryBooks;
