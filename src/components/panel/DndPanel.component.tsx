import React from "react";
import CardWithIconComponent from "./CardWithIcon.component";
import { DndConstraints } from "../../constraints/panel.constraints";
function DndPanelComponent() {
  const onDragStart = (event, nodeType, data) => {
    event.dataTransfer.setData("type", nodeType);
    event.dataTransfer.setData("data", JSON.stringify(data));
    event.dataTransfer.effectAllowed = "move";
  };
  return (
    <div className="bg-white h-full flex gap-2 flex-col py-2 border-[#eee] border-2 px-4">
      {DndConstraints.map((item, index) => (
        <CardWithIconComponent
          className={item.className}
          icon={item.icon}
          description={item.description}
          title={item.title}
          key={index}
          type={item.type}
          func={onDragStart}
        />
      ))}
    </div>
  );
}

export default DndPanelComponent;
