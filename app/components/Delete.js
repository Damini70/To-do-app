import { MyContext } from "../MyContext.ts";
import React, { useContext } from "react";

function Delete() {
  const { deleteData } = useContext(MyContext);
  return (
    <div>
      <h1 className="font-semibold text-2xl text-green-900 m-5 flex justify-center">
        Deleted Items
      </h1>
      {deleteData.map((item) => {
        return (
          <>
            <div className="m-8">
              <div className="flex bg-red-400 justify-between items-center p-4 w-full mt-4">
                <span className="text-2xl font-semibold m-3">{item.title}</span>
              </div>
              <div></div>
            </div>
          </>
        );
      })}
    </div>
  );
}

export default Delete;
