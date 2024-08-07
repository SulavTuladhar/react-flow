import React, { useMemo } from "react";
import { useDragImage } from "../../hooks/dragComponent.hook";
import MessageSkeletonComponent from "../common/Skeleton/MessageSkeleton.component";
import QuestionSkeleton from "../common/Skeleton/QuestionSkeleton.component";
const skeletonComponent = {
  message: <MessageSkeletonComponent />,
  question: <QuestionSkeleton />,
};
function CardWithIconComponent({
  title,
  className,
  description,
  icon,
  func,
  type,
}: {
  title: string;
  className: string;
  description: string;
  type: string;
  icon: any;
  func: (e, type, data) => void;
}) {
  const skeleton = useMemo(() => skeletonComponent[type], [type]);
  const dragImageRef = useDragImage(
    <div className="w-[180px]">{skeleton}</div>
  );
  const onDragStart = (e) => {
    func(e, type, {});
    if (dragImageRef.current) {
      e.dataTransfer.setDragImage(dragImageRef.current, 50, 50);
    }
  };
  const CardIcon = useMemo(() => icon, [icon]);
  return (
    <div
      className={`p-4 rounded-lg shadow-lg flex items-center ${className} `}
      onDragStart={(e) => onDragStart(e)}
      draggable
    >
      <div className="flex-grow">
        <p className="text-white text-lg font-bold">{title}</p>
        <p className="text-white text-xs">{description} </p>
      </div>
      <div className="p-2 bg-[#eee] rounded-full">
        <CardIcon />
      </div>
    </div>
  );
}

export default CardWithIconComponent;
