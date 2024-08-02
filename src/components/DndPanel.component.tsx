import React from "react";
import { ShapeTypes } from "../constants/shapes.contrants";
import AddCountryComponent from "./AddCountry.component";
import AddPaymentProviderComponent from "./AddPaymentProvider.component";
import AddShapesComponent from "./shapes/AddShapes.component";

function DndPanelComponent() {
  const onDragStart = (event, nodeType, data) => {
    console.log("node type >> ", nodeType);
    event.dataTransfer.setData("type", nodeType);
    event.dataTransfer.setData("data", JSON.stringify(data));
    event.dataTransfer.effectAllowed = "move";
  };
  return (
    <div className="bg-white h-full flex gap-2 flex-col py-2 border-[#eee] border-2 px-4">
      <p className="text-center text-[#aa1fff]">
        Drag the components you like to use
      </p>
      <div className="flex gap-2 flex-col">
        <AddCountryComponent func={onDragStart} />
        <AddPaymentProviderComponent func={onDragStart} />
        <div className="mt-5 w-full">
          <p className="mb-5 ">Shapes:</p>
          <div className="flex gap-3 flex-wrap">
            {ShapeTypes.map((item: string, index: number) => (
              <AddShapesComponent func={onDragStart} type={item} key={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default DndPanelComponent;
