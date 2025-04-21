import React from "react";

const Label = (props) => {
  return (
    <label
      {...props}
      className={`text-sm font-medium text-gray-600 dark:text-gray-400 ${props.className}`}
    ></label>
  );
};

export default Label;
