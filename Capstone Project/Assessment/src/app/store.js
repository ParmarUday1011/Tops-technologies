import { configureStore } from "@reduxjs/toolkit";
import taskreducer from "../features/tasks/taskSlice";

export const store = configureStore({
    reducer:{
        tasks:taskreducer
    }
})