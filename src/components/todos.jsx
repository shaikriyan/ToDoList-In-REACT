import React from "react";
import { getDataContextValue } from "../context/dataContext";

const Todos = () => {
  const { todos, toggleTodoStaus, removeTodoTask, viewStatus } =
    getDataContextValue();

  const [all, active, done] = viewStatus;

  let filteredTasks;

  if (all === true) {
    filteredTasks = todos;
  } else if (active === true) {
    filteredTasks = todos.filter((task) => task.status === false);
  } else if (done === true) {
    filteredTasks = todos.filter((task) => task.status === true);
  }

  return (
    <ul className="main-task">
      {filteredTasks.map((todoItem, index) => {
        return (
          <li key={index}>
            <input
              type="checkbox"
              id={todoItem.id}
              checked={todoItem.status}
              onChange={() => toggleTodoStaus(todoItem.id)}
            />
            <label htmlFor={todoItem.id}>{todoItem.name}</label>
            {todoItem.status && (
              <button onClick={() => removeTodoTask(todoItem.id)}>
                DELETE
              </button>
            )}
          </li>
        );
      })}
    </ul>
  );
};

export default Todos;
