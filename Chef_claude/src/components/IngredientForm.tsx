import { useState } from "react";

type IngredientFormProps = {
  onAddIngredient: (ingredient: string) => void;
};

export default function IngredientForm({
  onAddIngredient,
}: Readonly<IngredientFormProps>) {
  const [food, setFood] = useState("");

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    if (!food.trim()) return;

    onAddIngredient(food);
    setFood("");
  };

  return (
    <form
      className="flex items-center gap-3 mb-8"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        value={food}
        onChange={(e) => setFood(e.target.value)}
        placeholder="e.g. oregano"
        aria-label="Add ingredient"
        className="grow rounded-md border border-gray-300 px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-400"
      />

      <button
        type="submit"
        className="flex items-center justify-center gap-1 rounded-md bg-[#141413] text-[#FAFAF8] px-4 py-2 text-sm font-medium hover:opacity-90 transition"
      >
        <span className="text-lg leading-none">+</span>
        Add ingredient
      </button>
    </form>
  );
}
