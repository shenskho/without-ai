 import { Route,Routes } from "react-router-dom";
 import Dashboard from "../pages/Dashboard"
 import Projects from "../pages/Projects"
 import Users from "../pages/Users"
 import Tasks from "../pages/Tasks"
import MainLayout from "../layouts/MainLayout";
 export default function AppRouter(){
    return(
        <Routes>
            <Route path="/" element={<MainLayout />}>
                <Route path="dashboard" element={<Dashboard />}></Route>
                <Route path="tasks" element={<Tasks />}></Route>
                <Route path="users" element={<Users />}></Route>
                <Route path="projects" element={<Projects />}></Route>
            </Route>
        </Routes>
    )
 }