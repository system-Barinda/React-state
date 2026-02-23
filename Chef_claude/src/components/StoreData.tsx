import { createContext, useState } from "react";
import { menuItems } from "../service/menuItems";
import Dashboard from "./Dashboard";

/* Menu item type */
export type MenuItem = {
  id: number;
  name: string;
};

/* Context type */
type MenuContextType = {
  menu: MenuItem[];
  setMenu: React.Dispatch<React.SetStateAction<MenuItem[]>>;
};

/* Create context */
export const MenuContext = createContext<MenuContextType>({
  menu: [],
  setMenu: () => {},
});

export default function StoreData() {
  const [menu, setMenu] = useState<MenuItem[]>(menuItems);

  return (
    <MenuContext.Provider value={{ menu, setMenu }}>
      <Dashboard />
    </MenuContext.Provider>
  );
}