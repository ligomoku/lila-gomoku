/* THIS (.ts) FILE IS GENERATED BY Tapper */
/* eslint-disable */
/* tslint:disable */
import type { TileDto } from "./GomokuServer.Application.Dto";

/** Transpiled from GomokuServer.Api.Hubs.Messages.Server.ErrorMessage */
export type ErrorMessage = {
  /** Transpiled from string */
  message: string;
};

/** Transpiled from GomokuServer.Api.Hubs.Messages.Server.GameStartedMessage */
export type GameStartedMessage = {
  /** Transpiled from bool */
  isMyMoveFirst: boolean;
};

/** Transpiled from GomokuServer.Api.Hubs.Messages.Server.PlayerJoinedGameMessage */
export type PlayerJoinedGameMessage = {
  /** Transpiled from string */
  userName: string;
};

/** Transpiled from GomokuServer.Api.Hubs.Messages.Server.PlayerMadeMoveMessage */
export type PlayerMadeMoveMessage = {
  /** Transpiled from string */
  playerId: string;
  /** Transpiled from GomokuServer.Application.Dto.TileDto */
  tile: TileDto;
  /** Transpiled from string */
  placedTileColor: string;
};
