import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react";
import fetchTasks from "../features/tasks/tasksThunk.js";
export default function Tasks(){
 
    const distpatch = useDispatch();
    const {items, error, loading} = useSelector((state)=>state.tasks
    )
    useEffect(()=>{
        distpatch(fetchTasks())
    },[])
    
    return(
        <>
        {loading && <p>در حال بارگذاری</p>}
        {error && <p>خطای در ارتباط با سرور</p>}
        {items.map((item)=>(
             <div key={item.id}>
                <h3>{item.title}</h3>
            </div>
        ))}
        </>
    )
}