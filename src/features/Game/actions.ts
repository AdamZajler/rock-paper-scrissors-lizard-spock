"use server";

import type { GameFormResponseCombined, GameFormValues } from "@/features/Game/types/GameForm";
import { GameOptionsEnum } from "@/features/Game/types/GameOptions";
import { z } from "zod";
import { getOpponentsChoice } from "@/features/Game/lib/getOponnentsChoice";
import { getGameResult } from "@/features/Game/lib/getGameResult";

const schema = z.object({
  value: GameOptionsEnum,
});

export async function submitGameForm({
  playerChoice,
}: GameFormValues): Promise<GameFormResponseCombined> {
  const validation = schema.safeParse({
    value: playerChoice,
  });

  if (!validation.success) {
    return {
      // TODO dodać obsługę tego przypadku na froncie
      success: false,
    };
  }

  const opponentsChoice = getOpponentsChoice();
  const gameResult = getGameResult({ player: playerChoice, opponent: opponentsChoice });

  return {
    success: true,
    data: {
      playerChoice,
      opponentsChoice,
      gameResult,
    },
  };
}
