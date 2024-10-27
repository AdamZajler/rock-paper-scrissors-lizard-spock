"use client";
import { MainScreen } from "@/features/Game/components/MainScreen";
import { useState } from "react";
import { ResultScreen } from "@/features/Game/components/ResultScreen";
import type { GameFormResponseCombined } from "@/features/Game/types/GameForm";

export function Game() {
  const [gameData, setGameData] = useState<GameFormResponseCombined>({ success: false });

  return gameData.success ? (
    <ResultScreen data={gameData.data} />
  ) : (
    <MainScreen onSuccessAction={(data) => setGameData({ success: true, data })} />
  );
}
