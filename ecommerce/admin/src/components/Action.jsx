
import {
  FiEye,
  FiEdit2,
  FiTrash2,
} from "react-icons/fi";

function Action({ onView, onEdit, onDelete }) {
  return (
    <div className="absolute right-0 top-10 z-20 w-40 rounded-xl border border-gray-100 bg-white p-2 shadow-lg">

      {/* View */}
      <button
        onClick={onView}
        className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-gray-700 transition hover:bg-gray-100"
      >
        <FiEye size={17} />
        View
      </button>

      {/* Edit */}
      <button
        onClick={onEdit}
        className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-gray-700 transition hover:bg-gray-100"
      >
        <FiEdit2 size={17} />
        Edit
      </button>

      {/* Delete */}
      <button
        onClick={onDelete}
        className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-red-500 transition hover:bg-red-50"
      >
        <FiTrash2 size={17} />
        Delete
      </button>

    </div>
  );
}

export default Action;
