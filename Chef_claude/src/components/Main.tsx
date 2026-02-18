import { useState } from "react";

export default function Main() {
  const ingredients = ["Chicken breasts", "Most of the main spices", "Olive oil", "Heavy cream", "Chicken broth", "Parmesan cheese", "Spinach"];

  const [data, setData] = useState<string[]>(ingredients);
  const [food, setFood] = useState("");

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    if (!food.trim()) return;

    setData(prev => [...prev, food]);
    setFood("");
  };

  return (
    <main className="max-w-xl mx-auto px-6 py-8">
  
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

  
      <h2 className="text-lg font-semibold text-gray-900 mb-4">
        Ingredients on hand:
      </h2>

     
      <ul className="list-disc pl-5 space-y-2 text-gray-700">
        {data.map((item, ind) => (
          <li key={ind}>
            {item}
          </li>
        ))}
      </ul>
    </main>
  );
}
