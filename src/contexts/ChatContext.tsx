"use client";

import { createContext, useContext, useState } from "react";

type ChatContextType = {
  chatModal: boolean;
  goToChatModal: (v: string) => void;
  username: string
};

const ChatContext = createContext<ChatContextType | null>(null);

export const ChatProvider = ({ children }: { children: React.ReactNode }) => {
  const [chatModal, setChatModal] = useState(false);
  const [username, setUsername] = useState('')

  const goToChatModal = (name: string) => {
    setChatModal((p) => !p);
    setUsername(name)
  };

  return (
    <ChatContext.Provider value={{ chatModal, goToChatModal, username }}>
      {children}
    </ChatContext.Provider>
  );
};

export const useChatContext = () => useContext(ChatContext);
