import { Handle, Position, useReactFlow } from "@xyflow/react";
import React from "react";
import { MenuConstraints } from "../../constraints";
import { uid } from "uid";

function MenuComponent({ id }) {
  const { setNodes, setEdges } = useReactFlow();

  const onClick = ({ type }: { type: string }) => {
    let newId = `${uid(3)}`;
    setNodes((prevNodes: any) => {
      const node = prevNodes.find((node) => node.id === id);
      const updatedNode = {
        ...node,
        id: newId,
        type,
        data: {},
      };
      return [...prevNodes.filter((node) => node.id !== id), updatedNode];
    });
    setEdges((prevEdges: any) => {
      const updatedEdges = prevEdges.map((edge) => {
        if (edge.source === id) {
          return { ...edge, source: newId };
        }
        if (edge.target === id) {
          return { ...edge, target: newId };
        }
        return edge;
      });
      return updatedEdges;
    });
  };

  return (
    <div className="bg-white rounded-md">
      {MenuConstraints.map((item, index) => {
        const Icon = item.icon;
        return (
          <div
            key={index}
            className="flex items-center px-2 gap-2 py-3"
            onClick={() => onClick({ type: item.type })}
          >
            <div className={item.iconStyle}>
              <Icon />
            </div>
            <p className="text-xs">{item.title}</p>
            <hr />
          </div>
        );
      })}
      <Handle type="target" position={Position.Left} />
    </div>
  );
}

export default MenuComponent;
