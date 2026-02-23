import { useContext } from "react";
import { MenuContext } from "./StoreData";

function Dashboard() {
  const { menu, setMenu } = useContext(MenuContext);

  return (
    <div>
      {menu.map(item => (
        <p key={item.id}>{item.name}</p>
      ))}
    </div>
  );
}