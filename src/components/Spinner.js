import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
const Spinner = ({ path }) => {
  const [count, setCount] = useState(3);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevValue) => --prevValue);
    }, 1000);
    // count === 0 &&
    //   navigate(`/${path}`, {
    //     state: location.pathname,
    //   });
    return () => clearInterval(interval);
  }, [count, navigate, location, path]);
  return (
    <>
      <div class="text-center absolute top-56 left-[40%]">
        <div class="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-yellow-500 mx-auto"></div>
        <h2 class="text-zinc-900  mt-4">Loading...</h2>
        <p class="text-zinc-600 dark:text-zinc-400">
          Your adventure is about to begin in {count} seconds
        </p>
      </div>
    </>
  );
};

export default Spinner;
