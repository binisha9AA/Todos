import React from 'react';

const ToDo = ({ todo, handleToggle, handleDeleteATodo }) => {
  const handleClick = (e) => {
    e.preventDefault();
    handleToggle(e.currentTarget.id);
  };

  const handleDeleteItem = (e, todoId) => {
    e.preventDefault();
    handleDeleteATodo(todoId);
  };

  return (
    <div className="items">
      <div
        id={todo.id}
        name="todo"
        value={todo.id}
        onClick={handleClick}
        className={todo.complete ? 'todo strike' : 'todo'}
      >
        {todo.task}
      </div>
      <button type="button" onClick={(e) => handleDeleteItem(e, todo.id)}>
        X
      </button>
    </div>
  );
};

export default ToDo;
