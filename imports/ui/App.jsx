import React from 'react';
import { useTracker } from 'meteor/react-meteor-data';
import { TasksCollection } from '/imports/api/TasksCollection';
import { Task } from './Task';
import { RegisterForm } from './components/RegisterForm';

const toggleChecked = ({ _id, isChecked }) => {
  TasksCollection.update(_id, {
    $set: {
      isChecked: !isChecked
    }
  })
};

const deleteTask = ({ _id }) => TasksCollection.remove(_id);

export const App = () => {
  const tasks = useTracker(() => TasksCollection.find({}, { sort: { createdAt: -1 } }).fetch());

  return (
    <div>
      <h1>Welcome to Meteor!</h1>
      <RegisterForm />
      <ul>
        { tasks.map(task => <Task key={ task._id } task={ task } onCheckboxClick={toggleChecked} onDeleteClick={deleteTask}/>) }
      </ul>
    </div>
  );
};