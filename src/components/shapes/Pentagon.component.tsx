import React from "react";

function PentagonComponent() {
  const styles = {
    clipPath: "polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)",
  };
  return (
    <div className="relative h-full w-full p-2">
      <div className="absolute inset-0 bg-gray-200 m-1" style={styles}></div>
    </div>
  );
}

export default PentagonComponent;
