"use client";

import { ChatScreen } from "@/components/ChatScreen";
import { InitialSreeen } from "@/components/InitialScreen";
import { useChatContext } from "@/contexts/ChatContext";

export default function Home() {
  const chatContext = useChatContext();
  return (
    <main className="flex min-h-screen flex-col items-center p-4 bg-gradient-to-r from-gray-700 via-gray-900 to-black text-white">
      <h1 className="text-3xl font-bold">Chat Simples</h1>
      {!chatContext?.chatModal && <InitialSreeen />}
      {chatContext?.chatModal && <ChatScreen />}
    </main>
  );
}
