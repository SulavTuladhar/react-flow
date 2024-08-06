import { Handle, Position } from "@xyflow/react";
import React, { useState } from "react";
import CardWrapper from "../CardWrapper.component";
import { AiFillDelete } from "react-icons/ai";

export const buttons = [
  {
    name: "Message",
  },
  {
    name: "Image",
  },
  {
    name: "Video",
  },
  {
    name: "Audio",
  },
  {
    name: "Document",
  },
];

function MessageCardComponent({ id }: { id?: string }) {
  const [forms, setForms] = useState<any>([]);
  const addForm = () => {
    setForms(
      (prevForms) => [...prevForms, { id: forms.length++, value: "" }] as any
    );
  };
  const handleInputChange = (id, value) => {
    setForms((prevForms: any) =>
      prevForms.map((form) => (form.id === id ? { ...form, value } : form))
    );
  };
  const removeForm = (id) => {
    setForms((prevForms) => prevForms.filter((form: any) => form.id !== id));
  };

  return (
    <div className=" rounded-br-md rounded-bl-md  ">
      <CardWrapper title="Send a message" background="bg-red-500" id={id}>
        <div className="mt-4">
          {forms.map((form) => (
            <div key={form.id} className="flex items-center mb-2">
              <input
                type="text"
                value={form.value}
                onChange={(e) => handleInputChange(form.id, e.target.value)}
                className="border p-2 rounded mr-2 w-full"
              />
              <button
                onClick={() => removeForm(form.id)}
                className="bg-red-500 text-white p-2 rounded-full"
              >
                <AiFillDelete />
              </button>
            </div>
          ))}
        </div>
        <div className="w-fit flex flex-wrap py-3 gap-3">
          {buttons.map((item, index) => (
            <button
              onClick={addForm}
              className="border-2 border-green-300 p-2 rounded-md text-green-300 w-[6rem]"
              key={index}
            >
              {item.name}
            </button>
          ))}
        </div>
      </CardWrapper>
      <Handle type="target" position={Position.Left} />
      <Handle
        type="source"
        position={Position.Right}
        className="bg-red-500 p-1"
      />
    </div>
  );
}

export default MessageCardComponent;
