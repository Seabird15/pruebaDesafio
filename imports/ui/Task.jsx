import React from 'react';

export const Task = ({ task, onCheckboxClick, onDeleteClick }) => {
  return (
    <>
    <div className='px-4  max-w-3xl mx-auto space-y-1 bg-gray-100 p-2 m-2 tracking-wide rounded border-white border-2 drop-shadow-2xl'> 
    <li>
      <input className='m-2'
        type="checkbox"
        checked={!!task.isChecked}
        onClick={() => onCheckboxClick(task)}
        readOnly
      />
      <span>{task.text}</span>
      <span>{task.paterno}</span>      <button onClick={ () => onDeleteClick(task) }>&times;</button>
    </li>
    </div>
    </>
  );
};