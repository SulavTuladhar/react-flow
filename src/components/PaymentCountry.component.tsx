import { Handle, Position, useReactFlow } from "@xyflow/react";
import React from "react";
import DeleteButtonComponent from "./common/DeleteButton.component";

function PaymentCountryComponent({ data: { country, countryCode }, id }: any) {
  const { setNodes } = useReactFlow();
  const isValidConnection = (connection) => false;
  const deleteBtn = () => {
    setNodes((prevNodes) => prevNodes.filter((node) => node.id !== id));
  };
  return (
    <div className="border-2 border-[#aa1fff] p-2 bg-white rounded-full px-6 flex items-center justify-between">
      <p className="text-[#aa1fff] text-md">{country}</p>
      <DeleteButtonComponent func={deleteBtn} />
      <Handle
        type="target"
        position={Position.Left}
        className="w-3 h-3 !bg-[#aa1fff]"
        onConnect={() => console.log("connected")}
        isValidConnection={isValidConnection}
      />
      <Handle
        type="source"
        position={Position.Right}
        className="w-3 h-3 !bg-[#aa1fff]"
      />
    </div>
  );
}

export default PaymentCountryComponent;
