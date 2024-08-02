/* eslint-disable no-unused-vars */
import {
  Background,
  BackgroundVariant,
  Connection,
  Controls,
  EdgeTypes,
  MarkerType,
  NodeTypes,
  OnConnect,
  Panel,
  ReactFlow,
  ReactFlowProvider,
  addEdge,
  useEdgesState,
  useNodesState,
  useReactFlow,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import React, { DragEvent, useCallback } from "react";
import { uid } from "uid";
import { initialEdges, initialNodes } from "../constants/reactFlow.constrants";
import CustomEdge from "./CustomEdge";
import DndPanelComponent from "./DndPanel.component";
import PaymentCountryComponent from "./PaymentCountry.component";
import PaymentInitComponent from "./PaymentInit.component";
import PaymentProviderComponent from "./PaymentProvider.component";
import ShapesComponent from "./shapes/Shapes.component";

const nodeTypes = {
  paymentInit: PaymentInitComponent,
  paymentCountry: PaymentCountryComponent,
  paymentProvider: PaymentProviderComponent,
  shape: ShapesComponent,
} as NodeTypes;

const edgeTypes = {
  customEdge: CustomEdge,
} as EdgeTypes;

function ReactFlowContainerComponent() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, OnEdgesChange] = useEdgesState(initialEdges);
  const { screenToFlowPosition } = useReactFlow();

  const onConnect: OnConnect = useCallback((connection: Connection) => {
    const edge = {
      ...connection,
      // animated: true,
      id: `${uid(3)}`,
      type: "customEdge",
      markerEnd: {
        type: MarkerType.ArrowClosed,
      },
    };
    setEdges((prevEdges: any) => addEdge(edge, prevEdges));
  }, []);

  const isValidConnection = (connection): boolean => {
    if (connection.target == "1") {
      return false;
    }
    return true;
  };

  const onDragOver = useCallback((event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
  }, []);

  const onDrop = useCallback(
    (event) => {
      event.preventDefault();

      const type = event.dataTransfer.getData("type");
      const data = event.dataTransfer.getData("data");
      if (
        typeof type === "undefined" ||
        !type ||
        !data ||
        typeof data === "undefined"
      ) {
        return;
      }

      const position = screenToFlowPosition({
        x: event.clientX,
        y: event.clientY,
      });
      const newNode = {
        id: `${uid(3)}`,
        type,
        data: JSON.parse(data),
        position,
      };

      setNodes((nds) => nds.concat(newNode));
    },
    [screenToFlowPosition]
  );
  return (
    <div className="h-full w-[100vw] border-2">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        fitView={true}
        onEdgesChange={OnEdgesChange}
        onNodesChange={onNodesChange}
        onConnect={onConnect}
        edgeTypes={edgeTypes}
        nodeTypes={nodeTypes}
        isValidConnection={isValidConnection}
        onDragOver={onDragOver}
        onDrop={onDrop}
      >
        <Background variant={BackgroundVariant.Cross} />
        <Controls />
        <Panel position="top-left" className="h-full w-[16rem]">
          <DndPanelComponent />
        </Panel>
      </ReactFlow>
    </div>
  );
}

export default () => (
  <ReactFlowProvider>
    <ReactFlowContainerComponent />
  </ReactFlowProvider>
);
