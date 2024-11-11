import { useMemo } from "react";

import type { SwaggerTypes } from "@/api";
import type { BoardProps } from "@/features/Board/Board";

import { Board } from "@/features/Board/Board";
import { genParser } from "@/utils/getParser";

export interface GamePreviewProps {
  gen: SwaggerTypes.GetGameHistoryResponse["gen"];
  lastTile?: Pick<BoardProps, "lastTile">["lastTile"];
}

export const GamePreview = ({ gen, lastTile }: GamePreviewProps) => {
  const tiles = useMemo(() => genParser(gen), [gen]);

  const boardSize = tiles.length;

  const handleTileClick = (x: number, y: number) => {
    console.debug("Clicked tile at:", x, y);
  };

  return (
    <div className="p-4">
      <Board
        size={boardSize}
        tiles={tiles}
        onTileClick={handleTileClick}
        lastTile={lastTile}
        winningSequence={null}
      />
    </div>
  );
};
