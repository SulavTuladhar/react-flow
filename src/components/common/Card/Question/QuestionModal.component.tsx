import React, { useEffect, useState } from "react";
import { AiFillDelete } from "react-icons/ai";
import { uid } from "uid";

const defaultInput = {
  id: uid(3),
  value: "",
};

function QuestionModalComponent({
  data,
  onSave,
}: {
  data: any;
  onSave: (data: any) => void;
}) {
  const [question, setQuestion] = useState<string>(data.question ?? "");
  const [ansVariants, setAnsVariants] = useState<any>(
    data.answers ?? [defaultInput]
  );

  const addForm = (e) => {
    e.preventDefault();
    setAnsVariants(
      (prevForms) => [...prevForms, { id: uid(3), value: "" }] as any
    );
  };
  const handleInputChange = (id: number, value: string) => {
    setAnsVariants((prevForms: any) =>
      prevForms.map((form) => (form.id === id ? { ...form, value } : form))
    );
  };
  const removeForm = (e, id: number) => {
    e.preventDefault();
    ansVariants.find((variant) => variant.id == id);
    if (ansVariants.value.length >= 1) {
      setAnsVariants((prevForms) =>
        prevForms.filter((form: any) => form.id !== id)
      );
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const filteredAnswers = ansVariants.filter(
      (variant) => variant.value.trim() !== ""
    );
    const data = {
      question,
      answers: filteredAnswers,
    };
    onSave(data);
  };
  return (
    <div className="py-6 text-sm">
      <form className="flex flex-col gap-4">
        <label htmlFor="question">Question text</label>
        <textarea
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          className="bg-[#f5f6fa] rounded-md outline-none pt-2 pl-2"
          rows={6}
        >
          {" "}
        </textarea>
        <hr />
        <div className="flex items-center justify-between">
          <label>Answer Variant</label>
          <button
            onClick={(e) => addForm(e)}
            className="border-2 border-green-400 bg-green-400 py-1 px-4 rounded-md text-white"
          >
            + variant
          </button>
        </div>
        <div>
          {ansVariants.map((form) => (
            <div key={form.id} className="flex items-center mb-2">
              <input
                type="text"
                value={form.value}
                onChange={(e) => handleInputChange(form.id, e.target.value)}
                className="border p-2 rounded-md mr-2 w-full outline-none bg-[#f5f6fa]"
              />
              <button
                onClick={(e) => removeForm(e, form.id)}
                className="bg-red-500 text-white p-2 rounded-md"
              >
                <AiFillDelete />
              </button>
            </div>
          ))}
        </div>
        <div className="flex gap-1 justify-end">
          <button className="border border-green-400 w-[5rem] py-2 rounded-md text-sm text-green-500">
            Cancel
          </button>
          <button
            onClick={(e) => onSubmit(e)}
            className="border border-green-400 bg-green-400 w-[5rem] py-2 rounded-md text-sm text-white"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
}

export default QuestionModalComponent;
