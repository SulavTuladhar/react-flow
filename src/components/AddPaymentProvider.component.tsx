import React, { useState } from "react";
import { useDragImage } from "../hooks/dragComponent.hook";
import { PaymentProviderSkeleton } from "./common/Skeletons.component";

function AddPaymentProviderComponent({ func }: { func: any }) {
  const [paymentMethod, setPaymentMethod] = useState("");
  const dragImageRef = useDragImage(
    <PaymentProviderSkeleton name={paymentMethod} />
  );
  const onDragStart = (e) => {
    func(e, "paymentProvider", { name: paymentMethod });
    if (dragImageRef.current) {
      e.dataTransfer.setDragImage(dragImageRef.current, 50, 50);
    }
  };
  return (
    <div
      className="border-2 border-[#eee] flex py-2 flex-col px-4 bg-white gap-1"
      onDragStart={(e) => onDragStart(e)}
      draggable
    >
      <h1 className="text-sm font-bold">Add Payment Methods</h1>
      <div className="flex">
        <input
          type="text"
          id="paymentMethod"
          className="border-2 px-1 border-[#eee] text-sm w-full"
          placeholder="Eg: IME PAY"
          onChange={(e) => setPaymentMethod(e.target.value)}
        />
      </div>
    </div>
  );
}

export default AddPaymentProviderComponent;
