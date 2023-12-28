import { createContext, useContext, useState } from "react";

const DataContext = createContext(null);

export default DataContext;

// Provider
export const DataProvider = (props) => {
  const [todos, setTodos] = useState(() => {
    try {
      const newTodos = localStorage.getItem("todos") || [];
      return JSON.parse(newTodos);
    } catch (error) {
      return [];
    }
  });

  const [viewStatus, updateViewStatus] = useState([true, false, false]);

  const handleAddTodo = (task) => {
    setTodos((prev) => {
      //   console.log("prev", prev);
      const newTaskList = [
        {
          name: task,
          id: Math.floor(Math.random() * 100) + 1,
          status: false,
        },
        ...prev,
      ];
      //   console.log("newArray", newTaskList);
      localStorage.setItem("todos", JSON.stringify(newTaskList));
      return newTaskList;
    });
  };

  const toggleTodoStaus = (taskID) => {
    setTodos((prev) => {
      //   console.log("prev", prev);
      const ToggledList = prev.map((item) => {
        if (item.id === taskID) {
          return { ...item, status: !item.status };
        }
        return item;
      });
      //   console.log("ToggledList", ToggledList);
      localStorage.setItem("todos", JSON.stringify(ToggledList));
      return ToggledList;
    });
  };

  const removeTodoTask = (id) => {
    setTodos((prev) => {
      console.log("prev", prev);
      const removedList = prev.filter((item) => item.id !== id);
      console.log("removedList", removedList);
      localStorage.setItem("todos", JSON.stringify(removedList));
      return removedList;
    });
  };

  return (
    <DataContext.Provider
      value={{
        todos,
        setTodos,
        handleAddTodo,
        toggleTodoStaus,
        removeTodoTask,
        updateViewStatus,
        viewStatus,
      }}
    >
      {props.children}
    </DataContext.Provider>
  );
};

export const getDataContextValue = () => {
  const DataContextValue = useContext(DataContext);

  return DataContextValue;
};
