import {
  Handle,
  NodeResizeControl,
  Position,
  useReactFlow,
} from "@xyflow/react";
import React from "react";
import { AiFillDelete } from "react-icons/ai";
import { Shapes } from "../../constraints/shapes.contrants";
import { ResizeIcon } from "../common/Icons.component";

const ShapeBorderColor = {
  triangle: "emerald-500",
  pentagon: "violet-500",
  circle: "rose-500",
};

function ShapesComponent({ data, id }: { data: any; id: string }) {
  const { setNodes, getNode } = useReactFlow();
  const currentNode = getNode(id);
  const sanitizedData = JSON.parse(JSON.stringify(data));
  const shapeType = sanitizedData?.shape;

  const deleteNode = () =>
    setNodes((prevNodes) => prevNodes.filter((node) => node.id !== id));

  return (
    <div
      className={`relative border rounded-md border-${ShapeBorderColor[shapeType]} flex items-center justify-center`}
      style={{
        height: `${currentNode?.height ?? "100"}px`,
        width: `${currentNode?.width ?? "100"}px`,
      }}
    >
      <button
        onClick={() => deleteNode()}
        style={{ zIndex: 1 }}
        className="p-1 cursor-pointer bg-red-500 rounded-md  text-white absolute top-1 right-1"
      >
        <AiFillDelete className="h-3 w-3" />
      </button>
      <NodeResizeControl
        className={`bg-transparent border-none border-black`}
        minWidth={100}
        minHeight={100}
        style={{ zIndex: 1 }}
        keepAspectRatio
        // onResizeEnd={() => resizeEnd()}
      >
        <ResizeIcon />
      </NodeResizeControl>
      {Shapes[shapeType]}

      <Handle
        type="target"
        position={Position.Left}
        className={`h-2 w-2 bg-${ShapeBorderColor[shapeType]}`}
      />
      <Handle
        type="source"
        position={Position.Right}
        className={`h-2 w-2 bg-${ShapeBorderColor[shapeType]}`}
      />
    </div>
  );
}

export default ShapesComponent;
