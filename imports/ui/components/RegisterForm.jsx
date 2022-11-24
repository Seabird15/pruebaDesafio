import React, { useState } from 'react';
import { TasksCollection } from '../../api/TasksCollection';
import { useForm } from "react-hook-form"

export const RegisterForm = () => {
    const { register, handleSubmit } = useForm()
    const [text, setText] = useState("");
  
    const submit = e => {
      e.preventDefault();
  
      if (!text) return;
  
      TasksCollection.insert({
        text: text.trim(),
        createdAt: new Date()
      });
  
      setText("");

      
    };
   
    return (
      <form className="task-form" onSubmit={submit}>
        <div>
        <label>Nombre</label>
        <input
          type="text"
          placeholder="Type to add new tasks"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        </div>
        <div>
        <label>Apellido Paterno</label>
        <input type="text"></input>
        </div>
        <div>
        <label>Apellido Materno</label>
        <input type="text"></input>
        </div>
        <div>
        <label>Apellido Rut</label>
        <input type="text"></input>
        </div>
        <div>
        <label>Region</label>
        <select>
          <option value="mt">Metropolitana</option>
          <option value="mt">Metropolitana</option>
          <option value="mt">Metropolitana</option>
        </select>
        </div>
        <div>
        <label>Comuna</label>
        <input type="text"></input>
        </div>
        <button type="submit">Add Task</button>
      </form>
    );
  };