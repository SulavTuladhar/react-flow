//    nodeStrokeColor={(n) => {
//       if (n.style?.background) return n.style.background;
//       return nodeColor(n);
//     }}
//     nodeColor={(n) => {
//       if (n.style?.background) return n.style.background;
//       return nodeColor(n);
//     }}

import { Node } from "@xyflow/react";

export const MiniMapNodeColor = (node: Node) => {
  switch (node.type) {
    case "message":
      return "#ef4444";
    case "question":
      return "#facc15";
    case "shape":
      return "#f87171";
    default:
      return "#9ca3af";
  }
};
