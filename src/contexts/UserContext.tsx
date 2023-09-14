"use client";

import { createContext, useContext, useState, ReactNode } from "react";

type UserContextType = {
  chatModal: boolean;
  goToChatModal: () => void;
  username: string;
  setUsername: (u: string) => void
};

const UserContext = createContext<UserContextType | null>(null);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [chatModal, setChatModal] = useState(false);
  const [username, setUsername] = useState("");

  const goToChatModal = () => {
    setChatModal((p) => !p);
  };

  return (
    <UserContext.Provider value={{ chatModal, goToChatModal, username, setUsername }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => useContext(UserContext);
