import { useState } from "react";
import type { Ingredients } from "../types/ingredients";
import data1 from "../service/ingredients";
import IngredientForm from "./IngredientForm";

export default function Main() {
  const [data, setData] = useState<Ingredients>(data1);

  const addIngredient = (ingredient: string) => {
    setData((prev) => [...prev, ingredient]);
  };

  return (
    <main className="max-w-xl mx-auto px-6 py-8">
      <IngredientForm onAddIngredient={addIngredient} />

      <h2 className="text-lg font-semibold text-gray-900 mb-4">
        Ingredients on hand:
      </h2>

      <ul className="list-disc pl-5 space-y-2 text-gray-700 mb-8">
        {data.map((item, ind: number) => (
          <li key={ind}>{item}</li>
        ))}
      </ul>

      <div className="flex items-center justify-between rounded-lg bg-[#F6F5F2] px-6 py-5">
        <div>
          <h3 className="text-sm font-semibold text-gray-900">
            Ready for a recipe?
          </h3>
          <p className="text-sm text-gray-600">
            Generate a recipe from your list of ingredients.
          </p>
        </div>

        <button className="rounded-md bg-[#D97A57] px-4 py-2 text-sm font-medium text-white hover:opacity-90 transition">
          Get a recipe
        </button>
      </div>
    </main>
  );
}
