import React, { useState } from "react";
import { useDragImage } from "../hooks/dragComponent.hook";
import { PaymentCountrySkeleton } from "./common/Skeletons.component";

function AddCountryComponent({
  func,
}: {
  func: (e: React.DragEvent, type: string, data: any) => void;
}) {
  const [country, setCountry] = useState("");
  const [countryCode, setCountryCode] = useState("");
  const [error, setError] = useState("");
  const dragImageRef = useDragImage(
    <PaymentCountrySkeleton country={country} />
  );
  const onDragStart = (e) => {
    // if (country.length < 1 || countryCode.length < 1) {
    //   setError("please fill up the form");
    // } else {
    //   setError("");
    func(e, "paymentCountry", { country, countryCode });
    if (dragImageRef.current) {
      e.dataTransfer.setDragImage(dragImageRef.current, 50, 50);
    }
    // }
  };

  return (
    <div
      className="cursor-grab border-2 border-[#eee] flex flex-col p-2 px-4 gap-1 w-full"
      onDragStart={(e) => onDragStart(e)}
      draggable
    >
      <div className="flex gap-1">
        <p className="font-bold text-sm">Add Country</p>
        {/* {error && <p className="text-red-800 text-sm">({error})</p>} */}
      </div>
      <div className="flex gap-1">
        <input
          type="text"
          id="paymentMethod"
          className="border-2 px-1 border-[#eee] w-9/12 text-sm"
          placeholder="eg: Nepal"
          onChange={(e) => setCountry(e.target.value)}
        />
        <input
          type="text"
          className="border-2 px-1 border-[#eee] w-3/12 text-sm"
          placeholder="eg: NP"
          onChange={(e) => setCountryCode(e.target.value)}
        />
      </div>
    </div>
  );
}

export default AddCountryComponent;
