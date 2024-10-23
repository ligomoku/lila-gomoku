import { ReactNode, useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { Cross2Icon } from "@radix-ui/react-icons";
import { Button } from "@/shared/ui/button";
import { Slider } from "@/shared/ui/slider";
import { useCreateGameAndNavigate } from "@/hooks/useCreateGame";
import { useAuthToken } from "@/context";
import { SwaggerTypes } from "@/api";

interface GameCreatorProps {
  isOpen: boolean;
  onClose: () => void;
  timeControl?: SwaggerTypes.TimeControlDto;
}

export const GameCreator = ({
  isOpen,
  onClose,
  timeControl,
}: GameCreatorProps) => {
  const [boardSize, setBoardSize] = useState(19);
  const { jwtToken } = useAuthToken();
  const { createGame, isLoading: isLoadingCreateGame } =
    useCreateGameAndNavigate({
      authToken: jwtToken,
      boardSizeProp: boardSize,
      timeControl,
    });

  return (
    <Dialog.Root open={isOpen} onOpenChange={onClose}>
      <Dialog.Portal>
        <Dialog.Overlay className="bg-blackA6 data-[state=open]:animate-overlayShow fixed inset-0" />
        <Dialog.Content className="data-[state=open]:animate-contentShow fixed left-1/2 top-1/2 max-h-[85vh] w-[90vw] max-w-[450px] -translate-x-1/2 -translate-y-1/2 rounded-md bg-[#2b2b2b] p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
          <Dialog.Title className="m-0 text-[17px] font-medium text-[#bababa]">
            Create a game
          </Dialog.Title>
          <Dialog.Description className="mb-5 mt-2.5 text-[15px] leading-normal text-[#999999]">
            Set up your game preferences here
          </Dialog.Description>

          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <label
                htmlFor="minutes"
                className="mb-26 text-right text-[#bababa]"
                style={{
                  //TODO: check for flex stabilization
                  marginBottom: 27,
                }}
              >
                Board size
              </label>
              <div className="col-span-3">
                <Slider
                  id="boardSize"
                  //TODO: should be taken from validation of swagger schemas
                  min={13}
                  max={19}
                  step={2}
                  value={[boardSize]}
                  onValueChange={(value) => setBoardSize(value[0])}
                />
                <div className="mt-1 text-center text-[#bababa]">
                  {boardSize}
                </div>
              </div>
            </div>
          </div>

          <Button
            className="w-full bg-[#629924] text-white hover:bg-[#58881f]"
            onClick={createGame}
            disabled={isLoadingCreateGame}
            loading={isLoadingCreateGame}
          >
            Create game
          </Button>

          <Dialog.Close asChild>
            <button
              className="focus:shadow-violet7 absolute right-2.5 top-2.5 inline-flex size-[25px] appearance-none items-center justify-center rounded-full text-[#f0f0f0] hover:bg-[#f0f0f0] focus:shadow-[0_0_0_2px] focus:outline-none"
              aria-label="Close"
            >
              <Cross2Icon />
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

GameCreator.displayName = "GameCreator";

interface GameCreatorButtonProps {
  children: ReactNode;
  timeControl?: SwaggerTypes.TimeControlDto;
}

export const GameCreatorButton = ({
  children,
  timeControl,
}: GameCreatorButtonProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpen = () => setIsModalOpen(true);
  const handleClose = () => setIsModalOpen(false);

  return (
    <>
      <div onClick={handleOpen}>{children}</div>

      <GameCreator
        isOpen={isModalOpen}
        onClose={handleClose}
        timeControl={timeControl}
      />
    </>
  );
};
