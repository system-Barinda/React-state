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

      <ul className="list-disc pl-5 space-y-2 text-gray-700">
        {data.map((item, ind:number) => (
          <li key={ind}>{item}</li>
        ))}
      </ul>
    </main>
  );
}
