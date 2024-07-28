"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import AllTasks from "./components/AllTasks.js";
import Form from "./components/Form.js";
import Completed from "./components/Completed.js";
import Delete from "./components/Delete.js";

export default function Home() {
  const [showAll, setShowAll] = useState(false);
  const [showCompleted, setShowCompleted] = useState(false);
  const [showDelete, setShowDelete] = useState(false);
  return (
    <div className="m-4">
      <h1 className="font-semibold text-3xl flex justify-center my-3">
        Todo List
      </h1>
      <hr className="font-bold" />
      <div className="md:flex md:gap-8 h-screen width-[100%]">
        <div className="md:w-[25%] sm:w-[auto] bg-red-500 p-4">
          <ul className="flex sm:flex-row md:flex-col justify-between items-center font-semibold text-white">
            <li className="cursor-pointer ">
              <Link href="#" onClick={() => setShowAll(!showAll)}>
                All Task
              </Link>
            </li>
            <li className="cursor-pointer ">
              <Link href="#" onClick={() => setShowCompleted(!showCompleted)}>
                Completed
              </Link>
            </li>
            <li className="cursor-pointer ">
              <Link href="#" onClick={() => setShowDelete(!showDelete)}>
                Deleted
              </Link>
            </li>
          </ul>
        </div>
        <div className="md:w-[70%] m-3">
          <Form />
          {showAll && <AllTasks />}
          {showCompleted && <Completed />}
          {showDelete && <Delete />}
        </div>
      </div>
    </div>
  );
}
