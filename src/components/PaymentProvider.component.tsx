import { Handle, Position, useReactFlow } from "@xyflow/react";
import React from "react";
import DeleteButtonComponent from "./common/DeleteButton.component";

function PaymentProviderComponent({ data: { name }, id }: any) {
  const { setNodes } = useReactFlow();
  const isValidConnection = () => false;
  const deleteBtn = () => {
    setNodes((prevNodes) => prevNodes.filter((node) => node.id !== id));
  };
  return (
    <div className="border-2 border-[#5e5eff] flex items-center bg-white justify-between fap-4 p-2 px-4 rounded-full">
      <div>{name}</div>
      <DeleteButtonComponent func={deleteBtn} />
      <Handle
        type="target"
        position={Position.Left}
        className="h-3 w-3 bg-[#5e5eff]"
        isValidConnection={isValidConnection}
      />
    </div>
  );
}

export default PaymentProviderComponent;
