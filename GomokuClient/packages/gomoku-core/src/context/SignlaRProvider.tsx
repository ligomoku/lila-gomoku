import { createContext, useContext } from "react";

import type { SignalHubInterfaces, SwaggerTypes } from "@/api";
import type * as signalR from "@microsoft/signalr";
import type { ReactNode } from "react";

import { useSignalR } from "@/hooks/useSignalR";

type SignalREventHandlers = SignalHubInterfaces.IGameHubReceiver;

interface SignalRContextType {
  connection: signalR.HubConnection | null;
  isConnected: boolean;
  registerEventHandlers: (
    handlers: Partial<SignalREventHandlers>,
  ) => () => void;
  hubProxy: SignalHubInterfaces.IGameHub | null;
}

export const SignalRContext = createContext<SignalRContextType | undefined>(
  undefined,
);

interface SignalRProviderProps {
  children: ReactNode;
  playerID?: SwaggerTypes.AddPlayerToGameResponse["playerId"] | null;
}

export const SignalRProvider = ({
  children,
  playerID,
}: SignalRProviderProps) => {
  const signalRState = useSignalR(playerID!);

  return (
    <SignalRContext.Provider value={signalRState}>
      {children}
    </SignalRContext.Provider>
  );
};

export const useSignalRConnection = () => {
  const context = useContext(SignalRContext);
  if (context === undefined) {
    throw new Error(
      "useSignalRConnection must be used within a SignalRProvider",
    );
  }
  return context;
};
