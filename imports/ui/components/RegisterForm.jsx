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
      <form className="px-4 my-32 max-w-3xl mx-auto space-y-4 bg-gray-100 p-10 rounded border-white border-2 drop-shadow-2xl" onSubmit={submit}>
        <h1 className='text-3xl font-semibold'>Registro de pacientes</h1>
        <div>
        <label>Nombre</label>
        <input className='border border-gray-400 block py-1 px-4 w-full rounded focus:outline-none focus:border-teal-500 shadow-lg'
          type="text"
          placeholder="Type to add new tasks"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        </div>
        <section className='flex space-x-3'>
        <div className='w-1/2'>
        <label>Apellido Paterno</label>
        <input className='border border-gray-400 block py-1 px-4 w-full rounded focus:outline-none focus:border-teal-500 shadow-lg' type="text"></input>
        </div>
        <div className='w-1/2'>
        <label>Apellido Materno</label>
        <input className='border border-gray-400 block py-1 px-4 w-full rounded focus:outline-none focus:border-teal-500 shadow-lg' type="text"></input>
        </div>
        </section>
        <section className='flex space-x-3'>
        <div className='w-1/2'>
        <label>Rut</label>
        <input className='border border-gray-400 block py-1 px-4 w-full rounded focus:outline-none focus:border-teal-500 shadow-lg' type="text"></input>
        </div>
        <div className='w-1/2'>
        <label>Region</label>
        <select className='border border-gray-400 block py-1 px-4 w-full rounded focus:outline-none focus:border-teal-500 shadow-lg'>
          <option value="mt">Metropolitana</option>
          <option value="mt">Metropolitana</option>
          <option value="mt">Metropolitana</option>
        </select>
        </div>
        </section>
        <section className='flex space-x-3'>
        <div className='w-1/2'>
        <label>Comuna</label>
        <input className='border border-gray-400 block py-1 px-4 w-full rounded focus:outline-none focus:border-teal-500 shadow-lg' type="text"></input>
        </div>
        <div className='w-1/2'>
        <label>Código Postal</label>
        <input className='border border-gray-400 block py-1 px-4 w-full rounded focus:outline-none focus:border-teal-500 shadow-lg' type="number"></input>
        </div>
        </section>
        <button className='text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 shadow-lg' type="submit">Registrar</button>
      </form>
    );
  };