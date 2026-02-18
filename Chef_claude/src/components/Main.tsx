import { useState } from "react";

export default function Main() {
    const ingridients = [
        "food",
        "rice",
        "then",
        "done"
    ];
    const[data,setData] = useState([ingridients]);
const handleSubmit = () => {

}
   const d = data.map((data,ind) => {
    return (
    
        <ul className="text-green-800 flex gap-10">
            <li key={ind} className="m-3">{data}</li>
        </ul>
        
    );
   })
    
  return (
    <main className="pt-[30px] px-[30px] pb-[10px]">
      <form className="flex justify-center gap-3 h-[38px]" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="e.g. oregano"
          aria-label="Add ingredient"
          className="rounded-md border border-gray-300 px-[13px] py-[9px] shadow-sm flex-grow min-w-[150px] max-w-[400px]"
        />

        <button
          type="submit"
          className="rounded-md bg-[#141413] text-[#FAFAF8] w-[150px] text-sm font-medium flex items-center justify-center"
        >
          <span className="mr-1">+</span>
          Add ingredient
        </button>
      </form>

        <h1 className=" mx-auto">ingredient on hand</h1>
       
        {d}
    </main>
  );
}
