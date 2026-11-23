
import { useEffect, useState } from "react";

function TodoItem({
  todo,
  toggleTodo,
  deleteTodo,
  editTodo,
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  useEffect(() => {
    setEditText(todo.text);
  }, [todo.text]);

  function handleEdit() {
    setEditText(todo.text);
    setIsEditing(true);
  }

  function handleSave() {
    if (editText.trim() === "") return;

    editTodo(todo.id, editText.trim());
    setIsEditing(false);
  }

  function handleCancel() {
    setEditText(todo.text);
    setIsEditing(false);
  }

  function handleKeyDown(e) {
    if (e.key === "Enter") {
      handleSave();
    }

    if (e.key === "Escape") {
      handleCancel();
    }
  }

  return (
    <div className="todo-item">
      <div className="todo-left">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={toggleTodo}
          aria-label={`Mark ${todo.text} as completed`}
        />

        {isEditing ? (
          <input
            className="edit-input"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            onKeyDown={handleKeyDown}
            aria-label="Edit todo"
            autoFocus
          />
        ) : (
          <span
            onDoubleClick={handleEdit}
            style={{
              textDecoration: todo.completed
                ? "line-through"
                : "none",
              opacity: todo.completed ? 0.6 : 1,
            }}
          >
            {todo.text}
          </span>
        )}
      </div>

      <div className="todo-buttons">
        {isEditing ? (
          <>
            <button
              className="save-btn"
              onClick={handleSave}
            >
              Save
            </button>

            <button
              type="button"
              className="cancel-btn"
              onClick={handleCancel}
            >
              Cancel
            </button>
          </>
        ) : (
          <button
            className="edit-btn"
            onClick={handleEdit}
          >
            Edit
          </button>
        )}

        <button
          className="delete-btn"
          onClick={deleteTodo}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default TodoItem;
