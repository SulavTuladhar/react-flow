import React, { useState } from "react";
import { Shapes } from "../../constraints/shapes.contrants";
import { NodeResizeControl } from "@xyflow/react";
import { ResizeIcon } from "../common/Icons.component";

function ShapesComponent(data: any) {
  const sanitizedData = JSON.parse(JSON.stringify(data));
  const shapeType = sanitizedData?.data?.shape;
  const [isDefault, setIsDefault] = useState<boolean>(true);
  return (
    <div
      className={`border flex items-center  justify-center ${
        isDefault ? "h-[100px] w-[100px]" : "h-full w-full"
      }`}
    >
      <NodeResizeControl
        className="bg-transparent border-none"
        minWidth={100}
        minHeight={100}
        style={{ zIndex: 1 }}
        onResizeStart={() => setIsDefault(false)}
      >
        <ResizeIcon />
      </NodeResizeControl>
      {Shapes[shapeType]}
    </div>
  );
}

export default ShapesComponent;
