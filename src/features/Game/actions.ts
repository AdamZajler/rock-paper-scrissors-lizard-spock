"use server";

import type { GameFormValues } from "@/features/Game/types/GameForm";

export async function submitGameForm(data: GameFormValues) {
  console.log("DATA: ", data);
}
