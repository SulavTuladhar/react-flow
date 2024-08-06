import React from "react";
import WrapperSkeletonComponent from "./WrapperSkeleton.component";
import { buttons } from "../Card/Message/MessageCard.component";

export function MessageSkeletonComponent() {
  return (
    <div className=" rounded-br-md rounded-bl-md  ">
      <WrapperSkeletonComponent title="Send a message" background="bg-red-500">
        <div className="w-fit flex flex-wrap py-3 gap-3">
          {buttons.map((item, index) => (
            <button
              className="border-2 border-green-300 p-2 rounded-md text-green-300 w-[5rem] text-sm"
              key={index}
            >
              {item.name}
            </button>
          ))}
        </div>
      </WrapperSkeletonComponent>
    </div>
  );
}
export default MessageSkeletonComponent;
