import claude from "../assets/claude.jpg";

export default function Header() {
  return (
    <header className="flex justify-center items-center gap-[11px] h-20 bg-white shadow-sm">
      <img src={claude} className="w-[50px]" alt="Chef Claude" />
      <h1 className="font-normal">Chef Claude</h1>
    </header>
  );
}
