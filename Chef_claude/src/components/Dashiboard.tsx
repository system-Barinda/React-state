import { useContext } from "react";
import { MenuContext } from "./StoreData";

export default function Dashboard() {
  const { menu } = useContext(MenuContext);
console.log(menu)
  return (
    <div>
      {menu.map(item => (
        <p key={item.id}>{item.name}</p>
      ))}
    </div>
  );
}