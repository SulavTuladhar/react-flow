import { useReactFlow } from "@xyflow/react";
import React, { useState } from "react";
import { AiFillDelete, AiOutlineMore } from "react-icons/ai";

function CardWrapper({
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
  const [isOpen, setIsOpen] = useState(false);
  const { setNodes } = useReactFlow();

  const onDelete = () => {
    setNodes((prevNodes) => prevNodes.filter((node) => node.id !== id));
  };

  return (
    <div className="bg-white shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px] hover:shadow-[0_3px_10px_rgb(0,0,0,0.2)] duration-200 rounded-br-md rounded-bl-md ">
      <div
        className={`flex items-center justify-between ${background} w-[350px] text-white px-4 rounded-tr-md rounded-tl-md py-3 text-sm`}
      >
        {title}
        {isOpen && (
          <div className="bg-white text-black px-4 py-2  absolute right-0 top-[-40px] rounded-md">
            <span
              className="flex items-center gap-2 cursor-pointer hover:text-green-500 duration-200"
              onClick={() => onDelete()}
            >
              <AiFillDelete /> <p>Delete</p>
            </span>
          </div>
        )}
        <div onClick={() => setIsOpen(!isOpen)} className="cursor-pointer">
          <AiOutlineMore className="w-5 h-5" />
        </div>
      </div>
      <div className="px-4 bg-white w-[350px] rounded-br-md rounded-bl-md ">
        {children}
      </div>
    </div>
  );
}

export default CardWrapper;
