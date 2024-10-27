import { z } from "zod";

export const GameFormSchema = z.object({
  userDecision: z.string().nullable(),
});

export type GameFormValues = z.infer<typeof GameFormSchema>;
