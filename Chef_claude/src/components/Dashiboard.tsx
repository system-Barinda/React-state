import { useContext } from "react";
import { MenuContext } from "./StoreData";

function Dashboard() {
  const context = useContext(MenuContext);

  if (!context) {
    throw new Error("Dashboard must be used inside MenuContext.Provider");
  }

  const { menu, setMenu } = context;

  return (
    <div>
      {menu.map(item => (
        <p key={item.id}>{item.name}</p>
      ))}
    </div>
  );
}

export default Dashboard;