import { useDispatch, useSelector } from "react-redux";
import { colorChanged, statusChanged } from "../redux/filters/actions";

const numberOfTaskLeft = (numberOfTodos) => {
  switch (numberOfTodos) {
    case 0:
      return "No task ";
    case 1:
      return "1 task ";
    default:
      return `${numberOfTodos} tasks `;
  }
}; 

const Footer = () => {
  const todos = useSelector(state => state.todos);
  const taskLeft = todos.filter(todo=> !todo.completed).length;

  const dispatch = useDispatch();

  const filters = useSelector(state=>state.filters);
  const {status, colors} = filters;

  const handleStatusChanged = (status)=>{
    dispatch(statusChanged(status));
  }
  const handleColorChanged = (color)=>{
    if(colors.includes(color)){
      dispatch(colorChanged('removed', color))
    }else{
      dispatch(colorChanged("added", color));
    }
  }
  return (
    <div className="mt-4 flex justify-between text-xs text-gray-500">
      <p>{numberOfTaskLeft(taskLeft)} left</p>
      <ul className="flex space-x-1 items-center text-xs">
        <li
          className={`cursor-pointer ${status === "All" && "font-bold"}`}
          onClick={() => handleStatusChanged("All")}
        >
          All
        </li>
        <li>|</li>
        <li
          className={`cursor-pointer ${status === "Incomplete" && "font-bold"}`}
          onClick={() => handleStatusChanged("Incomplete")}
        >
          Incomplete
        </li>
        <li>|</li>
        <li
          className={`cursor-pointer ${status === "Complete" && "font-bold"}`}
          onClick={() => handleStatusChanged("Complete")}
        >
          Complete
        </li>
        <li></li>
        <li></li>
        <li
          className={`h-3 w-3 border-2 border-green-500 md:hover:bg-green-500 rounded-full cursor-pointer ${
            colors.includes("green") && "bg-green-500"
          } `}
          onClick={() => handleColorChanged("green")}
        ></li>
        <li
          className={`h-3 w-3 border-2 border-yellow-500 md:hover:bg-yellow-500 rounded-full cursor-pointer ${
            colors.includes("yellow") && "bg-yellow-500"
          }`}
          onClick={() => handleColorChanged("yellow")}
        ></li>
        <li
          className={`h-3 w-3 border-2 border-red-500 md:hover:bg-red-500 rounded-full cursor-pointer ${
            colors.includes("red") && "bg-red-500"
          }`}
          onClick={() => handleColorChanged("red")}
        ></li>
      </ul>
    </div>
  );
};

export default Footer;
