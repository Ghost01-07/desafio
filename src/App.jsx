import React, { useState } from "react"


function App() {
  
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState ("");

  const handleInputChange = (event) => {
    setNewTask(event.target.value);
  };

  const handleAddTask = () => {
    if (newTask.trim() !== ""){
      setTasks([...tasks, newTask]);
      setNewTask("");
    }
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  }

  return (

      <div>
        <h1>Desafio 2</h1>
      <input 
        type="text"
        placeholder="Agregar Tarea"
        value={newTask}
        onChange={handleInputChange}
      />
      <button onClick={handleAddTask}>Agregar Tarea</button>
      <ul>
        {tasks.map((tasks, index) => (

          <li key={index}>

            {tasks}
            <button onClick={() => handleDeleteTask(index)}>Eliminar</button>
          </li>
        ))}
      </ul>
      </div>
  );
}

export default App
