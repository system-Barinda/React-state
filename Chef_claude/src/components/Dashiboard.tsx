import { useContext } from "react"
import menuContext from "../components/StoreData"
export default function Dashiboard(){
    const menu = useContext(menuContext)
    console.log(menu);
    return(<header className="h-20 w-[100%] flex justify-center items-center text-black shadow gap-20">
    
    </header>)
}