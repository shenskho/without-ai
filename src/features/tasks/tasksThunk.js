import { createAsyncThunk } from "@reduxjs/toolkit";
import {http} from "../../api/http.js"


const fetchTasks = createAsyncThunk("tasks/fetchTasks", 
    async (_ , thunkAPI)=>{
        try{
        const response = await http.get("api/Todo/get-all-todos");
        return response.data.result.items
        } 
        catch(error){
            return thunkAPI.rejectWithValue(error.response?.data)
        }
    }
)
export default fetchTasks;