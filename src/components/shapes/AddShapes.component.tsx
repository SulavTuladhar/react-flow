import React from "react";
import { Shapes } from "../../constraints/shapes.contrants";
import { useDragImage } from "../../hooks/dragComponent.hook";

function AddShapesComponent({
  func,
  type,
}: {
  func: (e: React.DragEvent, type: string, data: any) => void;
  type: string;
}) {
  const dragImageRef = useDragImage(
    <div className="h-[100px] w-[100px] shadow-none">{Shapes[type]}</div>
  );
  return (
    <div
      className={`w-[100px] cursor-grab h-[100px] w-[100px]`}
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
