import { Handle, Position, useReactFlow } from "@xyflow/react";
import React, { useMemo, useState } from "react";
import CardWrapper from "../CardWrapper.component";
import ModalComponent from "../Modal.component";
import QuestionModalComponent from "./QuestionModal.component";

function QuestionComponent({ data, id }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { setNodes } = useReactFlow();

  const closeModal = () => setIsModalOpen(false);

  const validData = useMemo(() => Object.keys(data).length === 0, [data]);

  const previousData = useMemo(() => {
    return {
      answers: data?.answers,
      question: data?.question,
    };
  }, [data]);
  const onSave = (data) => {
    setNodes((prevNodes) => {
      const nodeToUpdate = prevNodes.find((node) => node.id === id);
      if (!nodeToUpdate) return prevNodes;
      const updatedNode = {
        ...nodeToUpdate,
        data,
      };
      return prevNodes.map((node) => (node.id === id ? updatedNode : node));
    });
    closeModal();
  };
  return (
    <div onDoubleClick={() => setIsModalOpen(true)}>
      <ModalComponent
        closeModal={closeModal}
        isModalOpen={isModalOpen}
        title="Set a question"
      >
        <QuestionModalComponent data={previousData} onSave={onSave} />
      </ModalComponent>
      <CardWrapper
        background="bg-yellow-500"
        title="Question"
        id={id}
        noDataDescription={validData ? "Double click to open modal" : ""}
      >
        {data && (
          <div className="py-4 flex flex-col gap-3 text-sm">
            <p>{data?.question}</p>
            <div className="flex flex-col gap-2 text-center">
              {data?.answers?.map(
                (item: { id: number; value: string }, index: number) => (
                  <div
                    className="bg-[#f5f6fa] py-2 rounded-md relative"
                    key={index}
                  >
                    {item.value}
                    <Handle
                      id={`${item.id}`}
                      position={Position.Right}
                      type="source"
                      className="h-3 w-3 bg-green-500 border-2 hover:bg-white hover:border-green-500 duration-300"
                    />
                  </div>
                )
              )}
            </div>
          </div>
        )}
        <Handle type="target" position={Position.Left} />
      </CardWrapper>
    </div>
  );
}

export default QuestionComponent;
