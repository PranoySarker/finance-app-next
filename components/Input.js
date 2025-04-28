import { forwardRef } from "react";

export default forwardRef(function Input(props, ref) {
  const styles = {
    checkbox:
      "rounded border-gray-300 text-gray-700 bg-white dark:bg-gray-950 dark:text-gray-500 shadow-sm disabled:opacity-75",
    file: "file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:opacity-50 file:dark:text-gray-400",
    default:
      "w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500",
  };
  return (
    <input
      ref={ref}
      {...props}
      className={`${styles[props.type] ?? styles["default"]} ${
        props.className
      }`}
    />
  );
});
