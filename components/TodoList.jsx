import React, { useState } from 'react';
import styles from "../styles/Forma.module.css"


export default function TodoList() {
  
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    if (!newTask) return; 
    const newTasks = [...tasks, { id: Date.now(), text: newTask, completed: false }];
    setTasks(newTasks);
    setNewTask('');
  };

  const deleteTask = (taskId) => {
    const newTasks = tasks.filter(task => task.id !== taskId);
    setTasks(newTasks);
  };

  const toggleTaskCompleted = (taskId) => {
    const newTasks = tasks.map(task => {
      if (task.id === taskId) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setTasks(newTasks);
  };

  return (
    
    <div className={styles.tlo}>
      <section className="vh-100">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col">
              <div className="card" id="list1" style={{ borderRadius: '.75rem', backgroundColor: '#eff1f2' }}>
                <div className="card-body py-4 px-4 px-md-5">
                  <p className="h1 text-center mt-3 mb-4 pb-3 text-primary">
                    <u>My Todo-s</u>
                  </p>

                  <div className="pb-2">
                    <div className="card">
                      <div className="card-body">
                        <div className="d-flex flex-row align-items-center">
                          <input 
                            type="text"
                            className="form-control form-control-lg"
                            value={newTask}
                            onChange={(e) => setNewTask(e.target.value)}
                            placeholder="Add new..."
                          />
                          <button 
                            type="button" 
                            className="btn btn-primary"
                            onClick={addTask}
                          >
                            Add
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <ul className="list-group list-group-flush">
                    {tasks.map((task) => (
                      <li key={task.id} className="list-group-item">
                        <div className="d-flex justify-content-between align-items-center">
                          <div className="d-flex align-items-center">
                            <input 
                              type="checkbox" 
                              className="me-2"
                              checked={task.completed}
                              onChange={() => toggleTaskCompleted(task.id)}
                            />
                            <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
                              {task.text}
                            </span>
                          </div>
                          <button 
                            type="button" 
                            className="btn btn-danger btn-sm"
                            onClick={() => deleteTask(task.id)}
                          >
                            Delete
                          </button>
                        </div>
                      </li>
                    ))}
                  </ul>

                </div>
              </div>
            </div>
          </div>
        </div>
        
      </section>
    </div>
    
  );
}

  
