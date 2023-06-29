import React from 'react';
import ToDo from './ToDo';

const ToDoList = ({
  toDoList,
  handleToggle,
  handleFilter,
  handleDeleteATodo,
}) => {
  return (
    <div>
      {toDoList.map((todo) => {
        return (
          <div key={Math.random()}>
            <ToDo
              todo={todo}
              handleToggle={handleToggle}
              handleFilter={handleFilter}
              handleDeleteATodo={handleDeleteATodo}
            />
          </div>
        );
      })}
      <button
        style={{ width: '100%', background: 'green', color: 'white' }}
        onClick={handleFilter}
      >
        Clear
      </button>
    </div>
  );
};

export default ToDoList;
