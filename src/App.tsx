/* eslint-disable no-unused-vars */
import React from "react";
import ReactFlowContainerComponent from "./components/ReactFlowContainer.component";
import Modal from "react-modal";

function App() {
  Modal.setAppElement(document.getElementById("root"));

  return (
    <div className="h-[100vh] w-full">
      <ReactFlowContainerComponent />
    </div>
  );
}

export default App;
