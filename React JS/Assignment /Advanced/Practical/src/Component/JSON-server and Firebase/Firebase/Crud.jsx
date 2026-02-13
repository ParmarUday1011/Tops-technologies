import { db } from "../../../firebase";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  updateDoc,
} from "firebase/firestore";
import { useEffect, useState } from "react";

export default function Crud() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const taskcollect = collection(db, "tasks");

  const addtask = async () => {
    await addDoc(taskcollect, { task });
    getTasks();
  };

  const getTasks = async () => {
    const data = await getDocs(taskcollect);
    setTasks(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  const deletetask = async (id) => {
    const taskdoc = doc(db, "tasks", id);
    await deleteDoc(taskdoc);
    getTasks();
  };

  const updatetask = async (id) => {
    const taskdoc = doc(db, "tasks", id);
    await updateDoc(taskdoc, { task: task + "(update)" });
    getTasks();
  };

  useEffect(() => {
    getTasks();
  }, []);

  return (
    <div>
      <h1>CRUD Task</h1>
      <input onChange={(e) => setTask(e.target.value)} />
      <button onClick={addtask}>Add Task</button>

      {tasks.map((t)=>(
        <div key={t.id}>
            <h2>{t.task}</h2>
            <button onClick={()=>deletetask(t.id)}>Delete</button>
            <button onClick={()=>updatetask(t.id)}>Edit</button>
        </div>
      ))}
    </div>
  );
}
