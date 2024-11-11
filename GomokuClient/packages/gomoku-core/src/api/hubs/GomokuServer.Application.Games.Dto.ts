/* THIS (.ts) FILE IS GENERATED BY Tapper */
 
/* tslint:disable */

/** Transpiled from GomokuServer.Application.Games.Dto.ClockDto */
export type ClockDto = {
  /** Transpiled from long */
  black: number;
  /** Transpiled from long */
  white: number;
};

/** Transpiled from GomokuServer.Application.Games.Dto.PlayerDto */
export type PlayerDto = {
  /** Transpiled from string */
  playerId: string;
  /** Transpiled from string */
  userName: string;
  /** Transpiled from string */
  color: string;
};

/** Transpiled from GomokuServer.Application.Games.Dto.PlayersDto */
export type PlayersDto = {
  /** Transpiled from GomokuServer.Application.Games.Dto.PlayerDto? */
  black?: PlayerDto;
  /** Transpiled from GomokuServer.Application.Games.Dto.PlayerDto? */
  white?: PlayerDto;
};

/** Transpiled from GomokuServer.Application.Games.Dto.TileDto */
export type TileDto = {
  /** Transpiled from int */
  x: number;
  /** Transpiled from int */
  y: number;
};
