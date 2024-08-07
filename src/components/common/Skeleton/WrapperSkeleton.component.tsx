import React from "react";
import { AiOutlineMore } from "react-icons/ai";

function WrapperSkeletonComponent({
  title,
  children,
  background,
  id,
}: {
  title: string;
  children: React.ReactNode;
  background: string;
  id?: string;
}) {
  return (
    <div className="bg-white shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px] hover:shadow-[0_3px_10px_rgb(0,0,0,0.2)] duration-200 rounded-br-md rounded-bl-md">
      <div
        className={`flex items-center justify-between ${background} w-[300px] text-white px-4 rounded-tr-md rounded-tl-md py-3 text-sm`}
      >
        {title}
        <div className="cursor-pointer">
          <AiOutlineMore className="w-5 h-5" />
        </div>
      </div>
      <div className="px-4 bg-white w-[300px] rounded-br-md rounded-bl-md ">
        {children}
      </div>
    </div>
  );
}

export default WrapperSkeletonComponent;
