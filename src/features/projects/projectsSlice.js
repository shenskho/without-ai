import { createSlice } from "@reduxjs/toolkit";
import { fetchProjects } from "./projectsThunks";
const initialState = {
  items: [],
  loading: false,
  error: null
};
