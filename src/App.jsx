// import { useSelector } from "react-redux";
import { TodoList } from "./components/TodoList";
import "./styles.css";

export default function App() {
  // const state = useSelector((state) => ({ ...state }));
  // console.log(state, "state");
  return (
    <div className="App">
      <TodoList />
    </div>
  );
}
