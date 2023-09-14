"use client";

import { Message } from "@/@types/Message";
import { chatReducer } from "@/reducers/chatReducer";
import { createContext, ReactNode, useReducer, useContext } from "react";

type ChatContextType = {
  chat: Message[];
  addMessage: (user: string, text: string) => void;
};

const ChatContext = createContext<ChatContextType | null>(null);

export const ChatProvider = ({ children }: { children: ReactNode }) => {
  const [chat, dispatch] = useReducer(chatReducer, []);

  const addMessage = (user: string, text: string) => {
    dispatch({
      type: "add",
      payload: { user, text },
    });
  };

  return (
    <ChatContext.Provider value={{ chat, addMessage }}>
      {children}
    </ChatContext.Provider>
  );
};

export const useChatContext = () => useContext(ChatContext);
