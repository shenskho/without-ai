import { createAsyncThunk } from "@reduxjs/toolkit";
import {http} from "../../api/http"

 const fetchProjects = createAsyncThunk("projects/fetchProjects",
    async (_, thunkAPI){
        try{
            const response = await http.get("api/Project/get-all-projects");
            return response.data.result.items
        }
        catch(error){
            return thunkAPI.rejectWithValue(error.response?.data);
        }
    }
 )

