import React from "react";

const Select = (props) => {
  return (
    <select
      {...props}
      className="w-full px-4 py-2 border border-gray-300 rounded-md dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500"
    ></select>
  );
};

export default Select;
