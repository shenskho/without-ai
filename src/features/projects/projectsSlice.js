import { createSlice } from "@reduxjs/toolkit";
import  fetchProjects  from "./projectsThunks";
const initialState = {
  items: [],
  loading: false,
  error: null
};
const projectsSlice = createSlice({
  name:"projects",
  initialState,
  reducers:{},
  extraReducers:(builder) =>{
    builder.addCase(fetchProjects.pending,(state)=>{
      state.error=null;
      state.loading=true;
    })
    builder.addCase(fetchProjects.fulfilled,(state,action)=>{
      state.loading=false;
      state.items = action.payload;
    })
    builder.addCase(fetchProjects.rejected,(state,action)=>{
      state.loading=false;
      state.error = action.payload;
    })
  }
})

export default projectsSlice.reducer;