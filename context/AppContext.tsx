"use client";
import React, { createContext, useState } from "react";

interface UserChoice {
  mobile: number;
  plan_code: number;
  provider: string;
  provider_code: number;
}

interface CurrentChoiceType {
  userChoice: UserChoice;
  setUserChoice: React.Dispatch<React.SetStateAction<UserChoice>>;
}

export const AppContext = createContext<CurrentChoiceType | null>(null);

export function AppContextProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [userChoice, setUserChoice] = useState<UserChoice>({
    mobile: 0,
    plan_code: 0,
    provider: "",
    provider_code: 0,
  });

  return (
    <AppContext.Provider value={{ userChoice, setUserChoice}}>
      {children}
    </AppContext.Provider>
  );
}
