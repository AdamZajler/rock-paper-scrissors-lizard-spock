import { type GameOptions, GameOptionsEnum } from "@/features/Game/types/GameOptions";

export const getOpponentsChoice = (): GameOptions => {
  const randomNumber = Math.floor(Math.random() * 5) + 1;

  switch (randomNumber) {
    case 1: {
      return GameOptionsEnum.enum.ROCK;
    }
    case 2: {
      return GameOptionsEnum.enum.PAPER;
    }
    case 3: {
      return GameOptionsEnum.enum.SCISSORS;
    }
    case 4: {
      return GameOptionsEnum.enum.LIZARD;
    }
    case 5: {
      return GameOptionsEnum.enum.SPOCK;
    }
    default: {
      return GameOptionsEnum.enum.ROCK;
    }
  }
};
