import { useChatContext } from "@/contexts/ChatContext";
import { useState } from "react";

export const InitialSreeen = () => {
  const chatContext = useChatContext();
  const [fieldValue, setFieldValue] = useState("");

  return (
    <section className="mt-6 max-w-lg w-full">
      <label htmlFor="name" className="text-xl">
        Qual seu nome?
      </label>
      <div className="flex items-center mt-3">
        <input
          type="text"
          name="name"
          id="name"
          className="p-3 mr-3 flex-1 bg-slate-800 border border-slate-600 outline-none focus:border-slate-300 rounded-md"
          value={fieldValue}
          onChange={(e) => {
            setFieldValue(e.target.value);
          }}
        />
        <button
          type="button"
          className="p-3 rounded-md bg-slate-700"
          onClick={() => chatContext?.goToChatModal(fieldValue)}
        >
          Iniciar agora
        </button>
      </div>
    </section>
  );
};
