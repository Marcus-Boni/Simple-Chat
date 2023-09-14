"use client";

import { useUserContext } from "@/contexts/UserContext";
import { ChatInput } from "./ChatInput";
import { ChatMessages } from "./ChatMessages";

export const ChatScreen = () => {
  const userContext = useUserContext();
  return (
    <section className="overflow-hidden rounded-md border border-slate-600 bg-slate-800 min-h-full mt-6 max-w-lg w-full">
      <div className="p-2 h-96 flex flex-col gap-4 overflow-y-auto">
        <ChatMessages />
      </div>
      <ChatInput name={userContext?.username.trim() as string} />
      <ChatInput name="Bot" />
    </section>
  );
};
