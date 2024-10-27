import { z } from "zod";

enum Options {
  WIN = "win",
  LOSE = "lose",
  DRAW = "draw",
}

export const GameResultOptionsEnum = z.nativeEnum(Options);

export type GameResultOptions = z.infer<typeof GameResultOptionsEnum>;
