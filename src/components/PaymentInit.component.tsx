import { Handle, Position, useReactFlow } from "@xyflow/react";
import React, { useEffect, useRef, useState } from "react";

function PaymentInitComponent({ data: { label }, id }: any) {
  const [text, setText] = useState<string>("");
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const { setNodes } = useReactFlow();
  useEffect(() => {
    if (isEditing && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isEditing]);
  const saveText = () => {
    setIsEditing(false);
    setNodes((prevNodes: any) => {
      const node = prevNodes.find((node) => node.id === id);
      const updatedNode = {
        ...node,
        data: {
          label: text,
        },
      };
      return [...prevNodes.filter((node) => node.id !== id), updatedNode];
    });
  };

  return (
    <div
      className="border-2 bg-[#aa1fff] p-4 rounded-full px-6"
      onDoubleClick={() => setIsEditing(true)}
    >
      {isEditing ? (
        <span>
          <input
            ref={inputRef}
            type="text"
            onBlur={() => saveText()}
            onChange={(e) => setText(e.target.value)}
          />
        </span>
      ) : (
        <p className="text-white">{label}</p>
      )}

      <Handle
        type="source"
        position={Position.Right}
        className="w-3 h-3 !bg-[#aa1fff]"
      />
    </div>
  );
}

export default PaymentInitComponent;
