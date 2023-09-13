"use client";

import { useState, KeyboardEvent } from "react";
import { useChatContext } from "@/contexts/ChatContext";

export const ChatScreen = () => {
  const chatContext = useChatContext();
  const [userFieldValue, setUserFieldValue] = useState("");
  const [botFieldValue, setBotFieldValue] = useState("");

  const handleKeyUpAction = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.code.toLowerCase() === "enter") {
      if (userFieldValue.trim() === '') return null

      
    }
  };

  return (
    <section className="overflow-hidden rounded-md border border-slate-600 bg-slate-800 min-h-full mt-6 max-w-lg w-full">
      <div className="p-2 h-96 flex flex-col gap-4 overflow-y-auto">
        <p className="bg-slate-700 ml-auto rounded-md p-2 border border-slate-600 text-right break-words max-w-full font-bold">
          {chatContext?.username} <br />{" "}
          <span className="font-normal">Opa tudo bem mano?</span>
        </p>
        <p className="bg-slate-700 max-w-max mr-auto rounded-md p-2 border border-slate-600 font-bold">
          Bot <br /> <span className="font-normal">Fala ai cara!</span>
        </p>
      </div>
      <input
        type="text"
        name="message"
        className="w-full outline-none p-3 bg-slate-950 border-t border-slate-600"
        placeholder={`${chatContext?.username}, digite uma mensagem (e aperte enter)`}
        value={userFieldValue}
        onChange={(e) => setUserFieldValue(e.target.value)}
        onKeyUp={handleKeyUpAction}
      />
      <input
        type="text"
        name="message"
        className="w-full outline-none p-3 bg-slate-950 border-t border-slate-600"
        placeholder="Bot, digite uma mensagem (e aperte enter)"
        value={botFieldValue}
        onChange={(e) => setBotFieldValue(e.target.value)}
      />
    </section>
  );
};
