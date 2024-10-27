import { z } from "zod";
import { type GameOptions, GameOptionsEnum } from "@/features/Game/types/GameOptions";
import type { GameResultOptions } from "@/features/Game/types/GameResultOptions";

export const GameFormSchema = z.object({
  playerChoice: GameOptionsEnum,
});

export type GameFormValues = z.infer<typeof GameFormSchema>;

interface GameFormResponseFailed {
  success: false;
}

export interface GameFormResponseSuccess {
  success: true;
  data: {
    playerChoice: GameOptions;
    opponentsChoice: GameOptions;
    gameResult: GameResultOptions;
  };
}

export type GameFormResponseCombined = GameFormResponseFailed | GameFormResponseSuccess;
