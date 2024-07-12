import ToDo from "./ToDo";


const ToDoList = () => {
  return (
    <div className="mt-2 text-gray-700 text-sm max-h-[300px] overflow-y-auto">
      {/* -- todo -- */}
      <ToDo />
    </div>
  );
};

export default ToDoList;
