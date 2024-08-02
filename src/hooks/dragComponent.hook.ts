import { useRef, useEffect, ReactNode } from "react";
import ReactDOM from "react-dom";

export const useDragImage = (content: ReactNode) => {
  const dragImageRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const dragImage = document.createElement("div");
    dragImageRef.current = dragImage;
    document.body.appendChild(dragImage);
    return () => {
      if (dragImageRef.current) {
        document.body.removeChild(dragImage);
      }
    };
  }, []);

  useEffect(() => {
    if (dragImageRef.current) {
      ReactDOM.render(content as React.ReactElement, dragImageRef.current);
    }
  }, [content]);

  return dragImageRef;
};
