import React from "react";

function TriangleComponent() {
  const style = {
    clipPath: "polygon(50% 0%, 100% 100%, 0% 100%)",
  };
  return (
    <div className="relative h-full w-full">
      <div className="absolute inset-0 bg-gray-200" style={style}></div>
    </div>
  );
}
export default TriangleComponent;
