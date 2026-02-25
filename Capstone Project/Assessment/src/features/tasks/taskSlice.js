import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const api = "http://localhost:3001/complaints";

export const fetchTasks = createAsyncThunk("tasks/fetch", async () => {
  const response = await axios.get(api);
  return response.data;
});

export const addTasks = createAsyncThunk("tasks/add", async (task) => {
  const response = await axios.post(api, task);
  return response.data;
});

export const deleteTasks = createAsyncThunk("tasks/delete", async (id) => {
  await axios.delete(`${api}/${id}`);
  return id;
});

export const updateTask = createAsyncThunk("tasks/update", async (task) => {
  const response = await axios.put(`${api}/${task.id}`, task);
  return response.data;
});

const taskSlice = createSlice({
  name: "tasks",
  initialState: {
    list: [],
    search: "",
    loading: false,
    edititem:null,
  },
  reducers: {
    setSearch: (state, action) => {
      state.search = action.payload;
    },
     setEditingTask: (state, action) => {
      state.editing = action.payload;
  }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTasks.fulfilled, (state, action) => {
        state.list = action.payload;
      })
      .addCase(addTasks.fulfilled, (state, action) => {
        state.list.unshift(action.payload);
      })
      .addCase(deleteTasks.fulfilled, (state, action) => {
        state.list = state.list.filter((t) => t.id !== action.payload);
      })
      .addCase(updateTask.fulfilled, (state, action) => {
        const index = state.list.findIndex((t) => t.id === action.payload.id);
        state.list[index] = action.payload;
      });
  },
});

export const { setSearch,setEditingTask } = taskSlice.actions;
export default taskSlice.reducer;
