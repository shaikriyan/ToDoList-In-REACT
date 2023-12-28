import React, { useState } from "react";
import { getDataContextValue } from "../context/dataContext";

const AddTodo = () => {
  const [todo, setTodo] = useState("");

  const { handleAddTodo } = getDataContextValue();

  const formSubmitHandler = (e) => {
    e.preventDefault();
    handleAddTodo(todo);
    setTodo("");
  };

  return (
    <>
      <form onSubmit={formSubmitHandler}>
        <input
          type="text"
          value={todo}
          placeholder="Add your task here"
          onChange={(e) => {
            setTodo(e.target.value);
          }}
        />
        <button>ADD</button>
      </form>
    </>
  );
};

export default AddTodo;
