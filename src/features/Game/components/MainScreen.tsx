"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { type SubmitHandler, useForm } from "react-hook-form";
import { submitGameForm } from "@/features/Game/actions";
import { GameFormSchema, type GameFormValues } from "@/features/Game/types/GameForm";

export function MainScreen() {
  const { register, handleSubmit } = useForm<GameFormValues>({
    resolver: zodResolver(GameFormSchema),
  });

  const onSubmit: SubmitHandler<GameFormValues> = async (data) => {
    await submitGameForm(data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("userDecision")} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
