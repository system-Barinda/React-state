import { createContext, useState } from "react"
import {menuItems}  from "../service/menuItems"
import Dashiboard from "./Dashiboard";


const menuContext = createContext(null);


export default function StoreData(){
    const [menu,setMenu] = useState(menuItems);
    
    return(
<>
<menuContext.Provider value={menu}>
    <Dashiboard />
    
</menuContext.Provider>
</>
    )
}