import { useContext } from "react";
import { MenuContext } from "./StoreData";

export default function Dashboard() {
  const { menu } = useContext(MenuContext);



  return (
    <nav className="flex gap-20 items-center justify-center h-20 w-[100%] shadow-2xl">
      {menu.map(item => (
        <span key={item.id}>{item.name}</span>
      ))}
    </nav>
  );
}