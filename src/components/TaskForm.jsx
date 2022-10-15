import { useState, useContext } from 'react';
import { TaskContext } from '../context/TaskContext';

function TaskForm() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const { createTask } = useContext(TaskContext);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    createTask({ title, description });
    setTitle('');
    setDescription('');
  };

  return (
    <div className="max-w-md mx-auto">
      <form
        onSubmit={handleSubmit}
        className="bg-gray-800 p-10 mb-4 rounded-lg"
      >
        <h1 className="text-2xl font-bold mb-3 text-white">Crea tu Tarea</h1>
        <input
          type="text"
          placeholder="Escribe tu tarea"
          onChange={(evt) => {
            setTitle(evt.target.value);
          }}
          value={title}
          autoFocus
          className="bg-gray-700 p-3 w-full mb-2 outline-none rounded-md border-2 border-transparent focus:border-indigo-400 focus:border-2 text-white"
        />
        <textarea
          placeholder="Descripción de Tarea"
          onChange={(evt) => setDescription(evt.target.value)}
          value={description}
          className="bg-gray-700 p-3 w-full mb-2 outline-none rounded-md border-2 border-transparent focus:border-indigo-400 focus:border-2 text-white"
        ></textarea>
        <button className="bg-indigo-500 px-3 py-2 text-white rounded-md min-w-full hover:bg-indigo-700">
          Guardar
        </button>
      </form>
    </div>
  );
}

export default TaskForm;
