import { createContext, useState } from "react";
import { menuItems } from "../service/menuItems";
import Dashboard from "./Dashiboard";


 type MenuItem = {
  id: number;
  name: string;
};


type MenuContextType = {
  menu: MenuItem[];
  setMenu: React.Dispatch<React.SetStateAction<MenuItem[]>>;
};


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