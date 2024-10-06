/* THIS (.ts) FILE IS GENERATED BY TypedSignalR.Client.TypeScript */
/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
import type { HubConnection, IStreamResult, Subject } from "@microsoft/signalr";
import type {
  IGameHub,
  IGameHubReceiver,
} from "./GomokuServer.Api.Hubs.Interfaces";
import type {
  MakeMoveClientMessage,
  ChatMessageClientMessage,
} from "../GomokuServer.Api.Hubs.Messages.Client";
import type {
  GameStartedMessage,
  PlayerMadeMoveMessage,
  ErrorMessage,
} from "../GomokuServer.Api.Hubs.Messages.Server";

// components

export type Disposable = {
  dispose(): void;
};

export type HubProxyFactory<T> = {
  createHubProxy(connection: HubConnection): T;
};

export type ReceiverRegister<T> = {
  register(connection: HubConnection, receiver: T): Disposable;
};

type ReceiverMethod = {
  methodName: string;
  method: (...args: any[]) => void;
};

class ReceiverMethodSubscription implements Disposable {
  public constructor(
    private connection: HubConnection,
    private receiverMethod: ReceiverMethod[],
  ) {}

  public readonly dispose = () => {
    for (const it of this.receiverMethod) {
      this.connection.off(it.methodName, it.method);
    }
  };
}

// API

export type HubProxyFactoryProvider = {
  (hubType: "IGameHub"): HubProxyFactory<IGameHub>;
};

export const getHubProxyFactory = ((hubType: string) => {
  if (hubType === "IGameHub") {
    return IGameHub_HubProxyFactory.Instance;
  }
}) as HubProxyFactoryProvider;

export type ReceiverRegisterProvider = {
  (receiverType: "IGameHubReceiver"): ReceiverRegister<IGameHubReceiver>;
};

export const getReceiverRegister = ((receiverType: string) => {
  if (receiverType === "IGameHubReceiver") {
    return IGameHubReceiver_Binder.Instance;
  }
}) as ReceiverRegisterProvider;

// HubProxy

class IGameHub_HubProxyFactory implements HubProxyFactory<IGameHub> {
  public static Instance = new IGameHub_HubProxyFactory();

  private constructor() {}

  public readonly createHubProxy = (connection: HubConnection): IGameHub => {
    return new IGameHub_HubProxy(connection);
  };
}

class IGameHub_HubProxy implements IGameHub {
  public constructor(private connection: HubConnection) {}

  public readonly joinGameGroup = async (gameId: string): Promise<void> => {
    return await this.connection.invoke("JoinGameGroup", gameId);
  };

  public readonly makeMove = async (
    makeMoveMessage: MakeMoveClientMessage,
  ): Promise<void> => {
    return await this.connection.invoke("MakeMove", makeMoveMessage);
  };

  public readonly sendMessage = async (
    messageRequest: ChatMessageClientMessage,
  ): Promise<void> => {
    return await this.connection.invoke("SendMessage", messageRequest);
  };
}

// Receiver

class IGameHubReceiver_Binder implements ReceiverRegister<IGameHubReceiver> {
  public static Instance = new IGameHubReceiver_Binder();

  private constructor() {}

  public readonly register = (
    connection: HubConnection,
    receiver: IGameHubReceiver,
  ): Disposable => {
    const __gameGroupJoined = (...args: [string]) =>
      receiver.gameGroupJoined(...args);
    const __gameStarted = (...args: [GameStartedMessage]) =>
      receiver.gameStarted(...args);
    const __playerMadeMove = (...args: [PlayerMadeMoveMessage]) =>
      receiver.playerMadeMove(...args);
    const __sendMessage = (...args: [ChatMessageClientMessage]) =>
      receiver.sendMessage(...args);
    const __gameHubError = (...args: [ErrorMessage]) =>
      receiver.gameHubError(...args);

    connection.on("GameGroupJoined", __gameGroupJoined);
    connection.on("GameStarted", __gameStarted);
    connection.on("PlayerMadeMove", __playerMadeMove);
    connection.on("SendMessage", __sendMessage);
    connection.on("GameHubError", __gameHubError);

    const methodList: ReceiverMethod[] = [
      { methodName: "GameGroupJoined", method: __gameGroupJoined },
      { methodName: "GameStarted", method: __gameStarted },
      { methodName: "PlayerMadeMove", method: __playerMadeMove },
      { methodName: "SendMessage", method: __sendMessage },
      { methodName: "GameHubError", method: __gameHubError },
    ];

    return new ReceiverMethodSubscription(connection, methodList);
  };
}
