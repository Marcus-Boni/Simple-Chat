"use client";

import { ChatScreen } from "@/components/ChatScreen";
import { InitialSreeen } from "@/components/InitialScreen";
import { useUserContext } from "@/contexts/UserContext";

export default function Home() {
  const userContext = useUserContext();
  return (
    <main className="flex min-h-screen flex-col items-center p-4 bg-gradient-to-r from-gray-700 via-gray-900 to-black text-white">
      <h1 className="text-3xl font-bold">Chat Simples</h1>
      {!userContext?.chatModal && <InitialSreeen />}
      {userContext?.chatModal && <ChatScreen />}
    </main>
  );
}
