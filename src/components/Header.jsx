import noteImg from '../assets/images/notes.png';
import plusImg from '../assets/images/plus.png';
import doubleTickImg from '../assets/images/double-tick.png';
import { useDispatch } from 'react-redux';
import { allCompleted, clearCompleted } from '../redux/todos/actions';
const Header = () => {
  const dispatch = useDispatch();

  const handleCompletedAll = ()=>{
    dispatch(allCompleted())
  }
  const handleClearAll = ()=>{
    dispatch(clearCompleted())
  }
  return (
    <div>
      <form className="flex items-center bg-gray-100 px-4 py-4 rounded-md">
        <img src={noteImg} className="w-6 h-6" alt="Add todo" />
        <input
          type="text"
          placeholder="Type your todo"
          className="w-full text-lg px-4 py-1 border-none outline-none bg-gray-100 text-gray-500"
        />
        <button
          type="submit"
          className={`appearance-none w-8 h-8 bg-[url(${plusImg})] bg-no-repeat bg-contain`}
        ></button>
      </form>

      <ul className="flex justify-between my-4 text-xs text-gray-500">
        <li
          className="flex space-x-1 cursor-pointer"
          onClick={handleCompletedAll}
        >
          <img className="w-4 h-4" src={doubleTickImg} alt="Complete" />
          <span>Complete All Tasks</span>
        </li>
        <li className="cursor-pointer" onClick={handleClearAll}>
          Clear completed
        </li>
      </ul>
    </div>
  );
};

export default Header;
