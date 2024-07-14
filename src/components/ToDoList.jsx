import { useDispatch, useSelector } from "react-redux";
import ToDo from "./ToDo";
import { useEffect } from "react";
import fetchTodos from "../redux/todos/thunk/fetchTodos";

const ToDoList = () => {
  const todos = useSelector((state) => state.todos);
  const filters = useSelector((state) => state.filters);

  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(fetchTodos)
  },[dispatch])

  const filterByStatus = (todo) => {
    const { status } = filters;
    switch (status) {
      case "Incomplete":
        return !todo.completed;
      case "Complete":
        return todo.completed;
      default:
        return true;
    }
  };
  const filterByColor = (todo) => {
    const { colors } = filters;
    if (colors.length > 0) {
      return colors.includes(todo?.color);
    } else {
      return true;
    }
  };
  return (
    <div className="mt-2 text-gray-700 text-sm max-h-[300px] overflow-y-auto">
      {/* -- todo -- */}
      {todos
        .filter(filterByStatus)
        .filter(filterByColor)
        .map((todo) => (
          <ToDo key={todo.id} todo={todo} />
        ))}
    </div>
  );
};

export default ToDoList;
