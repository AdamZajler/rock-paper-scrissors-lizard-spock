import { z } from "zod";

enum Options {
  ROCK = "rock",
  PAPER = "paper",
  SCISSORS = "scissors",
  LIZARD = "lizard",
  SPOCK = "spock",
}

export const GameOptionsEnum = z.nativeEnum(Options);

export type GameOptions = z.infer<typeof GameOptionsEnum>;
