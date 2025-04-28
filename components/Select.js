import React, { forwardRef } from "react";

const Select = forwardRef((props, ref) => {
  return (
    <select
      ref={ref}
      {...props}
      className="w-full px-4 py-2 border border-gray-300 rounded-md dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500"
    ></select>
  );
});

Select.displayName = "Select";

export default Select;
