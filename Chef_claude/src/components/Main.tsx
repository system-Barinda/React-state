export default function Main() {
  return (
    <main className="pt-[30px] px-[30px] pb-[10px]">
      <form className="flex justify-center gap-3 h-[38px]">
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
    </main>
  );
}
