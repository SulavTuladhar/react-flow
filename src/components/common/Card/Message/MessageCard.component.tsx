import { Handle, Position, useReactFlow } from "@xyflow/react";
import React, { useState } from "react";
import CardWrapper from "../CardWrapper.component";
import ImageComponent from "./Image.component";
import InputComponent from "./Input.component";
import { AiFillSave } from "react-icons/ai";

export const buttons = [
  {
    name: "Message",
    type: "form",
  },
  {
    name: "Image",
    type: "img",
  },
  {
    name: "Video",
    type: "video",
  },
  {
    name: "Audio",
    type: "audio",
  },
  {
    name: "Document",
    type: "document",
  },
];

function MessageCardComponent({ data, id }: { data: any; id?: string }) {
  const [forms, setForms] = useState<any>(data?.forms ?? []);
  const [imagesSrc, setImagesSrc] = useState<any>(data?.imagesSrc ?? []);
  const { setNodes } = useReactFlow();

  const addElements = (type: string) => {
    if (type === "form") {
      setForms(
        (prevForms) => [...prevForms, { id: forms.length++, value: "" }] as any
      );
    }
    if (type === "img") {
      setImagesSrc(
        (prevImages) =>
          [...prevImages, { id: imagesSrc.length++, src: "", value: "" }] as any
      );
    }
  };
  const handleInputChange = (id: number, value: string, type: string) => {
    if (type === "form") {
      setForms((prevForms: any) =>
        prevForms.map((form) => (form.id === id ? { ...form, value } : form))
      );
    }
    if (type === "img") {
      setImagesSrc((prevImgs) =>
        prevImgs.map((img) => (img.id === id ? { ...img, value } : img))
      );
    }
  };
  const removeElement = (type: string, id: number) => {
    if (type === "form") {
      setForms((prevForms) => prevForms.filter((form: any) => form.id !== id));
    }
    if (type === "img") {
      setImagesSrc((prevImgs) => prevImgs.filter((img: any) => img.id !== id));
    }
  };

  const handleFileChange = (e, id) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const dataUrl = reader.result;
        // localStorage.setItem("savedImage", dataUrl as string);
        setImagesSrc((prevSrc) =>
          prevSrc.map((img) => (img.id === id ? { ...img, src: dataUrl } : img))
        );
      };
      reader.readAsDataURL(file);
    }
  };
  const onSave = () => {
    const updatedData = {
      forms,
      imagesSrc,
    };
    setNodes((prevNodes) => {
      const nodeToUpdate = prevNodes.find((node) => node.id === id);
      if (!nodeToUpdate) return prevNodes;
      const updatedNode = {
        ...nodeToUpdate,
        data: updatedData,
      };
      return prevNodes.map((node) => (node.id === id ? updatedNode : node));
    });
  };
  return (
    <div className=" rounded-br-md rounded-bl-md">
      <CardWrapper title="Send a message" background="bg-red-500" id={id}>
        <button
          className="bg-green-400 p-2 rounded-full text-white absolute bottom-1 right-1"
          onClick={() => onSave()}
        >
          <AiFillSave className="h-4 w-4" />
        </button>
        <InputComponent
          forms={forms}
          handleInputChange={handleInputChange}
          removeForm={removeElement}
        />
        <ImageComponent
          handleFileChange={handleFileChange}
          handleInputChange={handleInputChange}
          imagesSrc={imagesSrc}
          removeElement={removeElement}
        />
        <div className="w-fit flex flex-wrap py-3 gap-3">
          {buttons.map((item, index) => (
            <button
              onClick={() => addElements(item.type)}
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
