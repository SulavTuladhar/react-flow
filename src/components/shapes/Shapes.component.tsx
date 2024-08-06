import React from "react";
import { Shapes } from "../../constraints/shapes.contrants";

function ShapesComponent(data: any) {
  const sanitizedData = JSON.parse(JSON.stringify(data));
  const shapeType = sanitizedData?.data?.shape;
  return <>{Shapes[shapeType]}</>;
}

export default ShapesComponent;
