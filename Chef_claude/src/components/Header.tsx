import claude from "../assets/claude.jpg";
import Main from "./Main"
export default function Header() {
  return (
    <>
    <header className="flex justify-center items-center gap-2.75 h-20 bg-white shadow-sm">
      <img src={claude} className="w-12.5" alt="Chef Claude" />
      <h1 className="font-normal">Chef Claude</h1>
    </header>
    <Main />
    </>
  ); 
}
