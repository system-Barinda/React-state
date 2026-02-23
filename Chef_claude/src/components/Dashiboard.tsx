// components/Dashboard.tsx
import { useContext } from "react";
import { MenuContext } from "./StoreData";

export default function Dashboard() {
  const { menu } = useContext(MenuContext);

  return (
    <nav style={{ display: "flex", gap: "20px" }}>
      {menu.map(item => (
        <span key={item.id}>{item.name}</span>
      ))}
    </nav>
  );
}