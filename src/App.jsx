import "./App.css";
import Navbar from "./components/Navbar";
import AddTodo from "./components/addTodo";
import Todos from "./components/todos";

function App() {
  return (
    <>
      <main>
        <h2>Plan Your Day</h2>
        <AddTodo />
        <Navbar />
        <Todos />
      </main>
    </>
  );
}

export default App;
