import { SectionList } from "@/features/SectionList";
import { TimeControls } from "@/features/TimeControls";
import { OnlinePlayersInfo } from "@/features/OnlinePlayersInfo";
import { GameOptionsButtons } from "@/features/GameOptionsButton";
import { useNavigate } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { Users } from "lucide-react";
import { getDefaultHeaders, typedStorage } from "@/shared/lib/utils";
import { useCreateGameAndNavigate } from "@/hooks/useCreateGame";
import { SwaggerTypes, SwaggerServices } from "@/api";

import { useAuthToken } from "@/context";

export const HomeGame = () => {
  const navigate = useNavigate();
  const { data: paginatedGames } = useFetchGames();
  const { jwtToken } = useAuthToken();

  const handleCreateGame = useCreateGameAndNavigate(
    jwtToken || typedStorage.getItem("jwtToken") || "",
  );

  const transformGameData = (
    games: SwaggerTypes.GetAvailableGamesResponse[] | undefined,
  ) => {
    return games?.map((game) => ({
      id: game.gameId,
      title: game.opponent.userName,
      icon: <Users className="mr-3 h-5 w-5 text-[#bababa] sm:h-6 sm:w-6" />,
    }));
  };

  return (
    <div className="min-h-screen bg-[#161512] text-base text-[#bababa] sm:text-lg">
      <main className="container mx-auto p-4 sm:p-6">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
          <div className="lg:col-span-3">
            <SectionList
              title="Online games"
              items={transformGameData(paginatedGames?.data)}
              onItemClick={(item) => navigate({ to: `/game/join/${item.id}` })}
            />
            <p className="text-base sm:text-lg">
              Gomoku.org is a free, open-source Five in a Row game platform.
            </p>
          </div>
          <div className="lg:col-span-6">
            <h2 className="mb-6 text-2xl font-bold text-[#bababa] sm:text-3xl">
              Quick pairing
            </h2>
            <TimeControls />
          </div>
          <div className="lg:col-span-3">
            <GameOptionsButtons onCreateGameClick={handleCreateGame} />
            <OnlinePlayersInfo />
          </div>
        </div>
      </main>
    </div>
  );
};

const useFetchGames = () =>
  useQuery<
    SwaggerTypes.GetApiGamesAvailableToJoinResponse,
    SwaggerTypes.GetApiGamesAvailableToJoinError,
    SwaggerTypes.GetApiGamesAvailableToJoinResponse,
    [string, string | null]
  >({
    queryKey: ["games", null],
    queryFn: async () => {
      const response = await SwaggerServices.getApiGamesAvailableToJoin({
        headers: getDefaultHeaders(),
      });

      if (!response.data) {
        throw new Error("Invalid game data received");
      }

      return response.data;
    },
    refetchInterval: 5000,
  });
