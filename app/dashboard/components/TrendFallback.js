import Skeleton from "@/components/Skeleton";
import React from "react";

const TrendFallback = () => {
  return (
    <div className="space-y-3">
      <div className={`font-semibold `}>
        <Skeleton />
      </div>
      <div className=" mb-2">
        <Skeleton />
      </div>
      <div className="flex space-x-1 items-center ">
        <Skeleton />
      </div>
    </div>
  );
};

export default TrendFallback;
