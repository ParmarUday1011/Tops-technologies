import React from "react";
import { useDispatch } from "react-redux";
import { setSearch } from "../features/tasks/taskSlice";

export default function SearchBar() {
  const dispatch = useDispatch();

  return (
    <input
      type="text"
      placeholder="Search by title..."
      onChange={(e) => dispatch(setSearch(e.target.value))}
      className="w-full p-2 mb-4 border rounded"
    />
  );
}
