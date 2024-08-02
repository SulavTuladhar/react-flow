import React from "react";

function DeleteButtonComponent({ func }: { func: () => void }) {
  return (
    <button
      className="duration-300 ease-in-out border-2 border-red-500 hover:bg-red-500 hover:text-white rounded-full px-2 ml-6 cursor-pointer"
      onClick={() => func()}
    >
      X
    </button>
  );
}

export default DeleteButtonComponent;
