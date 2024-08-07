import React from "react";
import TriangleComponent from "../components/shapes/Triangle.component";
import PentagonComponent from "../components/shapes/Pentagon.component";
import CircleComponent from "../components/shapes/Circle.component";

export const ShapeTypes = ["triangle", "pentagon", "circle"];
export const Shapes: Record<string, JSX.Element> = {
  pentagon: <PentagonComponent />,
  triangle: <TriangleComponent />,
  circle: <CircleComponent />,
};
