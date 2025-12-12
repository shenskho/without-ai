import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";


export default function MainLayout(){
    return(
        <div style={{display:"flex", flexDirection:"row-reverse" }}>
            <SideBar/>
            <div style={{flex:1, padding:"16px", marginRight:"240px", }}>
                <Outlet/>
            </div>
        </div>
    )
}