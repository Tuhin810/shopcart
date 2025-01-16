import React from "react";
import Filter from "./filter/Filter";
import SearchResult from "./searchResult/SearchResult";

const SearchPage = () => {
  return (
    <div className="flex h-screen">
      {/* Left: Filter */}
      <div className="w-1/4 bg-gray-100 border-r border-gray-300 p-4">
        <Filter />
      </div>

      {/* Right: Search Results */}
      <div className="w-3/4 p-4">
        <SearchResult />
      </div>
    </div>
  );
};

export default SearchPage;
