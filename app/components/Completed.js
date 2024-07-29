import { useContext } from "react";
import { MyContext } from "../MyContext.ts";
import Tasks from "./Tasks.js";

function Completed() {
  function handleEdit(id) {
    setShowInput(true);
    setInputId(id);
  }
  function handleCheck(id) {
    const arr = data.map((item) => {
      return item.id === id ? { ...item, completed: !item.completed } : item;
    });
    setData(arr);
  }
  const { data } = useContext(MyContext);
  const completed = data.filter((item) => item.completed === true);
  return (
    <div>
      <h1 className="font-semibold text-2xl text-green-900 m-5 flex justify-center">
        Completed Items
      </h1>
      {completed.map((item) => {
        return (
          <div key={item.id} className="m-8">
            <div className="flex bg-red-400 justify-between items-center p-4 w-full mt-4">
              <span className="text-2xl font-semibold m-3">{item.title}</span>
            </div>
            <div></div>
          </div>
        );
      })}
    </div>
  );
}

export default Completed;
