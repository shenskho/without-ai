import { useDispatch, useSelector } from "react-redux";
import fetchProjects from "../features/projects/projectsThunks"
import { useEffect } from "react";
export default function Projects(){
    const distpatch = useDispatch();
    const {items, loading, error}= useSelector((state)=>state.projects);
    useEffect(()=>{distpatch(fetchProjects())},[])
    return(
        <>
        {loading && <p> در حال بار گذاری</p>}
        {error && <p> خطا در ارتباط با سرور </p>}
        {items.map((item)=> (
            <div key={item.id}>
                <h3>{item.title}</h3>
            </div>))}
        </>
    )
}