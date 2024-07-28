"use client";
import { useForm, SubmitHandler } from "react-hook-form";
import { MyContext } from "../MyContext";
import React, { useContext, useEffect, useState } from "react";
function Form() {
  const id = Date.now();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const { data, setData } = useContext(MyContext);

  useEffect(() => {
    if (data.length > 0) {
      const string = JSON.stringify(data);
      localStorage.setItem("data", string);
    }
  }, [data]);

  const onSubmit = (entry) => {
    const a = { ...entry, id: id, completed: false };
    setData((prev) => [...prev, a]);
  };

  return (
    <div className="flex flex-col justify-center">
      <div className="w-full">
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            type="text"
            placeholder="Enter Title"
            {...register("title", { required: true })}
            className="p-2 w-full"
          />
          <br />
          <input
            type="date"
            placeholder="Enter Date"
            {...register("date", { required: true })}
            className="p-2 w-full"
          />
          <br />
          <input
            type="time"
            placeholder="Enter Time"
            {...register("time", { required: true })}
            className="p-2 w-full"
          />
          <br />
          <select
            className="p-2 bg-slate-300 rounded border-3 w-full my-2"
            {...register("slot-type", { required: true })}
          >
            <option value="">Select Slot Type</option>
            <option value="weekly">Weekly</option>
            <option value="monthly">Monthly</option>
          </select>
          <br />
          <input
            type="submit"
            className="p-2 hover:bg-red-300 rounded-lg border-3 mt-5 w-full text-white font-semibold  bg-red-500  cursor-pointer text-xl"
          />
        </form>
      </div>
    </div>
  );
}

export default Form;
