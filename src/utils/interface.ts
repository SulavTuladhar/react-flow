import React from "react";

export interface CardIconInterface {
  title: string;
  description: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  className: string;
  type: string;
}
