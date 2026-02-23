import { createContext, useState } from "react";
import { menuItems } from "../service/menuItems";
import Dashboard from "./Dashiboard";

export const MenuContext = createContext(null);

export default function StoreData() {
  const [menu, setMenu] = useState(menuItems);

  return (
    <MenuContext.Provider value={{ menu, setMenu }}>
      <Dashboard />
    </MenuContext.Provider>
  );
}