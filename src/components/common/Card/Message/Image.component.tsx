import React from "react";
import { AiFillDelete } from "react-icons/ai";

function ImageComponent({
  imagesSrc,
  handleFileChange,
  removeElement,
  handleInputChange,
}: {
  imagesSrc: any;
  handleFileChange: (e, id) => void;
  removeElement: (type: string, id: number) => void;
  handleInputChange: (id: number, value: string, type: string) => void;
}) {
  return (
    <div className="mt-4 ">
      {imagesSrc.map((item: any, index: number) => (
        <div key={index} className="relative flex flex-col gap-2 py-4">
          {item.src.length > 1 && <img src={item.src} alt="Saved" />}
          <label className="flex flex-1 items-center justify-center border border-green-400 p-2 cursor-pointer rounded">
            <input
              type="file"
              accept="image/*"
              onChange={(e) => handleFileChange(e, item.id)}
              className="hidden"
            />
            <span className="text-green-500">Upload image</span>
          </label>
          <input
            type="text"
            value={item.value}
            onChange={(e) => handleInputChange(item.id, e.target.value, "img")}
            className="border p-2 rounded mr-2 w-full bg-[#f5f6fa]"
          />
          <button
            onClick={() => removeElement("img", item.id)}
            className="bg-red-500 text-white shadow p-2 rounded-full absolute top-5 right-1"
          >
            <AiFillDelete />
          </button>
          <hr className="mt-2" />
        </div>
      ))}
    </div>
  );
}

export default ImageComponent;
