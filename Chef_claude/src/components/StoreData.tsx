
import { createContext, useState } from "react";
import { menuItems, type MenuItem } from "../service/menuItems";
import Dashboard from "./Dashiboard";

type MenuContextType = {
  menu: MenuItem[];
};

export const MenuContext = createContext<MenuContextType>({
  menu: [],
});

export default function StoreData() {
  const [menu] = useState<MenuItem[]>(menuItems);
  console.log(menu)
  return (
    <MenuContext.Provider value={{ menu }}>
      <Dashboard />
    </MenuContext.Provider>
  );
}