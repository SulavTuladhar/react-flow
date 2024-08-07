import React, { useMemo } from "react";
import { Shapes } from "../../constraints/shapes.contrants";
import { useDragImage } from "../../hooks/dragComponent.hook";

function AddShapesComponent({
  func,
  type,
}: {
  func: (e: React.DragEvent, type: string, data: any) => void;
  type: string;
}) {
  const skeleton = useMemo(() => Shapes[type], [type]);
  const dragImageRef = useDragImage(
    <div className="h-[100px] w-[100px] shadow-none">{skeleton}</div>
  );
  return (
    <div
      className={`cursor-grab h-[90px] w-[90px]`}
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
