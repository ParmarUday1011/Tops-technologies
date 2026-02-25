import { useEffect } from 'react';
import './App.css'
import { useDispatch } from 'react-redux';
import { fetchTasks } from './features/tasks/taskSlice';
import TaskForm from "./components/TaskForm";
import TaskTable from "./components/TaskTable";
import SearchBar from "./components/SearchBar";

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchTasks());
  }, []);

  return (
    <div className="min-h-screen bg-gray-200 p-8">
      <div className="max-w-4xl mx-auto space-y-6">
        <h1 className='text-center text-3xl font-extrabold bg-gradient-to-r from-yellow-500 via-pink-300 to-blue-500 bg-clip-text text-transparent'>Task Manager App</h1>
        <TaskForm/>
        <SearchBar/>
        <TaskTable />
      </div>
    </div>
  )
}

export default App
