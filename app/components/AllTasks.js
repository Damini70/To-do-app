import React, { useContext, useEffect, useState } from "react";
import { MyContext } from "../MyContext";
import InputChange from "./InputChange.js";
import Tasks from "./Tasks.js";
const task = JSON.parse(localStorage.getItem("data"));

function AllTasks() {
  const { data, setData,setDeleteData } = useContext(MyContext);
  const [edit, setEdit] = useState("");
  const [showInput, setShowInput] = useState(false);
  const [inputId, setInputId] = useState("");

  useEffect(() => {
    if (task) {
      console.log("task", task);
      setData(task);
    }
  }, [setData]);
  useEffect(() => {
    if (data) {
      const string = JSON.stringify(data);
      if (typeof window !== 'undefined') {
        localStorage.setItem("data", string);
      }
    }
  }, [data]);
  function handleCheck(id) {
    const arr = data.map((item) => {
      return item.id === id ? { ...item, completed: !item.completed } : item;
    });
    setData(arr);
  }
  function handleSave(id) {
    const arr = data.map((item) => {
      return item.id === id ? { ...item, title: edit } : item;
    });
    setData(arr);
    setShowInput(false);
    setInputId("");
  }
  function handleEdit(id) {
    setShowInput(true);
    setInputId(id);
  }
  function handleDelete(id) {
    const delObj = data.find((item) => item.id === id);
    setDeleteData((prev)=>[...prev,delObj]);
    const update=data.filter((item)=>item.id!==id);
    setData(update);
  }
  return (
    <div>
      {data.length > 0 ? (
        <div className="m-8">
          <h1 className="font-semibold text-2xl text-green-900 m-5 flex justify-center">
            All Tasks
          </h1>
          {data.map((item) => {
            return (
              <div
                key={item.id}
                className="flex bg-red-400 justify-between items-center p-4 w-full mt-4"
              >
                {showInput && inputId === item.id ? (
                  <InputChange
                    handleSave={handleSave}
                    item={item}
                    edit={edit}
                    setEdit={setEdit}
                  />
                ) : (
                  <>
                    {" "}
                    <Tasks
                      handleCheck={handleCheck}
                      handleEdit={handleEdit}
                      item={item}
                      handleDelete={handleDelete}
                    />
                  </>
                )}
              </div>
            );
          })}
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}

export default AllTasks;
