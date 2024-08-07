import React from "react";
import { AiFillDelete } from "react-icons/ai";

function InputComponent({
  forms,
  handleInputChange,
  removeForm,
}: {
  forms: any;
  handleInputChange: (id: number, value: string, type: string) => void;
  removeForm: (type: string, id: number) => void;
}) {
  return (
    <div className="mt-4">
      {forms.map((form) => (
        <div key={form.id} className="flex items-center mb-2">
          <input
            type="text"
            value={form.value}
            onChange={(e) => handleInputChange(form.id, e.target.value, "form")}
            className="border p-2 rounded mr-2 w-full bg-[#f5f6fa]"
          />
          <button
            onClick={() => removeForm("form", form.id)}
            className="bg-red-500 text-white p-2 rounded-full"
          >
            <AiFillDelete />
          </button>
        </div>
      ))}
    </div>
  );
}

export default InputComponent;
