import React from "react";
import WrapperSkeletonComponent from "./WrapperSkeleton.component";

function QuestionSkeleton() {
  return (
    <WrapperSkeletonComponent background="bg-yellow-500" title="Question">
      <div className="h-[50px]"></div>
    </WrapperSkeletonComponent>
  );
}

export default QuestionSkeleton;
