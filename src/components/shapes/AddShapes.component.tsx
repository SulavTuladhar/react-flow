import React from "react";
import { useDragImage } from "../../hooks/dragComponent.hook";
import { Shapes } from "../../constraints/shapes.contrants";

function AddShapesComponent({
  func,
  type,
}: {
  func: (e: React.DragEvent, type: string, data: any) => void;
  type: string;
}) {
  const dragImageRef = useDragImage(Shapes[type]);
  return (
    <div
      className={`w-[100px] cursor-grab`}
      draggable={!!func}
      onDragStart={(e) => {
        func(e, "shape", { shape: type });
        if (dragImageRef.current) {
          e.dataTransfer.setDragImage(dragImageRef.current, 50, 50);
        }
      }}
    >
      {Shapes[type]}
    </div>
  );
}

export default AddShapesComponent;
