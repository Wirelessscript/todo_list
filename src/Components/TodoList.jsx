import React, { useState } from 'react';
import './TodoList.css';

const TodoList = () => {
const [todos, setTodos] = useState([]);
const [headingInput, setHeadingInput] = useState('');
const [listInputs, setListInputs] = useState({});

const handleAddTodo = () => {
    if (headingInput.trim() !== '') {
        setTodos([...todos,{ heading: headingInput, lists: [] }]);
    }
};
  return (
    <>
      <div className="todo-container">
        <h1 className="title">My Todo List</h1>
        <div className="input-container">
          <input
            type="text"
            className="heading-input"
            placeholder="Enter heading"
            Value={headingInput}
            onChange={(e) => {setHeadingInput(e.target.value);}} //Add onChange event handler to update headingInput state                 
          />
          <button className="add-list-button" onClick={handleAddTodo}>Add Heading</button>
        </div>
    </div>
      <div className="todo_main">
        {todos.map((todos, index) => (
            <div key={index} className="todo-card">
                <div className="heading_todo">
                    <h3>{todos.heading}</h3> {/* Display the heading here */}
                    <button className="delete-button-heading" onClick={() => handleDeleteToDo(index)}>Delete Heading </button>
                </div>
                <div className='add_list'>
                    <input
                        type="text"
                        className="list-input"
                        placeholder="Add List"
                        value={listInputs[index] || ''}
                        onChange={(e) => handleListInputChange(index, e.target.value)}/>
                    <button className="add-list-button" onClick={() => handleAddList(index)}>Add List</button>
                </div>

            </div>
        ))}
    </div>
    </>
  );
};

export default TodoList;
