import React, { useState } from "react";

function InputChange({ handleSave, item, edit, setEdit }) {
  return (
    <div>
      <input
        type="text"
        value={edit}
        onChange={(e) => setEdit(e.target.value)}
        className="p-2 mr-auto"
      />
      <button
        className="p-4 bg-red-700 rounded-lg m-3 text-white font-semibold"
        onClick={() => handleSave(item.id)}
      >
        Save
      </button>
    </div>
  );
}

export default InputChange;
