function Tasks({ handleCheck, handleEdit, item, handleDelete }) {
  return (
    <>
      <div>
        <input
          type="checkbox"
          checked={item.completed}
          onChange={() => handleCheck(item.id)}
        />
        <span className="text-2xl font-semibold m-3">{item.title}</span>
      </div>
      <div>
        <button
          className="p-4 bg-red-700 rounded-lg m-3 text-white font-semibold cursor-pointer  hover:bg-red-300"
          onClick={() => handleEdit(item.id)}
        >
          Edit
        </button>
        <button
          className="p-4 bg-red-700 rounded-lg m-3 text-white font-semibold cursor-pointer  hover:bg-red-300"
          onClick={() => handleDelete(item.id)}
        >
          Delete
        </button>
      </div>
    </>
  );
}

export default Tasks;
