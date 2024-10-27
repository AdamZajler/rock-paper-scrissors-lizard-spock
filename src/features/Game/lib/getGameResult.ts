import {
  type GameResultOptions,
  GameResultOptionsEnum,
} from "@/features/Game/types/GameResultOptions";
import type { GameOptions } from "@/features/Game/types/GameOptions";

const gameResults: { [key: string]: GameResultOptions } = {
  rock_scissors: GameResultOptionsEnum.enum.WIN,
  rock_paper: GameResultOptionsEnum.enum.LOSE,
  rock_rock: GameResultOptionsEnum.enum.DRAW,
  paper_rock: GameResultOptionsEnum.enum.WIN,
  paper_scissors: GameResultOptionsEnum.enum.LOSE,
  paper_paper: GameResultOptionsEnum.enum.DRAW,
  scissors_paper: GameResultOptionsEnum.enum.WIN,
  scissors_rock: GameResultOptionsEnum.enum.LOSE,
  scissors_scissors: GameResultOptionsEnum.enum.DRAW,
};

interface Props {
  player: GameOptions;
  opponent: GameOptions;
}

export const getGameResult = ({ player, opponent }: Props): GameResultOptions => {
  const resultKey = `${player}_${opponent}`;

  return gameResults[resultKey];
};
