import React, { useState } from "react";
import { TasksCollection } from "../../api/TasksCollection";
import { useForm } from "react-hook-form";

export const RegisterForm = () => {
  const { register, formState: { errors }, handleSubmit } = useForm();
  const [text,  setText] = useState("");
  const [paterno, setPaterno] = useState("");

  //ENVIAR DATOS A MONGO
  const onSubmit = (data) => {
    console.log(data)

    if (!text && !paterno) return;
  
    TasksCollection.insert({
      text: text,
      createdAt: new Date()
    });

    setText("");


    
  }

  return (
    <> 
    <h1 className="text-3xl font-semibold text-center">Registro de pacientes</h1>
    <form
      className="px-4 my-32 max-w-3xl mx-auto space-y-4 bg-gray-100 p-10 rounded border-white border-2 drop-shadow-2xl"
      onSubmit={handleSubmit(onSubmit)}
    >

      <div>
        <label>Nombre</label>
        <input
          className="border border-gray-400 block py-1 px-4 w-full rounded focus:outline-none focus:border-teal-500 shadow-lg"
          type="text"
          value={text}
          {...register("nombre", {
            required: true
          })}
          placeholder="Type to add new tasks"
          onChange={(e) => setText(e.target.value)}
        />
        {errors.nombre?.type === 'required' && <p className="text-red-700">Debe ingresar un nombre</p>}
      </div>
      <section className="flex space-x-3">
        <div className="w-1/2">
          <label>Apellido Paterno</label>
          <input
            className="border border-gray-400 block py-1 px-4 w-full rounded focus:outline-none focus:border-teal-500 shadow-lg"
            type="text"
            {...register('paterno',{
            required: true,
            
            })}
          />
          {errors.paterno?.type === 'required' && <p className="text-red-700">Debe ingresar un apellido</p>}
        </div>
        <div className="w-1/2">
          <label>Apellido Materno</label>
          <input
            className="border border-gray-400 block py-1 px-4 w-full rounded focus:outline-none focus:border-teal-500 shadow-lg"
            type="text"
            {...register('materno',{
              required: true
              })}
          />
          {errors.materno?.type === 'required' && <p className="text-red-700">Debe ingresar un apellido</p>}
        </div>
      </section>
      <section className="flex space-x-3">
        <div className="w-1/2">
          <label>Rut</label>
          <input
            className="border border-gray-400 block py-1 px-4 w-full rounded focus:outline-none focus:border-teal-500 shadow-lg"
            type="text"
            {...register('rut',{
              required: true
              })}
          />
          {errors.rut?.type === 'required' && <p className="text-red-700">Debe ingresar un rut válido</p>}
        </div>
        <div className="w-1/2">
          <label>Region</label>
          <select {...register('region',{
            required: true
            })} className="border border-gray-400 block py-1 px-4 w-full rounded focus:outline-none focus:border-teal-500 shadow-lg">
            <option value="mt">Metropolitana</option>
            <option value="mt">Metropolitana</option>
            <option value="mt">Metropolitana</option>
          </select>
        </div>
      </section>
      <section className="flex space-x-3">
        <div className="w-1/2">
          <label>Comuna</label>
          <input
            className="border border-gray-400 block py-1 px-4 w-full rounded focus:outline-none focus:border-teal-500 shadow-lg"
            type="text"
            {...register('comuna',{
              required: true
              })}
          ></input>
        </div>
        <div className="w-1/2">
          <label>Código Postal</label>
          <input
            className="border border-gray-400 block py-1 px-4 w-full rounded focus:outline-none focus:border-teal-500 shadow-lg"
            type="number"
            {...register('codigo',{
              required: true
              })}
          />
          {errors.codigo?.type === 'required' && <p className="text-red-700">Debe ingresar un código postal</p>}
        </div>
      </section>
      <button
        className="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 shadow-lg"
        type="submit"
      >
        Registrar
      </button>
    </form>
    <h1 className="text-3xl font-semibold text-center">Lista de pacientes</h1>
    </>
  );
};
