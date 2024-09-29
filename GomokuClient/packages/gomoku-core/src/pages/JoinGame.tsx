import { useContext, useEffect } from "react";
import Square from "@/features/Square/Square";
import { useBoard } from "@/hooks/useBoard";
import { Timer } from "@/features/Timer";
import { Chat } from "@/features/Chat";
import { useParams } from "@tanstack/react-router";
import { useMutation } from "@tanstack/react-query";
import { postApiGameByGameIdJoin } from "@/api/client";
import { getDefaultHeaders } from "@/shared/lib/utils";
import { AuthTokenContext } from "@/context";

const JoinGame = () => {
  const { board, winner, handlePieceClick } = useBoard();
  //TODO: check for better way to get gameID from url, should be considered routing file params loaders
  const { gameID } = useParams({ strict: false });
  const jwtToken = useContext(AuthTokenContext);
  const joinGame = useJoinGame(
    jwtToken || localStorage.getItem("jwtToken") || "",
  );

  useEffect(() => {
    if (gameID) {
      joinGame.mutate(gameID, {
        onSuccess: () => {
          console.log("Successfully joined the game!");
        },
        onError: (error) => {
          alert(`Error joining the game: ${error.message}`);
        },
      });
    }
  }, [gameID]);

  useEffect(() => {
    if (winner) alert(`The winner is: ${winner}`);
  }, [winner]);

  const handleMove = (row: number, col: number, value: string | null) => {
    if (winner || value) return;
    handlePieceClick(row, col, value);
  };

  return (
    <div className="min-h-screen bg-[#161512] text-base text-[#bababa] sm:text-lg">
      <div className="font-open-sans flex flex-col items-center p-4 font-light">
        {gameID && (
          <div className="mb-5 flex w-full flex-wrap justify-center">
            <div className="grid-cols-19 grid">
              {board.map((row, rowIndex) => (
                <div className="flex" key={rowIndex}>
                  {row.map((col, colIndex) => (
                    <Square
                      key={`${rowIndex}-${colIndex}`}
                      row={rowIndex}
                      col={colIndex}
                      value={col}
                      onClick={() => handleMove(rowIndex, colIndex, col)}
                    />
                  ))}
                </div>
              ))}
            </div>

            <div className="ml-4 flex flex-col justify-between">
              <Timer />
              <br />
              <Chat />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

JoinGame.displayName = "JoinGame";

const useJoinGame = (authToken: string) =>
  useMutation<void, Error, string>({
    mutationFn: async (gameId) => {
      const response = await postApiGameByGameIdJoin({
        path: { gameId },
        headers: getDefaultHeaders(authToken),
      });

      if (!response.data) {
        throw new Error("Invalid game data received");
      }
    },
  });

export default JoinGame;
