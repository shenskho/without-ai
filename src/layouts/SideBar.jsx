import { Nav, NavItem } from "reactstrap";
import { NavLink } from "react-router-dom";

export default function SideBar() {
  return (
    <div style={{position:"fixed", top:0, right:0,overflowY:"auto", backgroundColor:"#f8f9fa",borderLeft:"2px solid #000000ff",minHeight:"100vh", height:"220px", padding:"16px"}}>
    <Nav vertical>
      <NavItem>
        <NavLink className={({isActive})=> isActive?"nav-link active" : "nav-link"} to="/dashboard">داشبورد</NavLink>
      </NavItem>
      <NavItem>
        <NavLink className={({isActive})=> isActive? "nav-link active" : "nav-link"} to="/projects">پروژه ها</NavLink>
      </NavItem>
      <NavItem>
        <NavLink className={({isActive})=> isActive? "nav-link active": "nav-link"} to="/tasks">تسک ها</NavLink>
      </NavItem>
      <NavItem>
        <NavLink className={({isActive})=> isActive? "nav-link active" : "nav-link"} to="/users">کاربران</NavLink>
      </NavItem>
    </Nav>
    </div>
  );
}
