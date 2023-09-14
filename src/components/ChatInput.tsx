import { useChatContext } from "@/contexts/ChatContext";
import { useUserContext } from "@/contexts/UserContext";
import { useState, KeyboardEvent } from "react";

type ChatInputProps = {
  name: string;
};

export const ChatInput = ({name}: ChatInputProps) => {
  const [fieldValue, setFieldValue] = useState("");
  const chatContext = useChatContext();

  const handleKeyUpAction = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.code.toLowerCase() === "enter") {
      if (fieldValue.trim() === "") return null;
      chatContext?.addMessage(name, fieldValue);
      setFieldValue("");
    }
  };

  return (
    <input
      type="text"
      name={name}
      className="w-full outline-none p-3 bg-slate-950 border-t border-slate-600"
      placeholder={`${name}, digite uma mensagem (e aperte enter)`}
      value={fieldValue}
      onChange={(e) => setFieldValue(e.target.value)}
      onKeyUp={handleKeyUpAction}
    />
  );
}