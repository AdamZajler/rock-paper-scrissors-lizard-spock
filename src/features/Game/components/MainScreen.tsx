"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { type SubmitHandler, useForm } from "react-hook-form";
import { submitGameForm } from "@/features/Game/actions";
import {
  type GameFormResponseSuccess,
  GameFormSchema,
  type GameFormValues,
} from "@/features/Game/types/GameForm";

interface Props {
  onSuccessAction: (data: GameFormResponseSuccess["data"]) => void;
}

export function MainScreen({ onSuccessAction }: Props) {
  const { register, handleSubmit } = useForm<GameFormValues>({
    resolver: zodResolver(GameFormSchema),
    mode: "onBlur",
  });

  const onSubmit: SubmitHandler<GameFormValues> = async (data) => {
    const res = await submitGameForm(data);

    if (res.success) {
      onSuccessAction(res.data);
      return;
    }

    //  TODO dodać wyświetlanie błędu (totalny edge case)
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("playerChoice")} />
        <button type="submit">Submit</button>
        {/* TODO dodać wyświetlanie błędu */}
      </form>
    </div>
  );
}
