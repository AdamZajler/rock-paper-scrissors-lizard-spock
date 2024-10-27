import type { GameFormResponseSuccess } from "@/features/Game/types/GameForm";

interface Props {
  data: GameFormResponseSuccess["data"];
}

export function ResultScreen({ data }: Props) {
  return (
    <div>
      Gracz: {data.playerChoice}
      <br />
      Przeciwnik: {data.opponentsChoice}
      <br />
      Wynik: {data.gameResult}
      <br />
    </div>
  );
}
