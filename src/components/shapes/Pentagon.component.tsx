import React from "react";

function PentagonComponent() {
  return (
    <div className="w-[100px]">
      {" "}
      <div className="relative border-b-[50px] border-l-[50px] border-l-transparent border-r-[50px] border-r-transparent"></div>{" "}
      <div className="rotate-180 pr-[50px] border-b-[50px] border-l-[25px] border-l-transparent border-r-[25px] border-b-gray-200 border-transparent"></div>{" "}
    </div>
  );
}

export default PentagonComponent;
