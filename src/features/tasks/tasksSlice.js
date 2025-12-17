import { createSlice } from "@reduxjs/toolkit";
import fetchTasks from "./tasksThunk";

const initialState = {
  items: [],
  loading: false,
  error: null,
};

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchTasks.pending, (state) => {
        state.error = null;
        state.loading = true;
    });
    builder.addCase(fetchTasks.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
    });
    builder.addCase(fetchTasks.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
    });
  },
});
 export default tasksSlice.reducer;